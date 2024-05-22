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
 '		DATOS DE EJEMPLO
 '.........................................................................................
 '  Se agrega un suario con sus dos propiedades
 '  Estos datos se cargan al entrar en la pagina index por primera vez
 *****************************************************************************************/

const objetData = {
    "userkey": "luis@1234.com",
    "firstName": "Luis",
    "lastName": "Suarez",
    "birthDate": "1984-12-25",
    "password": "1234",
    "flats":
        [{
            "dateRegisterKey": "20240522082420",
            "favorite": "si",
            "province": "MANABI",
            "city": "MANTA",
            "streetName": "Nicolas",
            "streetNumber": "195",
            "areaSize": "100",
            "hasAc": "SI",
            "yearBuilt": "2024",
            "rentPrice": "1500",
            "dateAvailable": "2024-05-01"
        },
            {
                "dateRegisterKey": "20240522082420",
                "favorite": "si",
                "province": "PICHINCHA",
                "city": "QUITO",
                "streetName": "Burgeus",
                "streetNumber": "195",
                "areaSize": "500",
                "hasAc": "NO",
                "yearBuilt": "1980",
                "rentPrice": "300",
                "dateAvailable": "2024-05-01"
            }],
};
const objetData1 = {
    "userkey": "diana@1234.com",
    "firstName": "Diana",
    "lastName": "Siguenza",
    "birthDate": "2004-12-25",
    "password": "1234",
    "flats":
        [{
            "dateRegisterKey": "20240522082420",
            "favorite": "si",
            "province": "PICHINCHA",
            "city": "QUITO",
            "streetName": "Nicolas",
            "streetNumber": "195",
            "areaSize": "100",
            "hasAc": "NO",
            "yearBuilt": "2000",
            "rentPrice": "500",
            "dateAvailable": "2024-05-01"
        },
            {
                "dateRegisterKey": "20240522082420",
                "favorite": "si",
                "province": "AZUAY",
                "city": "CUENCA",
                "streetName": "Quito",
                "streetNumber": "195",
                "areaSize": "100",
                "hasAc": "NO",
                "yearBuilt": "1990",
                "rentPrice": "400",
                "dateAvailable": "2024-05-01"
            }],
};



// // Obtener el formulario
// const elementFormRegister = document.querySelector('form[name=formrRegister]');
// //detecto la accion en el boton y ejecuto la funcion
// elementFormRegister.addEventListener('submit', getDataForm);

//funcion
// function getDataForm(event) {
//     event.preventDefault()

//console.log('formulario completo', elementFormRegister);

// const formData = new FormData(elementFormRegister);
// //console.log('Está pensado principalmente para enviar datos de formularios', formData);

//const objetData = Object.fromEntries(formData);
//console.log('transforma una lista de pares con [clave-valor]', objetData);

// Acceder al email y firstName
const userkey = objetData.userkey;
const userkey1 = objetData1.userkey;
// const firstName = objetData.firstName;
// console.log('userkey = ' + userkey + ' firstName = ' + firstName);

// elimino del objeto porque lo usare de key asi no puede haber dos iguales
// delete objetData.userkey;

// este campo es solo para la validacion se debe borrar
//delete objetData.passwordConfirmation;

//console.log(objetData);

if (localStorage.length === 0) {

    console.log('localStorage está vacío');

    const userRegister = JSON.stringify(objetData);
    const userRegister1 = JSON.stringify(objetData1);
    //console.log('grabar estos datos' , userRegister);

    localStorage.setItem(userkey, userRegister);
    localStorage.setItem(userkey1, userRegister1);

    console.log('Grabado', window.localStorage);

} else {
    console.log('localStorage tiene elementos almacenados');
}

// }