from frappe.model.document import Document
import time
import pyodbc
import os
import frappe
import logging
import json
import requests

from frappe import _

class Capturadepesos(Document):
    pass 
    
@frappe.whitelist()
def actualizar_peso_desde_archivo(allow_guest=True):
    try:
        remote_ip = frappe.local.request.remote_addr

        # Convertir la dirección IP a cadena y mostrarla
        ip_string = str(remote_ip)

        last_modified_time = os.path.getmtime('eTIBA/public/files/DataRecibida/DatosBascula_'+remote_ip+'.txt')
        
        # Verificar si el archivo ha sido modificado desde la última vez
        if hasattr(actualizar_peso_desde_archivo, 'last_modified_time') and \
           actualizar_peso_desde_archivo.last_modified_time == last_modified_time:
            # El archivo no ha sido modificado, devolver None
            return None

        # Actualizar el atributo last_modified_time
        actualizar_peso_desde_archivo.last_modified_time = last_modified_time

        with open('eTIBA/public/files/DataRecibida/DatosBascula_'+remote_ip+'.txt', 'r') as file:
            lines = file.readlines()
            if lines:
                last_line = lines[-1].strip()
                peso = float(last_line.split('|')[0])  # convierte el peso a un número decimal
                uom = last_line.split('|')[2]
                # Verificar que no sea un registro repetido comparando con el último guardado
                last_saved = obtener_ultimo_registro_guardado()
                if last_saved and last_saved == (peso, uom):
                    # Es un registro repetido, devolver None
                    return None
            else:
                peso = 1
                uom = "-"
    except FileNotFoundError:
        peso = 1
        uom = "-"

    return peso, uom

# Función para obtener el último registro guardado
def obtener_ultimo_registro_guardado(allow_guest=True):
    try:
        remote_ip = frappe.local.request.remote_addr
        ip_string = str(remote_ip)
        with open('eTIBA/public/files/DataRecibida/DatosBascula_'+remote_ip+'.txt', 'r') as file:
            last_line = file.read().strip()
            if last_line:
                return tuple(last_line.split('|')[:2])
    except FileNotFoundError:
        pass
    return None


import os

@frappe.whitelist(allow_guest=True)
def escribir_registro_bacula(weight, unidad, bascula_id, date, COM):
    try:
        # Crea el nombre de archivo usando la bascula_id
        file_path = f'eTIBA/public/files/DataRecibida/DatosBascula_{bascula_id}.txt'
        print(f"Intentando escribir en el archivo: {file_path}")
        ipcliente = frappe.local.request_ip
        print(ipcliente)

        # Valida si el archivo de texto existe y lo crea si no existe
        if not os.path.exists(file_path):
            print(f"El archivo no existe. Creándolo...")
            fecha_actual = frappe.utils.now_datetime().strftime('%Y-%m-%d %H:%M:%S')
            log_message = f'0|{bascula_id}|{unidad}|{fecha_actual}|{fecha_actual}|{COM}\n'
            try:
                with open(file_path, 'w') as f:
                    f.write(log_message)
                print("Archivo creado exitosamente.")
            except IOError:
                print("Error al intentar crear el archivo.")
                frappe.log_error(_('No se pudo escribir en el archivo'), _('Error de escritura'))
                return False

        # Agrega una línea nueva con los datos de peso, fecha, usuario e ID de báscula
        fecha_actual = frappe.utils.now_datetime().strftime('%Y-%m-%d %H:%M:%S')
        log_message = f'{weight}|{bascula_id}|{unidad}|{fecha_actual}|{date}|{COM}\n'
        try:
            with open(file_path, 'a') as f:
                f.write(log_message)
            print("Datos escritos en el archivo exitosamente.")
        except IOError:
            print("Error al intentar escribir en el archivo.")
            frappe.log_error(_('No se pudo escribir en el archivo'), _('Error de escritura'))
            return False

        # Retorna True para indicar que la escritura fue exitosa
        return True, 200

    except Exception as e:
        # Registra cualquier error inesperado
        print(f"Error inesperado: {e}")
        frappe.log_error(_('Error inesperado al procesar la solicitud'), _('Error no manejado'))
        return False


@frappe.whitelist(allow_guest=True)
def obtener_ordenes_sql(doctype, docname):
    try:
        # Obtener valores del campo 'orden' del documento 'Captura de pesos'
        captura_de_pesos = frappe.get_all('Captura de pesos', fields=['orden'])

        # Obtener los valores del campo 'orden' de todos los registros
        docnums_utilizados = [orden.get('orden') for orden in captura_de_pesos]

        # Obtener credenciales desde la base de datos
        credenciales = frappe.db.get_value('Credenciales', {'docstatus': 1}, ['server_sql', 'database_sql', 'username_sql', 'password_sql', 'driver_sql'])
        server, database, username, password, driver = credenciales

        # Crear cadena de conexión
        connection_string = f'DRIVER={driver};SERVER={server};DATABASE={database};UID={username};PWD={password}'

        # Imprimir cadena de conexión (para propósitos de depuración)
        print(connection_string)

        # Conectar a la base de datos
        with pyodbc.connect(connection_string) as connection:
            # Crear un cursor
            with connection.cursor() as cursor:
                # Consulta SQL excluyendo los docnums utilizados
                if docnums_utilizados:
                    query = f"SELECT DISTINCT DocNum FROM OWOR WHERE DocNum NOT IN ({','.join(map(str, docnums_utilizados))})"
                else:
                    query = "SELECT DISTINCT DocNum FROM OWOR"

                # Ejecutar la consulta SQL
                cursor.execute(query)

                # Obtener todas las filas
                rows = cursor.fetchall()

        # Extraer los valores de DocNum de los resultados
        docnums_disponibles = [row.DocNum for row in rows]

        # Imprimir los DocNums disponibles (para propósitos de depuración)
        print("disponibles:", docnums_disponibles)

        return {"docnums": docnums_disponibles}

    except pyodbc.Error as ex:
        frappe.log_error(f"Error en la consulta SQL: {ex}")
        raise

    finally:
        if 'connection' in locals():
            connection.close()



@frappe.whitelist(allow_guest=True)
def obtener_encabezado(doctype, docname, orden):
    try:
        # Obtener credenciales desde la base de datos
        credenciales = frappe.db.get_value('Credenciales', {'docstatus': 1}, ['server_sql', 'database_sql', 'username_sql', 'password_sql', 'driver_sql'])
        server, database, username, password, driver = credenciales

        # Crear cadena de conexión
        connection_string = f'DRIVER={driver};SERVER={server};DATABASE={database};UID={username};PWD={password}'

        # Imprimir cadena de conexión (para propósitos de depuración)
        print(connection_string)

        # Conectar a la base de datos
        with pyodbc.connect(connection_string) as connection:
            # Crear un cursor
            with connection.cursor() as cursor:
                # Consulta SQL
                query = f"SELECT ProdName, ItemCode, CreateDate, CardCode,Uom FROM OWOR where DocNum={orden}"

                # Ejecutar la consulta SQL
                cursor.execute(query)
                
                # Obtener todas las filas
                rows = cursor.fetchall()

        # Extraer los valores de DocNum de los resultados
        resultados = [{"ProdName": row.ProdName, "ItemCode": row.ItemCode,
                       "CreateDate": row.CreateDate, "CardCode": row.CardCode, "Uom": row.Uom} for row in rows]

        return {"resultados": resultados}

    except pyodbc.Error as ex:
        frappe.log_error(f"Error en la consulta SQL: {ex}")
        raise

    finally:
        if 'connection' in locals():
            connection.close()

@frappe.whitelist(allow_guest=True)
def insertar_detalle_eliminado(detalle_eliminado, doc=None):
    # Asegurarse de que doc sea un diccionario
    if doc and isinstance(doc, str):
        doc = frappe.get_doc(json.loads(doc))

    for detalle in doc.get('detalle', []):

        detalle_eliminado_doc = frappe.new_doc('Detalle Eliminado')
        detalle_eliminado_doc.nombre = doc.name  # Asigna el nombre del documento padre
        detalle_eliminado_doc.bobina = detalle.get('bobina')
        detalle_eliminado_doc.fecha_ingreso = detalle.get('fecha_ingreso')
        detalle_eliminado_doc.operador = detalle.get('operador')
        detalle_eliminado_doc.peso = detalle.get('peso')
        detalle_eliminado_doc.peso_tara = detalle.get('peso_tara')
        detalle_eliminado_doc.tipo = "detalle"
        detalle_eliminado_doc.flg = detalle.get('flg')
        detalle_eliminado_doc.insert(ignore_permissions=True)

    return detalle_eliminado_doc.name

@frappe.whitelist(allow_guest=True)
def insertar_desperdicio_eliminado(detalle_eliminado, doc=None):
    # Asegurarse de que doc sea un diccionario
    if doc and isinstance(doc, str):
        doc = frappe.get_doc(json.loads(doc))

    for detalle in doc.get('desperdicio', []):

        detalle_eliminado_doc = frappe.new_doc('Detalle Eliminado')
        detalle_eliminado_doc.nombre = doc.name  # Asigna el nombre del documento padre
        detalle_eliminado_doc.bobina = detalle.get('des_bobina')
        detalle_eliminado_doc.fecha_ingreso = detalle.get('des_fecha_ingreso')
        detalle_eliminado_doc.operador = detalle.get('des_operador')
        detalle_eliminado_doc.peso = detalle.get('des_peso')
        detalle_eliminado_doc.peso_tara = detalle.get('des_peso_tara')
        detalle_eliminado_doc.tipo = "desperdicio"
        detalle_eliminado_doc.flg = detalle.get('flg')
        detalle_eliminado_doc.insert(ignore_permissions=True)

    return detalle_eliminado_doc.name


# Modificar tu código del servidor
@frappe.whitelist(allow_guest=True)
def imprimir_etiqueta(numeroorden, idproceso, idimpresion,detalle_insertado,manual):
    remote_ip = frappe.local.request.remote_addr
    ip_string = str(remote_ip)

    ip_address = ip_string
    port = 5001
    url_impresion = f"http://{ip_address}:{port}/ImpresionEtiquetas"

    data = {
        "idorden": numeroorden,  # Usar el valor proporcionado como argumento
        "idproceso": idproceso,  # Usar el valor proporcionado como argumento
        "idimpresion": idimpresion,  # Usar el valor proporcionado como argumento
        "idordendetalle": detalle_insertado
    }

    if manual == '0':

        try:
            # Realizar la solicitud POST al servicio de impresión
            response = requests.post(url_impresion, json=data, timeout=3)
            response.raise_for_status()
            print(response, response.raise_for_status())

        except requests.exceptions.RequestException as e:
            # Capturar cualquier error de solicitud
            print("Error al imprimir etiqueta: ", e)

            frappe.throw(
                title='Error',
                msg='Impresora no disponible, validar que este en ejecución el programa Impresora.exe'
                )
            #frappe.msgprint(_("Impresora no disponible, validar que este en ejecución el programa Impresora.exe: {0}").format(str(e)))
            #return {'error_message': _('Impresora no disponible, validar que este en ejecución el programa Impresora.exe.')}
    else:
        True

