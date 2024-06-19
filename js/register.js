
/*****************************************************************************************
 '                  CREAR REGISTRO O EDITAR REGISTRO
 *****************************************************************************************/
function editarRegistrar() {
    if (updateParams == true) {

        if (localStorage.getItem(userkeyurlParams) !== null) {
            alert('Usuario existe');
        } else {
            //leer datos del usuario segun su userkay
            let readUser = localStorage.getItem(userkeyurlParams);
            //console.log("readUser = " + readUser);

            // Convertir los datos a un objeto JavaScript
            let datos = JSON.parse(readUser);
            document.querySelector(input[name = "firstName"]).innerHTML.value = datos.firstName;
            document.querySelector(input[name = "lastName"]).innerHTML.value = datos.lastName;
            document.querySelector(input[name = "birthDate"]).innerHTML.value = datos.birthDate;
            // password
        }
    } else if (updateParams == false) {
        //no hace nada
        console.log(`el usuario se va a registrar`);
    } else {
        document.location.href = 'index.html';
    }
}
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
//instancia la class permitidos
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
 '                 FUNCTION GUARDAR USUARIO
 *****************************************************************************************/
/*****************************************************************************************
 '                  CREADOR SE SESIÓN EN SESSION STORAGE
 *****************************************************************************************/
function createSession(userkey, firstName) {
    let userkeySession = userkey;
    let firstNameSession = firstName;
    objetoSession = {
        userkey: userkeySession,
        firstName: firstNameSession
    }
    console.log(userkeySession + firstNameSession);
    //sessionStorage.setItem(userkeySession,JSON.stringify(firstNameSession));
    sessionStorage.setItem('session', JSON.stringify(objetoSession));
    return true;
}

const elementFormRegister = document.querySelector('form[name=formrRegister]');
elementFormRegister.addEventListener('submit', guardarRegistro);

function guardarRegistro(event) {
    event.preventDefault()
    const formData = new FormData(elementFormRegister);
    const objetData = Object.fromEntries(formData);

    let userkey = objetData.email;
    let firstName = objetData.firstName;
    // borro campos del objeto antes de enviar a guardar
    delete objetData.email;
    delete objetData.passwordConfirmation;

    let validarCampos = new classValidaciones();
    let grabar = validarCampos.camposRegistro(objetData);
    if (grabar) {
        const userRegister = JSON.stringify(objetData);
        console.log(userRegister);
        localStorage.setItem(userkey, userRegister);
        //grabo datos en session storage
        createSession(userkey, firstName);
        console.log('graba', window.localStorage);
        //alert('Bien almacenado!!');
        alertify.alert('Aviso', 'Usuario Registrado Correctamente', function () {
            alertify.message('OK______________________');
        });
        document.location.href = 'all_flats.html';
    }
}