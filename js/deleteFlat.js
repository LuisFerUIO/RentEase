/*****************************************************************************************
 '		RECUPERO EL USERKAY POR LA URL
 *****************************************************************************************/
// Obtener la URL actual
const urlParams = new URLSearchParams(window.location.search);

// Obtener el valor del parámetro userkey
const userkeyurlParams = urlParams.get('userkey');
const firstNameParams = urlParams.get('firstName');
const dateRegisterKeyParams = urlParams.get('dateRegisterKey');
//imprimo en pantalla
//document.getElementById('nameUser').innerHTML = firstName;
//document.getElementById('userKey').innerHTML = userkeyurlParams;
/*****************************************************************************************
 '		ELIMINAR FLAT
 *****************************************************************************************/
//leer datos del usuario segun su userkay
let readUser = localStorage.getItem(userkeyurlParams);
//console.log("readUser = " + readUser);

// Convertir los datos a un objeto JavaScript
let datos = JSON.parse(readUser);

// Recuperar el objeto desde localStorage
// let userDataString = localStorage.getItem('userData');
// let userData = JSON.parse(userDataString);

// Filtrar el array para remover el elemento deseado
datos.flats = datos.flats.filter(flat => flat.dateRegisterKey !== dateRegisterKeyParams);


// Guardar el objeto modificado de nuevo en localStorage
let updatedUserDataString = JSON.stringify(datos);
//console.log(`updatedUserDataString = ${updatedUserDataString}`);
localStorage.setItem(userkeyurlParams, updatedUserDataString);

// Comprobar si los datos se guardaron correctamente
// Primero, intentamos recuperar los datos usando la misma clave que usamos para guardarlos.
let datosGuardados = localStorage.getItem('dateRegisterKeyParams');

setTimeout(function () {
    document.location.href = "home.html?userkey=" + userkeyurlParams + "&firstName=" + firstNameParams;
}, 2000);

// Ahora, comprobamos si lo que recuperamos es igual a lo que intentamos guardar.
// if (datosGuardados === updatedUserDataString) {
//     document.getElementById('mesaje').innerHTML = '¡Éxito! Los datos se guardaron correctamente en localStorage.';
// } else {
//     document.getElementById('mesaje').innerHTML = 'Hubo un problema al guardar los datos.';
// }