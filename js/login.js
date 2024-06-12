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
//const elementFormLogin = document.querySelector('form[name=formrLogin]');

document.addEventListener('DOMContentLoaded', function () {

    document.addEventListener('submit', validoUsuario);


    function validoUsuario(event) {
        event.preventDefault()

        const userkey = document.getElementById('email').value;
        //console.log('userkey = ' + userkey);
        const password = document.getElementById('password').value;


        //leer datos del usuario segun su userkay
        let readUser = localStorage.getItem(userkey)
        console.log('readUser = ' + readUser);

        // Convertir los datos a un objeto JavaScript
        let datos = JSON.parse(readUser);

        if (readUser) {

            if (password) {
                //let readUserPass = localStorage.getItem(password)
                //console.log('readUserPass = ' + readUser);
                if (password == datos.password) {
                    let firstName = datos.firstName;
                    document.location.href = 'all_flats.html?userkey=' + userkey + '&firstName=' + firstName;
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



