


frappe.ui.form.on('Captura de pesos', {
    refresh: function(frm) {
        

        if(frm.doc.idproceso == 1)
        {
            frm.page.wrapper.find('#captura-de-pesos-detalle_desperdicio_tab-tab').css({
                'color': '#ddf013'  // Cambia el color del texto de la pestaña activa
            });
            frm.page.wrapper.find('#captura-de-pesos-detalle_desperdicio_tab').css({
                'background-color': '#ddf013'  // Cambia el color de fondo de la pestaña activa
    
            });
            
        }
        if(frm.doc.idproceso == 2)
        {
            frm.page.wrapper.find('#captura-de-pesos-detalle_desperdicio_tab-tab').css({
                'color': '#04d700'  // Cambia el color del texto de la pestaña activa
            });
            frm.page.wrapper.find('#captura-de-pesos-detalle_desperdicio_tab').css({
                'background-color': '#04d700'  // Cambia el color de fondo de la pestaña activa
    
            });
            
        }
  
        if(frm.doc.idproceso == 3)
        {
            frm.page.wrapper.find('#captura-de-pesos-detalle_desperdicio_tab-tab').css({
                'color': '#2818db'  // Cambia el color del texto de la pestaña activa
            });
            frm.page.wrapper.find('#captura-de-pesos-detalle_desperdicio_tab').css({
                'background-color': '#2818db'  // Cambia el color de fondo de la pestaña activa
    
            });
            frm.page.wrapper.find('#captura-de-pesos-detalle_desperdicio_tab').find('label').css({
                'color': 'white'  // Cambia el color del texto dentro de la pestaña activa
            });
            
        }

        if(frm.doc.idproceso == 4)
        {
            frm.page.wrapper.find('#captura-de-pesos-detalle_desperdicio_tab-tab').css({
                'color': '#fc6903'  // Cambia el color del texto de la pestaña activa
            });
            frm.page.wrapper.find('#captura-de-pesos-detalle_desperdicio_tab').css({
                'background-color': '#fc6903'  // Cambia el color de fondo de la pestaña activa
    
            });
            
        }
  
  
        if (frm.doc.idproceso == 5) {
            frm.page.wrapper.find('#captura-de-pesos-detalle_desperdicio_tab-tab').css({
                'color': '#582c83'  // Cambia el color del texto de la pestaña activa
            });
        
            frm.page.wrapper.find('#captura-de-pesos-detalle_desperdicio_tab').css({
                'background-color': '#582c83',

            });
        
            // Establecer estilos para etiquetas y textos dentro de la pestaña
            frm.page.wrapper.find('#captura-de-pesos-detalle_desperdicio_tab').find('label').css({
                'color': 'white'  // Cambia el color del texto dentro de la pestaña activa
            });
        }
        
  

        frm.page.wrapper.find('button[data-fieldname="peso_tara"]').css({
            'background-color': '#2490EF',  // Cambia el color de fondo del botón (amarillo en este ejemplo)
            'color': 'white'  // Cambia el color del texto del botón
        });
    
        frm.page.wrapper.find('button[data-fieldname="insertar_peso_manualmente"]').css({
            'background-color': '#FFAF00',  // Cambia el color de fondo del botón (amarillo en este ejemplo)
            'color': 'white'  // Cambia el color del texto del botón
        });
  
        frm.page.wrapper.find('button[data-fieldname="reimprimir"]').css({
            'background-color': '#59AC59',  // Cambia el color de fondo del botón (amarillo en este ejemplo)
            'color': 'white'  // Cambia el color del texto del botón
        });
  
        frm.page.wrapper.find('button[data-fieldname="insertar"]').css({
            'background-color': '#008000',  // Cambia el color de fondo del botón (amarillo en este ejemplo)
            'color': 'white'  // Cambia el color del texto del botón
        });
  
        frm.page.wrapper.find('button[data-fieldname="des_peso_tara"]').css({
          'background-color': '#2490EF',  // Cambia el color de fondo del botón (amarillo en este ejemplo)
          'color': 'white'  // Cambia el color del texto del botón
      });
  
      frm.page.wrapper.find('button[data-fieldname="des_insertar_peso_manualmente"]').css({
          'background-color': '#FFAF00',  // Cambia el color de fondo del botón (amarillo en este ejemplo)
          'color': 'white'  // Cambia el color del texto del botón
      });
  
      frm.page.wrapper.find('button[data-fieldname="des_reimprimir"]').css({
          'background-color': '#59AC59',  // Cambia el color de fondo del botón (amarillo en este ejemplo)
          'color': 'white'  // Cambia el color del texto del botón
      });
  
      frm.page.wrapper.find('button[data-fieldname="des_insertar"]').css({
          'background-color': '#008000',  // Cambia el color de fondo del botón (amarillo en este ejemplo)
          'color': 'white'  // Cambia el color del texto del botón
      });
  
  
    }
  
  });

  frappe.ui.form.on('Captura de pesos', {
    refresh: function(frm) {
        // Obtiene los valores de los campos estado y subestado
        var estado = frm.doc.estado;
        var subestado = frm.doc.subestado;
  
        // Verifica si se cumple la condición para hacer el campo "unidades_por_paquete" solo lectura
        if (estado == 1 && subestado == 2) {
            frm.set_df_property('unidades_por_paquete', 'read_only', 1);
            frm.set_df_property('unidad', 'read_only', 1);
            frm.set_df_property('maquina', 'read_only', 1);
        } else {
            frm.set_df_property('unidades_por_paquete', 'reqd', 1);
            frm.set_df_property('unidad', 'reqd', 1);
            frm.set_df_property('maquina', 'reqd', 1);
        }
    }
  });
  
frappe.ui.form.on('Captura de pesos', {
  refresh: function(frm) {
      

    
    

}
});


frappe.ui.form.on('Captura de pesos', {
    operador: function(frm) {
        frm.set_value('des_operador', frm.doc.operador);
        frm.refresh_field('operador');

    }
  });
 
frappe.ui.form.on('Captura de pesos', {
    insertar_peso_manualmente: function(frm) {
        if (frm.doc.operador) {
            var e = new frappe.ui.Dialog({
                title: __('Insertar Peso'),
                fields: [
                    {
                        fieldname: 'peso_manual',
                        label: __('Peso'),
                        fieldtype: 'Float',
                    },
                    {
                        fieldname: 'uom',
                        label: __('Unidad de Medida'),
                        fieldtype: 'Select',
                        options: ['LBS', 'KG'], // Ajusta las opciones según tus necesidades
                        default: 'LBS', // Puedes establecer el valor predeterminado según tus necesidades
                    },
                ],
                primary_action: function() {
                    var peso_manual = e.get_value('peso_manual');
                    var uom = e.get_value('uom');
                    if (!peso_manual) {
                        frappe.msgprint('Por favor, ingrese el peso.');
                        return;
                    }

                    var fechaHoraActual = frappe.datetime.now_datetime();
                    
                    var detalle = frm.doc.detalle || [];
                
                    var nuevaFila = frappe.model.get_new_doc('Detalle'); // Reemplaza 'Detalle' con el nombre correcto del doctype de la tabla hija
                     // Asigna el número actual
                    nuevaFila.fecha_ingreso = fechaHoraActual;
                    nuevaFila.bobina = frm.doc.ultimabobina + 1; // Asigna la fecha y hora actual
                    frm.doc.ultimabobina += 1; 
                    nuevaFila.id_operador = frm.doc.operador;
                    nuevaFila.operador = frm.doc.nombre_operador;
                    nuevaFila.peso = peso_manual;
                    nuevaFila.peso_tara = frm.doc.tara;
                    var peso_neto;
                    peso_neto  = peso_manual - frm.doc.tara;
                    nuevaFila.peso_neto = peso_neto
                    nuevaFila.uom = uom;
                    nuevaFila.flg = 1;
                    detalle.push(nuevaFila);
                    


                    // Marcar el documento principal como editado o borrador
                    frm.doc.__unsaved = true;

                    frm.doc.total_bruto = 0;
                    frm.doc.total_tara = 0;
                    frm.doc.total_neto = 0;
                   

                    detalle.forEach(function(det) {
                        frm.doc.total_bruto += parseFloat(det.peso);
                        frm.doc.total_tara += parseFloat(det.peso_tara);
                        frm.doc.total_neto += parseFloat(det.peso_neto);
                    });
                    frm.doc.bobinas = detalle.length;
                    
                    frm.save().then(() => {
                        // Después de guardar, obtener el último detalle insertado
                        obtener_ultimo_detalle_insertado(frm).then((ultimoDetalle) => {
                            console.log('Último detalle insertado:', ultimoDetalle);
                            e.hide();
                            frappe.call({
                                method: 'etiba.etiba.doctype.captura_de_pesos.captura_de_pesos.imprimir_etiqueta',
                                args: {
                                    numeroorden: 1,  // Reemplaza con el valor correcto
                                    idproceso: frm.doc.idproceso,    // Reemplaza con el valor correcto
                                    idimpresion: 1,   // Reemplaza con el valor correcto
                                    detalle_insertado: ultimoDetalle,
                                    manual: 1  // Reemplaza con el valor correcto
                                },
                                callback: function(response) {
                                    if (response && response.message) {
                                    
                                    }
                                }
                            });
                        });
                    });
                    frm.refresh_field('total_bruto');
                    frm.refresh_field('total_tara');
                    frm.refresh_field('total_neto');
                    frm.refresh_field('bobinas');
                },
                primary_action_label: __('Guardar'),
            });

            e.show();
     
        } else {
            // Mostrar una alerta si los campos no están completos
            frappe.msgprint('Por favor, complete el campo "Operador".');
        }
    }
});



// Función para obtener el último detalle insertado
function obtener_ultimo_detalle_insertado(frm) {
    return new Promise((resolve, reject) => {
        // Verifica si el detalle ya está cargado en el formulario
        if (frm.doc.detalle && frm.doc.detalle.length > 0) {
            const ultimoDetalle = frm.doc.detalle[frm.doc.detalle.length - 1].name;
            resolve(ultimoDetalle);
        } else {
            reject('No se pudo obtener el último detalle insertado.');
        }
    });
}



frappe.ui.form.on('Captura de pesos', {
    insertar: function(frm) {
        var detalle = frm.doc.detalle;
        if (frm.doc.operador) {
            // Obtiene la fecha y hora actual
            if (frm.doc.peso != 0 && frm.doc.uom && frm.doc.peso) {
                var fechaHoraActual = frappe.datetime.now_datetime();
                var nuevaFila = frappe.model.get_new_doc('Detalle');
                nuevaFila.bobina = frm.doc.ultimabobina + 1; // Asigna la fecha y hora actual
                frm.doc.ultimabobina += 1; 
                nuevaFila.fecha_ingreso = fechaHoraActual;
                nuevaFila.operador = frm.doc.nombre_operador;
                nuevaFila.id_operador = frm.doc.operador;
                nuevaFila.uom = frm.doc.uom.toUpperCase();
                nuevaFila.peso = frm.doc.peso;
                nuevaFila.peso_tara = frm.doc.tara;
                var peso_neto;
                peso_neto  = frm.doc.peso - frm.doc.tara;
                nuevaFila.peso_neto = peso_neto
                nuevaFila.desperdicio = frm.doc.tipo_desperdicio;
                detalle.push(nuevaFila);

             
                frm.doc.__unsaved = true;

                    frm.doc.total_bruto = 0;
                    frm.doc.total_tara = 0;
                    frm.doc.total_neto = 0;
                   

                    detalle.forEach(function(det) {
                        frm.doc.total_bruto += parseFloat(det.peso);
                        frm.doc.total_tara += parseFloat(det.peso_tara);
                        frm.doc.total_neto += parseFloat(det.peso_neto);
                    });
                    frm.doc.bobinas = detalle.length;
                    
                    frm.save().then(() => {
                        // Después de guardar, obtener el último detalle insertado
                        obtener_ultimo_detalle_insertado(frm).then((ultimoDetalle) => {
                            console.log('Último detalle insertado:', ultimoDetalle);
                            frappe.call({
                                method: 'etiba.etiba.doctype.captura_de_pesos.captura_de_pesos.imprimir_etiqueta',
                                args: {
                                    numeroorden: 1,  // Reemplaza con el valor correcto
                                    idproceso: frm.doc.idproceso,    // Reemplaza con el valor correcto
                                    idimpresion: 1,   // Reemplaza con el valor correcto
                                    detalle_insertado: ultimoDetalle,
                                    manual: 0   // Reemplaza con el valor correcto
                                },
                                callback: function(response) {
                                    if (response && response.message) {
                                       
                                    }
                                }
                            });
                        });
                    });
                    frm.refresh_field('total_bruto');
                    frm.refresh_field('total_tara');
                    frm.refresh_field('total_neto');
                    frm.refresh_field('bobinas');

            } else {
                frappe.msgprint('El campo "Peso" no puede estar vacío.');
            }
        } else {
            frappe.msgprint('Por favor, complete el campo "Operador"');
        }
    }
});


frappe.ui.form.on('Captura de pesos', {
    reimprimir: function(frm) {
        // Obtener los detalles seleccionados
        var selectedDetails = frm.fields_dict['detalle'].grid.get_selected();

        // Verificar si hay al menos un detalle seleccionado
        if (selectedDetails && selectedDetails.length > 0) {
            // Recorrer cada detalle seleccionado
            for (var i = 0; i < selectedDetails.length; i++) {
                var detalleInsertadoStr = selectedDetails[i];

                // Llamar a la función de impresión para cada detalle
                frappe.call({
                    method: 'etiba.etiba.doctype.captura_de_pesos.captura_de_pesos.imprimir_etiqueta',
                    args: {
                        numeroorden: 1,  // Reemplaza con el valor correcto
                        idproceso: frm.doc.idproceso,    // Reemplaza con el valor correcto
                        idimpresion: 1,   // Reemplaza con el valor correcto
                        detalle_insertado: detalleInsertadoStr,
                        manual: 0 
                    },
                    callback: function(response) {
                        if (response && response.message) {
                            frappe.msgprint(response.message);
                        }
                    }
                });
            }
        } else {
            // Mensaje de advertencia si no hay detalles seleccionados
            frappe.msgprint('Por favor, selecciona al menos un detalle antes de reimprimir.');
        }
    }
});


frappe.ui.form.on('Captura de pesos', {
    des_reimprimir: function(frm) {
        // Obtener los detalles seleccionados
        var selectedDetails = frm.fields_dict['desperdicio'].grid.get_selected();

        // Verificar si hay al menos un detalle seleccionado
        if (selectedDetails && selectedDetails.length > 0) {
            // Recorrer cada detalle seleccionado
            for (var i = 0; i < selectedDetails.length; i++) {
                var detalleInsertadoStr = selectedDetails[i];

                // Llamar a la función de impresión para cada detalle
                frappe.call({
                    method: 'etiba.etiba.doctype.captura_de_pesos.captura_de_pesos.imprimir_etiqueta',
                    args: {
                        numeroorden: 1,  // Reemplaza con el valor correcto
                        idproceso: frm.doc.idproceso,    // Reemplaza con el valor correcto
                        idimpresion: 2,   // Reemplaza con el valor correcto
                        detalle_insertado: detalleInsertadoStr,
                        manual: 0 
                    },
                    callback: function(response) {
                        if (response && response.message) {
                            frappe.msgprint(response.message);
                        }
                    }
                });
            }
        } else {
            // Mensaje de advertencia si no hay detalles seleccionados
            frappe.msgprint('Por favor, selecciona al menos un detalle antes de reimprimir.');
        }
    }
});





  frappe.ui.form.on('Captura de pesos', {
    des_insertar_peso_manualmente: function(frm) {
        if (frm.doc.des_operador) {
            if (frm.doc.tipo_desperdicio) {
        var d = new frappe.ui.Dialog({
            title: __('Insertar Peso'),
            fields: [
                {
                    fieldname: 'des_peso_manual',
                    label: __('Peso'),
                    fieldtype: 'Float',
                },
                {
                    fieldname: 'uom',
                    label: __('Unidad de Medida'),
                    fieldtype: 'Select',
                    options: ['LBS', 'KG'], // Ajusta las opciones según tus necesidades
                    default: 'LBS', // Puedes establecer el valor predeterminado según tus necesidades
                },
            ],
            primary_action: function() {
                var des_peso_manual = d.get_value('des_peso_manual');
                var uom = d.get_value('uom');
                // Realiza acciones con el valor ingresado
                //frappe.msgprint(__('Datos guardados: {0}', [peso_manual]));
                var desperdicio = frm.doc.desperdicio || [];
  
                // Obtiene la fecha y hora actual
                var fechaHoraActual = frappe.datetime.now_datetime();
                var nuevaFila = frappe.model.get_new_doc('Desperdicio'); // Reemplaza 'Detalle' con el nombre correcto del doctype de la tabla hija
                nuevaFila.des_bobina = frm.doc.ultimabobinadesperdicio + 1; // Asigna la fecha y hora actual
                frm.doc.ultimabobinadesperdicio += 1; 
                nuevaFila.des_fecha_ingreso = fechaHoraActual; // Asigna la fecha y hora actual
                nuevaFila.id_operador = frm.doc.des_operador;
                nuevaFila.des_operador = frm.doc.nombre_des_operador;
                nuevaFila.flg = 1;
                nuevaFila.des_peso_tara = frm.doc.des_tara;
                nuevaFila.des_peso = des_peso_manual;
                var peso_neto;
                peso_neto  = des_peso_manual - frm.doc.des_tara;
                nuevaFila.des_peso_neto = peso_neto
                nuevaFila.uom = uom;
                nuevaFila.desperdicio = frm.doc.tipo_desperdicio;

        

                desperdicio.push(nuevaFila);

                frm.doc.__unsaved = true;          
                
                    frm.doc.des_total_bruto = 0;
                    frm.doc.des_total_tara = 0;
                    frm.doc.des_total_neto = 0;
                   

                    desperdicio.forEach(function(det) {
                        frm.doc.des_total_bruto += parseFloat(det.des_peso);
                        frm.doc.des_total_tara += parseFloat(det.des_peso_tara);
                        frm.doc.des_total_neto += parseFloat(det.des_peso_neto);
                    });
                    frm.doc.des_bobinas = desperdicio.length;
                    
                    frm.save().then(() => {
                        // Después de guardar, obtener el último detalle insertado
                        obtener_ultimo_desperdicio_insertado(frm).then((ultimoDetalle) => {
                            console.log('Último desperdicio insertado:', ultimoDetalle);
                            d.hide();
                            frappe.call({
                                method: 'etiba.etiba.doctype.captura_de_pesos.captura_de_pesos.imprimir_etiqueta',
                                args: {
                                    numeroorden: 1,  // Reemplaza con el valor correcto
                                    idproceso: frm.doc.idproceso,    // Reemplaza con el valor correcto
                                    idimpresion: 2,   // Reemplaza con el valor correcto
                                    detalle_insertado: ultimoDetalle,
                                    manual: 1   // Reemplaza con el valor correcto
                                },
                                callback: function(response) {
                                    if (response && response.message) {
                                    
                                    }
                                }
                            });
                        });
                    });

                    frm.refresh_field('des_total_bruto');
                    frm.refresh_field('des_total_tara');
                    frm.refresh_field('des_total_neto');
                    frm.refresh_field('des_bobinas');
            },
            primary_action_label: __('Guardar'),
        });

        d.show();
    }
    else{
        frappe.msgprint('Por favor, complete el campo "Tipo de desperdicio".');
    }
    }
   
    else {
        // Mensaje de advertencia si no hay detalles seleccionados
        frappe.msgprint('Por favor, complete el campo "Operador".');
    }

    }
});

function obtener_ultimo_desperdicio_insertado(frm) {
    return new Promise((resolve, reject) => {
        // Verifica si el detalle ya está cargado en el formulario
        if (frm.doc.desperdicio && frm.doc.desperdicio.length > 0) {
            const ultimoDetalle = frm.doc.desperdicio[frm.doc.desperdicio.length - 1].name;
            resolve(ultimoDetalle);
        } else {
            reject('No se pudo obtener el último detalle insertado.');
        }
    });
}


frappe.ui.form.on('Captura de pesos', {
    des_insertar: function(frm) {
                var desperdicio = frm.doc.desperdicio;
                if(frm.doc.des_operador){
                    if (frm.doc.peso != 0 && frm.doc.des_uom && frm.doc.des_peso) 
                    {

                        var fechaHoraActual = frappe.datetime.now_datetime();
                        var nuevaFila = frappe.model.get_new_doc('Desperdicio'); // Reemplaza 'Detalle' con el nombre correcto del doctype de la tabla hija
                        nuevaFila.des_bobina = frm.doc.ultimabobinadesperdicio + 1; // Asigna la fecha y hora actual
                        frm.doc.ultimabobinadesperdicio += 1; 
                        nuevaFila.des_fecha_ingreso = fechaHoraActual; // Asigna la fecha y hora actual
                        nuevaFila.des_operador = frm.doc.nombre_des_operador;
                        nuevaFila.id_operador = frm.doc.des_operador;
                        nuevaFila.des_peso = frm.des_peso;
                        nuevaFila.des_peso_tara = frm.doc.des_tara;
                        nuevaFila.flg = 1;
                        desperdicio.push(nuevaFila);
            
                        frm.doc.__unsaved = true;

                        frm.doc.des_total_bruto = 0;
                        frm.doc.des_total_tara = 0;
                        frm.doc.des_total_neto = 0;
                       
    
                        desperdicio.forEach(function(det) {
                            frm.doc.des_total_bruto += parseFloat(det.des_peso);
                            frm.doc.des_total_tara += parseFloat(det.des_peso_tara);
                            frm.doc.des_total_neto += parseFloat(det.des_peso_neto);
                        });
                        frm.doc.des_bobinas = desperdicio.length;
                    
                     
                        frm.save().then(() => {
                            // Después de guardar, obtener el último detalle insertado
                            obtener_ultimo_desperdicio_insertado(frm).then((ultimoDetalle) => {
                                console.log('Último desperdicio insertado:', ultimoDetalle);
                                d.hide();
                                frappe.call({
                                    method: 'etiba.etiba.doctype.captura_de_pesos.captura_de_pesos.imprimir_etiqueta',
                                    args: {
                                        numeroorden: 1,  // Reemplaza con el valor correcto
                                        idproceso: frm.doc.idproceso,    // Reemplaza con el valor correcto
                                        idimpresion: 2,   // Reemplaza con el valor correcto
                                        detalle_insertado: ultimoDetalle,
                                        manual: 0   // Reemplaza con el valor correcto
                                    },
                                    callback: function(response) {
                                        if (response && response.message) {
                                        
                                        }
                                    }
                                });
                            });
                        });

                    frm.refresh_field('des_total_bruto');
                    frm.refresh_field('des_total_tara');
                    frm.refresh_field('des_total_neto');
                    frm.refresh_field('des_bobinas');


                    }
                    else{
                        frappe.msgprint('El campo "Peso" no puede estar vacio.');
                    }
                }
                else {
                    // Mostrar una alerta si los campos no están completos
                    frappe.msgprint('Por favor, complete el campo "Operador".');
                }
               

    }
});



frappe.ui.form.on('Captura de pesos', {
    peso_tara: function(frm) {
        frm.set_value('tara', frm.doc.peso);
        frm.refresh_field('tara');

    }
  });
  frappe.ui.form.on('Captura de pesos', {
    des_peso_tara: function(frm) {
        frm.set_value('des_tara', frm.doc.des_peso);
        frm.refresh_field('des_tara');

    }
  });




  
  function obtenerPermisosYProcesar(nombreUsuario) {
    return new Promise((resolve, reject) => {
        frappe.call({
            method: 'frappe.client.get',
            args: {
                doctype: 'User',
                name: nombreUsuario
            },
            callback: function(response) {
                if (response.message) {
                    var usuario = response.message;
                    var roleProfileName = usuario.role_profile_name;

                    if (frappe.session.user === 'Administrator') {
                        resolve({
                            tomar_orden: 1,
                            editar_orden: 1,
                            cerrar_orden: 1,
                            abrir_orden: 1,
                            insertar_registro: 1,
                            eliminar_registro: 1,
                            reimprimir: 1,
                            insertar_peso_manualmente: 1,
                            suspender_orden: 1,
                            peso_tara: 1,
                            exportar: 1
                        });
                    }
                    if (roleProfileName) {
         

                        frappe.call({
                            method: 'frappe.client.get_value',
                            args: {
                                doctype: 'Roles eTIBA',
                                filters: { 'rol': roleProfileName },
                                fieldname: ['tomar_orden', 'editar_orden', 'cerrar_orden', 'abrir_orden', 'insertar_registro', 'eliminar_registro', 'reimprimir', 'insertar_peso_manualmente', 'suspender_orden', 'peso_tara', 'exportar']
                            },
                            callback: function(response) {
                                if (response.message) {
                                    var permisos = response.message;
                                    resolve(permisos);
                                } else {
                                    reject('No se pudo obtener la información del rol.');
                                }
                            }
                        });
                    } else {
                        reject('El campo role_profile_name no tiene un valor definido para este usuario.');
                    }
                } else {
                    reject('No se pudo obtener la información del usuario.');
                }
            }
        });
    });
}

frappe.ui.form.on('Captura de pesos', {
    refresh: function(frm) {
        // Obtener el nombre del usuario
        var nombreUsuario = frappe.session.user;

        // Llamar a la función para obtener permisos
        obtenerPermisosYProcesar(nombreUsuario).then(permisos => {
            // Imprimir los permisos en la consola
            console.log('Permisos aaa:', permisos);

            // Verificar condiciones y habilitar/deshabilitar campos
            if (frm.doc.estado == 1 && frm.doc.subestado == 2) {
                if (permisos && permisos['peso_tara'] == 1) {
                    frm.toggle_display(["peso_tara"], true);
                    frm.toggle_display(["des_peso_tara"], true);
                }
                else{
                    frm.toggle_display(["peso_tara"], false);
                    frm.toggle_display(["des_peso_tara"], false);

                }
                if (permisos && permisos['insertar_peso_manualmente'] == 1) {
                    frm.toggle_display(["insertar_peso_manualmente"], true);
                    frm.toggle_display(["des_insertar_peso_manualmente"], true);
                }
                else{
                    frm.toggle_display(["insertar_peso_manualmente"], false);
                    frm.toggle_display(["des_insertar_peso_manualmente"], false);
                }
                if (permisos && permisos['reimprimir'] == 1) {
                    frm.toggle_display(["reimprimir"], true);
                    frm.toggle_display(["des_reimprimir"], true);
                }
                else{
                    frm.toggle_display(["reimprimir"], false);
                    frm.toggle_display(["des_reimprimir"], false);
                }
                if (permisos && permisos['insertar_registro'] == 1) {
                    frm.toggle_display(["insertar"], true);
                    frm.toggle_display(["des_insertar"], true);
                }
                else{
                    frm.toggle_display(["insertar"], false);
                    frm.toggle_display(["des_insertar"], false);
                }


                frm.set_df_property("operador", "read_only", 0);
                frm.set_df_property("tara", "read_only", 0);
                frm.set_df_property("des_tara", "read_only", 0);
                frm.set_df_property("detalle", "read_only", 0);
                frm.set_df_property("desperdicio", "read_only", 0);
            }


            

      if (frm.doc.estado == 0 && frm.doc.subestado == 0 && permisos && permisos['tomar_orden'] == 1) {

        frm.add_custom_button('Tomar Orden', function() {
            // Verificar si los campos están completos
            if (frm.doc.unidades_por_paquete && frm.doc.unidad) {
                if (frm.doc.maquina) {
                    frm.set_value('estado', 1);
                    frm.refresh_field('estado');
                    frm.set_value('subestado', 2);
                    frm.refresh_field('subestado');
                    frm.set_value('nombre_estado', "Abierto");
                    frm.refresh_field('nombre_estado');
      
                    frm.save();
                }
                else{
                    frappe.msgprint('Por favor, complete los campos "Maquina".');
                }
              
            } else {
                // Mostrar una alerta si los campos no están completos
                frappe.msgprint('Por favor, complete los campos numericos "Unidades por Paquete" y "Unidad".');
            }
            
        }).css({
            'background-color': '#1F3BB3',  // Código de color verde
            'color': 'white'
        });

      
      }

      if ((frm.doc.estado == 2 && frm.doc.subestado == 2)  || (frm.doc.estado == 1 && frm.doc.subestado == 1) && permisos && permisos['abrir_orden'] == 1) 
      {
          frm.add_custom_button('Abrir Orden', function() {
          
              if (frm.doc.unidades_por_paquete  && frm.doc.unidad){
              frm.set_value('estado', 1);
              frm.refresh_field('estado');
              frm.set_value('subestado', 2);
              frm.refresh_field('subestado');
              frm.set_value('nombre_estado', "Abierta");
              frm.refresh_field('nombre_estado');
              frm.save();
          }
          frm.save();
          
          }).css({
              'background-color': '#1F3BB3',  // Código de color verde
              'color': 'white'
          });
      }

      if (frm.doc.estado == 1 && frm.doc.subestado == 2) {
        if(permisos && permisos['editar_orden'] == 1)
        {
            frm.add_custom_button('Editar Orden', function() {


       
                frm.set_df_property("unidades_por_paquete", "read_only", 0);
                frm.set_df_property("unidad", "read_only", 0);
                frm.set_df_property("maquina", "read_only", 0);
    
    
    }).css({
    'background-color': '#52CDFF',  // Código de color azul
    'color': 'white'
    });
        }

        if(permisos && permisos['cerrar_orden'] == 1)
{
    frm.add_custom_button('Cerrar Orden', function() {

        frm.set_value('estado', 2);
        frm.refresh_field('estado');
        frm.set_value('subestado', 2);
        frm.refresh_field('subestado');
        frm.set_value('nombre_estado', "Cerrada");
        frm.refresh_field('nombre_estado');
        frm.set_df_property("orden", "read_only", frm.is_new() ? 0 : 1);
    
        frm.set_df_property("operador", "read_only", 1);
        frm.set_df_property("tara", "read_only", 1);
        frm.set_df_property("des_tara", "read_only", 1);
        frm.set_df_property("detalle", "read_only", 1);
        frm.set_df_property("desperdicio", "read_only", 1);


        frm.save();

}).css({
'background-color': '#FFAF00',  // Código de color azul
'color': 'white'
});
}

}
// Crea el tercer botón (Botón 3) con un código de color personalizado (rojo)

if (frm.doc.estado == 1 && frm.doc.subestado == 2 && permisos && permisos['suspender_orden'] == 1) {
frm.add_custom_button('Suspender Orden', function() {
              frm.set_value('estado', 1);
              frm.refresh_field('estado');
              frm.set_value('subestado', 1);
              frm.refresh_field('subestado');
              frm.set_value('nombre_estado', "Suspendida");
              frm.refresh_field('nombre_estado');

              

              frm.save();
}).css({
  'background-color': '#F95F53',  // Código de color rojo
  'color': 'white'
});

} 
 
if (frm.doc.estado == 1 && frm.doc.subestado == 2 && permisos && permisos['editar_orden'] == 1) {
    frm.add_custom_button('Guardar', function() {

                  frm.save();
    }).css({
      'background-color': '#008000',  // Código de color rojo
      'color': 'white'
    });
    
    }
    if (frm.doc.estado == 1 && frm.doc.subestado == 2 && permisos && permisos['exportar'] == 1) {
 
    frm.add_custom_button('Detalle', function() {
        var dataToExport = [];

    
        // Agrega los datos de la fila actual para la tabla principal
        dataToExport.push(['Orden', frm.doc.orden]);
        dataToExport.push(['Cliente', frm.doc.cliente]);
        dataToExport.push(['Codigo Cliente', frm.doc.codigo_cliente]);
        dataToExport.push(['Producto', frm.doc.producto]);
        dataToExport.push(['Codigo Producto', frm.doc.codigo_producto]);
        dataToExport.push(['Fecha Creacion', frm.doc.fecha_creacion]);
    
        // Agrega una línea en blanco para separar la tabla principal de la tabla hija
        dataToExport.push([]);
    
        // Agrega las cabeceras para la tabla hija en la primera fila
        dataToExport.push(['Bobina', 'Operador', 'Fecha', 'Peso Bruto', 'Peso Tara', 'Peso Neto']);

        // Agrega los datos de la tabla hija
        frm.doc.detalle.forEach(function(row) {
            var rowDataChild = [
                row.bobina,
                row.id_operador,
                row.fecha_ingreso,
                row.peso,
                row.peso_tara,
                row.peso_neto
            ];
            dataToExport.push(rowDataChild);
        });
        // Convierte los datos a formato CSV con punto y coma como separador
        var csvData = dataToExport.map(row => row.join(';')).join('\n');
    
        // Descarga el archivo CSV
        var blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    
        // Crea un enlace de descarga y simula el clic para descargar
        var link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        var nombreArchivo = 'Detalle'+ '_Lote_' + frm.doc.lote + '_Orden_' + frm.doc.orden + ".csv";
        link.download = nombreArchivo;
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, __("Excel"));;
    frm.add_custom_button('Desperdicio', function() {
        var dataToExport = [];

    
        // Agrega los datos de la fila actual para la tabla principal
        dataToExport.push(['Orden', frm.doc.orden]);
        dataToExport.push(['Cliente', frm.doc.cliente]);
        dataToExport.push(['Codigo Cliente', frm.doc.codigo_cliente]);
        dataToExport.push(['Producto', frm.doc.producto]);
        dataToExport.push(['Codigo Producto', frm.doc.codigo_producto]);
        dataToExport.push(['Fecha Creacion', frm.doc.fecha_creacion]);
    
        // Agrega una línea en blanco para separar la tabla principal de la tabla hija
        dataToExport.push([]);
    
        // Agrega las cabeceras para la tabla hija en la primera fila
        dataToExport.push(['Bobina', 'Operador', 'Fecha', 'Peso Bruto', 'Peso Tara', 'Peso Neto','Desperdicio']);

        // Agrega los datos de la tabla hija
        frm.doc.desperdicio.forEach(function(row) {
            var rowDataChild = [
                row.des_bobina,
                row.id_operador,
                row.des_fecha_ingreso,
                row.des_peso,
                row.des_peso_tara,
                row.des_peso_neto,
                row.desperdicio
            ];
            dataToExport.push(rowDataChild);
        });
        // Convierte los datos a formato CSV con punto y coma como separador
        var csvData = dataToExport.map(row => row.join(';')).join('\n');
    
        // Descarga el archivo CSV
        var blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    
        // Crea un enlace de descarga y simula el clic para descargar
        var link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        var nombreArchivo = 'Desperdicio'+ '_Lote_' + frm.doc.lote + '_Orden_' + frm.doc.orden + ".csv";
        link.download = nombreArchivo;
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, __("Excel"));;
}
    

        }).catch(error => {
            frappe.msgprint(error);
        });
    
    }

});




/*
frappe.ui.form.on('Captura de pesos', {
    refresh: function(frm) {

        if (frm.doc.estado == 1 && frm.doc.subestado == 2 && obtenerPermisosYProcesar == 0 )  {
     
            frm.toggle_display("peso_tara", true); 
            frm.toggle_display("reimprimir", true); 
            frm.toggle_display("insertar_peso_manualmente", true); 
            frm.toggle_display("insertar", true); 
            frm.toggle_display("des_peso_tara", true); 
            frm.toggle_display("des_reimprimir", true); 
            frm.toggle_display("des_insertar_peso_manualmente", true); 
            frm.toggle_display("des_insertar", true); 

  
            frm.set_df_property("operador", "read_only", 0);
            frm.set_df_property("tara", "read_only", 0);
            frm.set_df_property("des_tara", "read_only", 0);
            frm.set_df_property("detalle", "read_only", 0);
            frm.set_df_property("desperdicio", "read_only", 0);
        } 

    }
});
*/
frappe.ui.form.on('Captura de pesos', {
    refresh: function(frm) {

        if (frm.doc.estado == 2 && frm.doc.subestado == 2) {
     
            frm.toggle_display("peso_tara", false); 
            frm.toggle_display("reimprimir", false); 
            frm.toggle_display("insertar_peso_manualmente", false); 
            frm.toggle_display("insertar", false); 
            frm.toggle_display("des_peso_tara", false); 
            frm.toggle_display("des_reimprimir", false); 
            frm.toggle_display("des_insertar_peso_manualmente", false); 
            frm.toggle_display("des_insertar", false); 
        } 

    }
  });

  frappe.ui.form.on('Captura de pesos', {
    refresh: function(frm) {

        if (frm.doc.estado == 1 && frm.doc.subestado == 1) {
     
            frm.toggle_display("peso_tara", false); 
            frm.toggle_display("reimprimir", false); 
            frm.toggle_display("insertar_peso_manualmente", false); 
            frm.toggle_display("insertar", false); 
            frm.toggle_display("des_peso_tara", false); 
            frm.toggle_display("des_reimprimir", false); 
            frm.toggle_display("des_insertar_peso_manualmente", false); 
            frm.toggle_display("des_insertar", false); 
        } 

    }
  });

  frappe.ui.form.on('Captura de pesos', {
    refresh: function(frm) {

        if (frm.doc.estado == 0 && frm.doc.subestado == 0) {
  
        

            frm.toggle_display("peso_tara", false); 
            frm.toggle_display("reimprimir", false); 
            frm.toggle_display("insertar_peso_manualmente", false); 
            frm.toggle_display("insertar", false); 
            frm.toggle_display("des_peso_tara", false); 
            frm.toggle_display("des_reimprimir", false); 
            frm.toggle_display("des_insertar_peso_manualmente", false); 
            frm.toggle_display("des_insertar", false); 
        } 

    }
  });


  frappe.ui.form.on('Captura de pesos', {
    refresh: function(frm) {
        // Definir un diccionario de mapeo para idproceso y opciones HTML
        const procesoOptions = {
            1: '<div class="alert" style="background-color: #ddf013; color: #000;">Corte</div>',
            2: '<div class="alert" style="background-color: #04d700; color: #000;">Extruder</div>',
            3: '<div class="alert" style="background-color: #2818db; color: #fff;">Impresion</div>',
            4: '<div class="alert" style="background-color: #fc6903; color: #fff;">Laminaciom</div>',
            5: '<div class="alert" style="background-color: #582c83; color: #fff;">Slitter</div>'
        };

        // Obtener la opción correspondiente a idproceso
        const selectedOption = procesoOptions[frm.doc.idproceso];

        // Verificar si la opción es válida y establecer las opciones del campo HTML
        if (selectedOption) {
            frm.set_df_property('html', 'options', selectedOption);
        } else {
            // Opción predeterminada en caso de valor idproceso no mapeado
            frm.set_df_property('html', 'options', '<div class="alert alert-danger">PROCESO NO VÁLIDO</div>');
        }
    }
});

frappe.ui.form.on('Captura de pesos', {
    orden: function(frm) {
        // Definir un diccionario de mapeo para idproceso y opciones HTML
        const procesoOptions = {
            1: '<div class="alert" style="background-color: #ddf013; color: #fff;">Corte</div>',
            2: '<div class="alert" style="background-color: #04d700; color: #000;">Extruder</div>',
            3: '<div class="alert" style="background-color: #2818db; color: #fff;">Impresion</div>',
            4: '<div class="alert" style="background-color: #fc6903; color: #fff;">Laminaciom</div>',
            5: '<div class="alert" style="background-color: #582c83; color: #fff;">Slitter</div>'
        };

        // Obtener la opción correspondiente a idproceso
        const selectedOption = procesoOptions[frm.doc.idproceso];

        // Verificar si la opción es válida y establecer las opciones del campo HTML
        if (selectedOption) {
            frm.set_df_property('html', 'options', selectedOption);
        } else {
            // Opción predeterminada en caso de valor idproceso no mapeado
            frm.set_df_property('html', 'options', '<div class="alert alert-danger">PROCESO NO VÁLIDO</div>');
        }
    }
});

frappe.ui.form.on('Captura de pesos', {
    onload: function(frm) {
        // Verificar si 'orden' debe ser solo lectura según localStorage
        var soloLectura = localStorage.getItem('ordenSoloLectura_' + frm.doc.doctype + '_' + frm.docname);
        if (soloLectura === '1') {
            frm.set_df_property('orden', 'read_only', 1);
        }

        // Cargar órdenes solo si el documento no ha sido guardado por primera vez
        if (frm.doc.__islocal) {
            cargarOrdenes(frm);
        }
    },
    refresh: function(frm) {
        frm.trigger('load');
    },
    after_save: function(frm) {
        frm.trigger('load');

        // Verificar si el documento ha sido guardado por primera vez
        if (!frm.doc.__islocal) {
            // El documento ya ha sido guardado por primera vez, establecer 'orden' como solo lectura
            frm.set_df_property('orden', 'read_only', 1);

            // Almacenar en el localStorage que 'orden' debe ser solo lectura
            localStorage.setItem('ordenSoloLectura_' + frm.doc.doctype + '_' + frm.docname, '1');

            // Almacenar el valor de 'orden' en localStorage solo si ha sido guardado por primera vez
            localStorage.setItem('orden_' + frm.doc.doctype + '_' + frm.docname, frm.doc.orden);
        }
    }
});

frappe.ui.form.on('Captura de pesos', {
    onload_post_render: function(frm) {
        // Restaurar el valor de 'orden' desde el localStorage
        var ordenLocalStorage = localStorage.getItem('orden_' + frm.doc.doctype + '_' + frm.docname);
        if (ordenLocalStorage) {
            frm.set_value('orden', ordenLocalStorage);
        }
    },
    orden: function(frm) {
        // Almacenar el valor de 'orden' en el localStorage cada vez que cambie
        localStorage.setItem('orden_' + frm.doc.doctype + '_' + frm.docname, frm.doc.orden);
    }
});

function cargarOrdenes(frm) {
    // Llamar a la función obtener_ordenes_sql
    frappe.call({
        method: 'etiba.etiba.doctype.captura_de_pesos.captura_de_pesos.obtener_ordenes_sql',
        args: {
            doctype: frm.doc.doctype,
            docname: frm.doc.name
        },
        callback: function(r) {
            // Manejar la respuesta
            if (r.message && r.message.docnums) {
                // Hacer algo con los resultados
                var docnums = r.message.docnums;

                if (docnums.length > 0) {
                    // Actualizar las opciones del campo 'orden'
                    frm.set_df_property('orden', 'options', docnums);

                    // Obtener el valor actual del campo 'orden'
                    var ordenActual = frm.doc.orden;

                    // Verificar si el valor actual está en la lista de docnums
                    if (docnums.includes(ordenActual)) {
                        // El valor actual es válido, no hacer nada
                    } else {
                        // Establecer el valor del campo 'orden' al primer elemento de la lista
                        frm.set_value('orden', docnums[0]);
                    }

                    // Refrescar el campo
                    frm.refresh_field('orden');
                } else {
                    console.log('No hay resultados.');
                }
            } else {
                // Manejar si no hay resultados o si hay algún error
                console.log('Error o sin resultados.');
            }
        }
    });
}

frappe.ui.form.on('Captura de pesos', {
    orden: function(frm) {
        frappe.call({
            method: 'etiba.etiba.doctype.captura_de_pesos.captura_de_pesos.obtener_encabezado',
            args: {
                doctype: frm.doc.doctype,
                docname: frm.doc.name,
                orden:frm.doc.orden
            },
            callback: function(r) {
                if (r.message && r.message.resultados) {
                    var resultados = r.message.resultados;

                    if (resultados.length > 0) {

                        // Establecer valores adicionales
                        var primerResultado = resultados[0];
                        frm.set_value('producto', primerResultado.ProdName);
                        frm.set_value('codigo_producto', primerResultado.ItemCode);
                        frm.set_value('fecha_creacion', primerResultado.CreateDate);
                        frm.set_value('codigo_cliente', primerResultado.CardCode);
                        frm.set_value('unidad_de_medida', primerResultado.Uom);

                        // Refrescar los campos
                        frm.refresh_fields(['orden', 'producto', 'codigo_producto', 'fecha_creacion', 'codigo_cliente', 'unidad_de_medida']);
                    } else {
                        c
                    }
                } else {
                    console.log('Error o sin resultados.');
                }
            }
        });
    }
});




frappe.ui.form.on("Detalle", {
    before_detalle_remove: function(frm, cdt, cdn) {
        var detalle_eliminado = frappe.get_doc(cdt, cdn);

        const lastIndex = frm.doc.detalle.length - 1;
        const correlativo = frm.doc.detalle[lastIndex].bobina;
        frm.set_value('ultimabobina', correlativo);
        frm.refresh_fields(['ultimabobina']);
        console.log('ultimo idx.', correlativo);

        frappe.call({
            method: 'etiba.etiba.doctype.captura_de_pesos.captura_de_pesos.insertar_detalle_eliminado',
            args: {
                detalle_eliminado: JSON.stringify(detalle_eliminado),
                doc: frm.doc
            },
            callback: function(response) {
                console.log(response);
                if (response && response.message) {
                    console.log('Detalle Eliminado insertado:', response.message);
                    frm.save();

                } else {
                    console.error('Error al insertar Detalle Eliminado:', response.exc || response.error);
                    frappe.msgprint('Error al insertar Detalle Eliminado.');
                }
            }
        });

        // Guardar el formulario después de eliminar el detalle
    }
});

frappe.ui.form.on("Detalle", {
    detalle_remove: function(frm, cdt, cdn) {
        var detalle = frm.doc.detalle || [];

        // Recalcula total_bruto y total_tara
        frm.doc.total_bruto = 0;
        frm.doc.total_tara = 0;
        frm.doc.total_neto = 0;

        detalle.forEach(function(det) {
            frm.doc.total_bruto += parseFloat(det.peso);
            frm.doc.total_tara += parseFloat(det.peso_tara);
            frm.doc.total_neto += parseFloat(det.peso_neto);
        });

        // Recalcula la cantidad de registros en la tabla hija
        frm.doc.bobinas = detalle.length;

        // Refresca los campos actualizados
        frm.refresh_field('total_bruto');
        frm.refresh_field('total_tara');
        frm.refresh_field('total_neto');
        frm.refresh_field('bobinas');

        // Guarda el formulario después de eliminar el detalle
        frm.save();
    }
});



frappe.ui.form.on("Desperdicio", {
    before_desperdicio_remove: function(frm, cdt, cdn) {
        var detalle_eliminado = frappe.get_doc(cdt, cdn);

        const lastIndex = frm.doc.desperdicio.length - 1;
        const correlativo = frm.doc.desperdicio[lastIndex].des_bobina;
        frm.set_value('ultimabobinadesperdicio', correlativo);
        frm.refresh_fields(['ultimabobinadesperdicio']);
        console.log('ultimo idx dsperdicio.', correlativo);

        frappe.call({
            method: 'etiba.etiba.doctype.captura_de_pesos.captura_de_pesos.insertar_desperdicio_eliminado',
            args: {
                detalle_eliminado: JSON.stringify(detalle_eliminado),
                doc: frm.doc
            },
            callback: function(response) {
                console.log(response);
                console.log('Detalle Eliminado: ' + JSON.stringify(detalle_eliminado));


                if (response && response.message) {
                    console.log('Detalle Eliminado insertado:', response.message);
                    console.log('Detalle Eliminado: ' + JSON.stringify(detalle_eliminado));

                    frm.save();

                } else {
                    console.error('Error al insertar Detalle Eliminado:', response.exc || response.error);
                    frappe.msgprint('Error al insertar Detalle Eliminado.');
                }
            }
        });
      
    }
});


frappe.ui.form.on("Desperdicio", {
    desperdicio_remove: function(frm, cdt, cdn) {
        var desperdicio = frm.doc.desperdicio || [];

        // Recalcula total_bruto y total_tara
        frm.doc.des_total_bruto = 0;
        frm.doc.des_total_tara = 0;
        frm.doc.des_total_neto = 0;

        desperdicio.forEach(function(det) {
            frm.doc.des_total_bruto += parseFloat(det.des_peso);
            frm.doc.des_total_tara += parseFloat(det.des_peso_tara);
            frm.doc.des_total_neto += parseFloat(det.des_peso_neto);
        });

        // Recalcula la cantidad de registros en la tabla hija
        frm.doc.des_bobinas = desperdicio.length;

        // Refresca los campos actualizados
        frm.refresh_field('des_total_bruto');
        frm.refresh_field('des_total_tara');
        frm.refresh_field('des_total_neto');
        frm.refresh_field('des_bobinas');

        // Guarda el formulario después de eliminar el detalle
        frm.save();
    }
});

var interval;  // Declarar el intervalo como variable global

frappe.ui.form.on('Captura de pesos', {
    refresh: function(frm) {
        // Obtener el elemento de la pestaña "Captura Peso"
        var capturaPesoTab = frm.page.wrapper.find('a[href="#captura-de-pesos-captura_peso_tab"]');
        var DesperdicioTab = frm.page.wrapper.find('a[href="#captura-de-pesos-detalle_desperdicio_tab"]');
        var DetalleTab = frm.page.wrapper.find('a[href="#captura-de-pesos-__details"]');

        if(frm.doc.estado == 1 && frm.doc.subestado == 2)
        {
        // Agregar observador de eventos de clic al elemento de la pestaña "Captura Peso"
        capturaPesoTab.on('click', function() {
            clearInterval(interval);  // Detener el intervalo si está en ejecución
            actualizarPesoDetalle(frm, 1);
        });

        DesperdicioTab.on('click', function() {
            clearInterval(interval);  // Detener el intervalo si está en ejecución
            actualizarPesoDetalle(frm, 2);
        });

        DetalleTab.on('click', function() {
            clearInterval(interval);  // Detener el intervalo si está en ejecución

        });
    }
    }
});

function actualizarPesoDetalle(frm, tipo) {
    // Intervalo para actualizar cada 2 segundos
    interval = setInterval(function() {
        frappe.call({
            method: 'etiba.etiba.doctype.captura_de_pesos.captura_de_pesos.actualizar_peso_desde_archivo',
            callback: function(r) {
                if (r.message) {
                    var [peso, uom] = r.message;
                    
                    if (tipo == 1) {
                        // Mostrar una alerta con el valor del peso
                        frm.set_value('peso', peso);
                        frm.set_value('uom', uom);
                        frm.refresh_field('peso');
                        frm.refresh_field('uom');
                    }

                    if (tipo == 2) {
                        frm.set_value('des_peso', peso);
                        frm.set_value('des_uom', uom);
                        frm.refresh_field('des_peso');
                        frm.refresh_field('des_uom');
                    }
                }
            }
        });
    }, 1000);
}

