// Se dispara cuando haya cargado la página y verífica la sesión
window.onload = function () {
    let sessionUser = verificarSesion();
    loadUser(sessionUser.userkey);
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
 '                 FUNCTION GUARDAR USUARIO
 *****************************************************************************************/
const elementFormRegister = document.querySelector('form[name=formrRegister]');
elementFormRegister.addEventListener('submit', guardarRegistro);

function guardarRegistro(event) {
    event.preventDefault()
    const formData = new FormData(elementFormRegister);
    const objetData = Object.fromEntries(formData);

    let validarCampos = new classValidaciones();
    let grabar = validarCampos.camposRegistro(objetData);

    if (grabar) {
        //recojo variable con datos del usuario
        objetUserSave = objetUser;
        //hago el cambio
        console.log(objetUserSave.firstName);
        objetUserSave.firstName = objetData.firstName;
        console.log(objetUserSave.firstName);
        objetUserSave.lastName = objetData.lastName;
        objetUserSave.birthDate = objetData.birthDate

        const userRegister = JSON.stringify(objetUserSave);
        console.log(userRegister);
        try {
            console.log("userkey = " + userkeyurlParams);
            localStorage.setItem(userkeyurlParams, userRegister);

            let sessionRead = JSON.parse(sessionStorage.getItem('session'));
            console.log('sessionRead' + sessionRead);
            sessionRead.firstName = objetUserSave.firstName;
            sessionStorage.setItem('session', JSON.stringify(sessionRead));
        } catch (error) {
            console.log("error grabar");
        }
        alertify.alert('Aviso', 'Sus datos fueron actualizados correctamente', function () {
            alertify.message('OK______________________');
        });
    }
}