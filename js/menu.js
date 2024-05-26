/*****************************************************************************************
 '              boton borrado de local store
 '.........................................................................................
 'Descripcion:
 '		Borra el contenido de localStorage
 '		Necesario porque en el servidor de pruebas tenia datos de formularios anteriores
 '.........................................................................................
 'Parametros:
 '		nunguno
 *****************************************************************************************/
document.getElementById('limpiarFormLocalStorage').addEventListener('click', function () {
        localStorage.clear();
        console.log('localStorage borrado.');
    }
);
/*****************************************************************************************
 '              boton carga de datos en  local store
 '.........................................................................................
 'Descripcion:
 '		Necesario para pruebas
 '.........................................................................................
 'Parametros:
 '		nunguno
 *****************************************************************************************/
document.getElementById('cargarDatosLocalStorage').addEventListener('click', cargarDatosLocalStorage());
