/*****************************************************************************************
 '		MANEJO DE SESION
 /  *****************************************************************************************/

var userkeyurlParams;
var userkey;
var firstNameParams;
var sessionUser;

//window: objeto ventana
//pageshow: se dispara cuando la pagina se carga por primera vez o desde caché
window.addEventListener('pageshow', function (event) {
    //persisted: indica si la pagina se esta cargando desde la cache true/false
    if (event.persisted) {
        window.location.reload(); // Forzar recarga sin usar caché
    }
});

//lee sessionStorage.getItem y verifica si el usuario existe
//caso contrario elimina todos los div en pantalla
function verificarSesion() {
    let sessionUser = JSON.parse(sessionStorage.getItem('session'));
    if (sessionUser) {
        console.log(sessionUser);
        userkeyurlParams = sessionUser.userkey;
        console.log('userkeyurlParams' + userkeyurlParams);
        firstNameParams = sessionUser.firstName;
        imprimirDatosHead(sessionUser);
        return sessionUser;
    } else {
        document.body.replaceChildren();
        let h1 = document.createElement('h1');
        h1.textContent = "Para acceder a esta información, por favor inicia sesión en tu cuenta."
        document.querySelector('body').appendChild(h1);
        let a = document.createElement('a');
        a.href = 'index.html';
        a.textContent = 'Iniciar Sesión';
        document.querySelector('body').appendChild(a);
    }
}

//imprime en el head ID y Nombre del Usuario
function imprimirDatosHead(sessionUser) {
    //document.getElementById('userkey').innerHTML = sessionUser.userkey;
    try {
        document.getElementById('firstName').innerHTML = sessionUser.firstName;
    } catch (error) {
        console.log(error)
    }

}

/*****************************************************************************************
 '                  CARGAR DATOS DEL USUARIO
 *****************************************************************************************/
function loadUser(userkey) {
    console.log(userkey);
    objetUser = JSON.parse(localStorage.getItem(userkey));
    console.log(typeof objetUser);
    console.log(objetUser);
    document.querySelector('input[name="firstName"]').value = objetUser.firstName;
    document.querySelector('input[name="lastName"]').value = objetUser.lastName;
    document.querySelector('input[name="birthDate"]').value = objetUser.birthDate;
}
/*****************************************************************************************
 '		CERRAR DE SESSION
 / *****************************************************************************************/
document.addEventListener('DOMContentLoaded', function () {
// Seleccionamos el contenedor de los botones
    const logOut = document.getElementById('logOut');
// Definimos el manejador de eventos para el contenedor
    logOut.addEventListener('click', function (event) {
        sessionStorage.clear();
        var userkeyurlParams = null;
        var firstNameParams = null;
        delete window.userkeyurlParams;
        delete window.firstNameParams;
        console.log("logOut");
        document.location.href = 'index.html';
    });
});
