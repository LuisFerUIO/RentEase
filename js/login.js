/*****************************************************************************************
 '                  VALIDAR INPUT email
 *****************************************************************************************/
//intancio la class permitidos
const validarEmailLogin = new classValidaciones();

// Obtener el elemento input
const inputEmail = document.getElementById('email');

// Asociar el manejador de eventos con el evento keypress del input
inputEmail.addEventListener('focusout', function (event) {
    let mensaje = 'ERROR';
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
    }

});


// var user = {
//         "login":"",
//         "contraseña":"",
//         profile:{
//             id: 0,
//             nameProfile:'',
//         }
// }
// var procesarClic = function(){
//     var user1 = document.getElementById('Email').value;
//     var contraseña1 = document.getElementById('contraseña').value;
// if(contraseña1 == "1234"){
//     user.profile.nameProfile="admin";
//     user.profile.id=5;
//     user.login = user1;
//     user.contraseña = contraseña1;
//     document.getElementById('profile').style = "display:block";
//     document.getElementById('autenticación').style = "display:none";
//     document.getElementById('mensaje').innerHTML = "Bienvenid@" + user.login + "Usted es el usuario con el rol:" +user.profile.nameProfile;
// }
// else{
// alert('La clave ingresada es inválida. Inténtalo nuevamente.');
// }
// }
//

