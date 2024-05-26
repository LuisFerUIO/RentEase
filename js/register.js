/*****************************************************************************************
 '		RECUPERO EL USERKAY POR LA URL
 //  *****************************************************************************************/
// Obtener la URL actual
const urlParams = new URLSearchParams(window.location.search);

// Obtener el valor del parámetro userkey
const userkeyurlParams = urlParams.get('userkey');
const firstName = urlParams.get('firstName');
//imprimo en pantalla
document.getElementById('nameUser').innerHTML = firstName;
document.getElementById('userKey').innerHTML = userkeyurlParams;
/*****************************************************************************************
 '                  VALIDAR INPUT firstName
 *****************************************************************************************/
//intancio la class permitidos
const validarFirstName = new classValidaciones();

// Obtener el elemento input
const inputFirstName = document.getElementById('firstName');

// Asociar el manejador de eventos con el evento keypress del input
inputFirstName.addEventListener('keypress', function (event) {
    let permitidos = 'car';
    let mitexto = inputFirstName;

    // Llama al método de validación y previene el comportamiento por defecto si la tecla no es permitida
    if (!validarFirstName.camposNumeros(event, permitidos, mitexto)) {
        event.preventDefault();
    }

});
/*****************************************************************************************
 '                  VALIDAR INPUT lastName
 *****************************************************************************************/
//intancio la class permitidos
const validarLastName = new classValidaciones();

// Obtener el elemento input
const inputLastName = document.getElementById('lastName');

// Asociar el manejador de eventos con el evento keypress del input
inputLastName.addEventListener('keypress', function (event) {
    let permitidos = 'car';
    let mitexto = inputLastName;

    // Llama al método de validación y previene el comportamiento por defecto si la tecla no es permitida
    if (!validarLastName.camposNumeros(event, permitidos, mitexto)) {
        event.preventDefault();
    }

});
/*****************************************************************************************
 '                  VALIDAR INPUT email
 *****************************************************************************************/
//intancio la class permitidos
const validarEmail = new classValidaciones();

// Obtener el elemento input
const inputEmail = document.getElementById('email');

// Asociar el manejador de eventos con el evento keypress del input
inputEmail.addEventListener('focusout', function (event) {
    let mensaje = 'ERROR';
    let mitexto = inputEmail;
    //let mitexto = inputEmail.value ;


    // Llama al método de validación y previene el comportamiento por defecto si la tecla no es permitida
    if (!validarEmail.camposEmail(mitexto, mensaje)) {
        event.preventDefault();
    }

});
/*****************************************************************************************
 '                  CON CLASS GUARDAR USUARIO --- NO VALIO
 *****************************************************************************************/
// //intancio la class permitidos
// const guardarUsario = new classGuardar();
//
// // Obtener el elemento input
// const elementFormRegister = document.querySelector('form[name=formrRegister]');
//
// // Asociar el manejador de eventos con el evento keypress del input
// elementFormRegister.addEventListener('submit', function (event) {
//
//     // Llama al método de validación y previene el comportamiento por defecto si la tecla no es permitida
//     if (!guardarUsario.usuario(event, elementFormRegister)) {
//         event.preventDefault();
//     }
//
// });

/*****************************************************************************************
 '                 FUNCTION GUARDAR USUARIO
 *****************************************************************************************/

// Obtener el formulario
const elementFormRegister = document.querySelector('form[name=formrRegister]');
//detecto la accion en el boton y ejecuto la funcion
elementFormRegister.addEventListener('submit', getDataForm);

//funcion
function getDataForm(event) {
    event.preventDefault()

    //console.log('formulario completo', elementFormRegister);

    const formData = new FormData(elementFormRegister);
    //console.log('Está pensado principalmente para enviar datos de formularios', formData);

    const objetData = Object.fromEntries(formData);
    //console.log('transforma una lista de pares con [clave-valor]', objetData);

    // Acceder al email y firstName
    const userkey = objetData.email;
    const firstName = objetData.firstName;
    //console.log('userkey y firstName = ', email + firstName);

    // elimino del objeto porque lo usare de key asi no puede haber dos iguales
    delete objetData.email;
    // este campo es solo para la validacion se debe borrar
    delete objetData.passwordConfirmation;

    if (localStorage.getItem(userkey) !== null) {
        alert('Usuario con email ya registrado!!');
    } else {
        const userRegister = JSON.stringify(objetData);
        //console.log('grabar estos datos' , userRegister);

        localStorage.setItem(userkey, userRegister);
        console.log('graba', window.localStorage);
        //alert('Bien almacenado!!');
        document.location.href = 'new_flat.html?userkey=' + userkey + '&firstName=' + firstName;
    }
}