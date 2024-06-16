/*****************************************************************************************
 '                  VALIDAR INPUT email
 *****************************************************************************************/
//intancio la class permitidos
const validarEmailLogin = new classValidaciones();

// Obtener el elemento input
const inputEmail = document.getElementById('email');

// Asociar el manejador de eventos con el evento keypress del input
inputEmail.addEventListener('focusout', function (event) {
    let mensaje = '';
    let mitexto = inputEmail;
    //let mitexto = inputEmail.value ;


    // Llama al método de validación y previene el comportamiento por defecto si la tecla no es permitida
    if (!validarEmailLogin.camposEmail(mitexto, mensaje)) {
        event.preventDefault();
    }

});

/*****************************************************************************************
 '                  COMPROBAR SI USUARIO EXISTE EN EL LOCALSTORE
 *****************************************************************************************/
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('submit', validoUsuario);
    function validoUsuario(event) {
        event.preventDefault()
        let userkey = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        console.log(userkey);
        //leer datos del usuario según su userkay
        let readUser = localStorage.getItem(userkey)
        // Convertir los datos a un objeto JavaScript
        let datos = JSON.parse(readUser);
        if (readUser) {
            if (password) {
                if (password === datos.password) {
                    let firstName = datos.firstName;
                    //Crear sesión en session storage
                    if (createSession(userkey, firstName)) {
                        //document.location.href = 'all_flats.html?userkey=' + userkey + '&firstName=' + firstName;
                        document.location.href = 'all_flats.html';
                    }
                } else {
                    alert('la Clave es incorrecta');
                }
            } else {
                alert('Ingrese su clave');
            }
        } else {
            alert('El usuario no existe');
        }
    }
});

/*****************************************************************************************
 '                  CREADOR SE SESIÓN EN SESIONSTORAGE
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
