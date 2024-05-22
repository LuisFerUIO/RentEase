/*****************************************************************************************
 '		RECUPERO EL USERKAY POR LA URL
 *****************************************************************************************/
// Obtener la URL actual
const urlParams = new URLSearchParams(window.location.search);

// Obtener el valor del parámetro userkey
const userkeyurlParams = urlParams.get('userkey');
const firstName = urlParams.get('firstName');
//imprimo en pantalla
document.getElementById('nameUser').innerHTML = firstName;
document.getElementById('userKey').innerHTML = userkeyurlParams;
/*****************************************************************************************
 '		RECUPERAR FLATS DEL USUARIO
 *****************************************************************************************/
//leer datos del usuario segun su userkay
let readUser = localStorage.getItem(userkeyurlParams)
console.log(readUser);

// Convertir los datos a un objeto JavaScript
let datos = JSON.parse(readUser);


// Verificar si la propiedad "flats" existe y es un array
if (Array.isArray(datos.flats)) {
    datos.flats.forEach(flat => {
        document.getElementById('flat').innerHTML += `<li>${flat.dateRegisterKey}</li>`;
        document.getElementById('flat').innerHTML += `<li>${flat.favorite}</li>`;
        document.getElementById('flat').innerHTML += `<li>${flat.city}</li>`;
        document.getElementById('flat').innerHTML += `<li>${flat.rentPrice}</li>`;
        document.getElementById('flat').innerHTML += `<li>${flat.areaSize}</li>`;
        console.log(flat.dateRegisterKey)
    });
} else {
    console.log('error');
}