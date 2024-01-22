// Copyright (c) 2024, Humberto Chitay & Josue Velasquez and contributors
// For license information, please see license.txt
frappe.ui.form.on('Tiempos Muertos', {
    setup: function(frm) {
        // Establecer la fecha actual al cargar el formulario
        if(!frm.doc.fecha){
            frm.set_value('fecha_inicio', frappe.datetime.now_datetime());
   
        }
        if(!frm.doc.fecha_fin){
            frm.set_value('fecha_fin', frappe.datetime.now_datetime());
   
        }
        if(!frm.doc.tiempo){
            frm.set_value('tiempo_en_horas', 0);
   
        }
      
    }
});

frappe.ui.form.on('Tiempos Muertos', {
    fecha_fin: function(frm) {
        var fechaInicio = frm.doc.fecha_inicio;
        var fechaFin = frm.doc.fecha_fin;
    
        if (fechaInicio && fechaFin) {
            var minutosDiferencia = moment(fechaFin).diff(moment(fechaInicio), 'minutes');
            var horasDiferencia = (minutosDiferencia / 60).toFixed(1);
    
            if (fechaFin < fechaInicio) {
                mostrarAlerta('Atencion', 'La fecha fin no puede ser menor a la fecha de inicio', 'red');
                frm.set_value('fecha_fin', '');
                frm.set_value('tiempo_en_horas', '');
            } else {
                frm.set_value('tiempo_en_horas', horasDiferencia);
            }
        }
    },
    
    fecha_inicio: function(frm) {
  
        var fechaInicio =frm.doc.fecha_inicio;
        var fechaFin = frm.doc.fecha_fin;
        var horasDiferencia = frappe.datetime.get_hour_diff(fechaFin, fechaInicio);

        if (fechaInicio && fechaFin) {
            var minutosDiferencia = moment(fechaFin).diff(moment(fechaInicio), 'minutes');
            var horasDiferencia = (minutosDiferencia / 60).toFixed(1);
    
            if (fechaFin < fechaInicio) {
                mostrarAlerta('Atencion', 'La fecha fin no puede ser menor a la fecha de inicio', 'red');
                frm.set_value('fecha_fin', '');
                frm.set_value('tiempo_en_horas', '');
            } else {
                frm.set_value('tiempo_en_horas', horasDiferencia);
            }
        }
    }

    
});

function mostrarAlerta(titlle,message,indicator) {
    frappe.msgprint({
        title: __(titlle),
        message: __(message),
        indicator: indicator
    });
}

