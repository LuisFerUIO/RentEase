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