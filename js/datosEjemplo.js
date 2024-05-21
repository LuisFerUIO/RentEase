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
    "userkey": "lsuarez@krugerschool.edu.ec",
    "firstName": "Luis",
    "lastName": "Suarez",
    "birthDate": "1984-12-25",
    "password": "krugerschoolx",
    "flats": "",
};

const diana = {
    "userkey": "dsiguenza@krugerschool.edu.ec",
    "firstName": "Diana",
    "lastName": "Sigueza",
    "birthDate": "2004-12-25",
    "password": "krugerschoolx",
    "flats": "",
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
const firstName = objetData.firstName;
console.log('userkey = ' + userkey + ' firstName = ' + firstName);

// elimino del objeto porque lo usare de key asi no puede haber dos iguales
// delete objetData.userkey;

// este campo es solo para la validacion se debe borrar
//delete objetData.passwordConfirmation;

console.log(objetData);

if (localStorage.length === 0) {

    console.log('localStorage está vacío');
    const userRegister = JSON.stringify(objetData);
    //console.log('grabar estos datos' , userRegister);

    localStorage.setItem(userkey, userRegister);
    console.log('graba', window.localStorage);
    //alert('Bien almacenado!!');
    // document.location.href = 'new_flat.html?userkey=' + userkey + '&firstName=' + firstName;
} else {
    console.log('localStorage tiene elementos almacenados');

    console.log('localStorage está vacío');
    const userRegister = JSON.stringify(objetData);
    //console.log('grabar estos datos' , userRegister);

    localStorage.setItem(userkey, userRegister);
    console.log('graba', window.localStorage);
    //alert('Bien almacenado!!');
    // document.location.href = 'new_flat.html?userkey=' + userkey + '&firstName=' + firstName;
}

// }