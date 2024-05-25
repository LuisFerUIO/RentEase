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
 '		RECUPERAR FLATS DE TODOS LOS USUARIOS
 *****************************************************************************************/
console.log('Grabado', window.localStorage);


console.log(`****************************************`);

// Obtener todas las claves almacenadas en localStorage
let keys = Object.keys(localStorage);

// Variable para almacenar el contenido que se va a mostrar en el elemento con ID 'flat'
let content;

for (let key of keys) {
    // Obtener el valor asociado a la clave actual y parsearlo como un objeto JSON
    let item = JSON.parse(localStorage.getItem(key));
    console.log(`item = ${item}`);

    let flatsBox;
    let flatsContentSimple;
    // Verificar si el objeto tiene una propiedad 'flats'
    if (item.flats) {
        // Convertir los objetos dentro de 'flats' a una cadena JSON legible
        flatsContentSimple = item.flats.map(flat => JSON.stringify(flat)).join('<br/>');


        let flatsContent = item.flats.map(
            function (flat) {
                flatsBox += `<div class="flatsBox">`;
                flatsBox += `<li class="img"><img src="${flat.picture}"></li>`;
                flatsBox += `<li>${flat.dateRegisterKey}</li>`;
                flatsBox += `<li>${flat.favorite}</li>`;
                flatsBox += `<li>${flat.city}</li>`;
                flatsBox += `<li>${flat.rentPrice}m2</li>`;
                flatsBox += `<li>$${flat.areaSize}</li>`;
                flatsBox += `</div>`;
                content += flatsBox;
            })
        //}).join('*');

        // Añadir la información de 'flats' al contenido
        //content += `Usuario: ${key} - Flats:${flatsContent}`;
        // content += `${key}${flatsContent}`;


    } else {
        // Si no tiene la propiedad 'flats', agregar un mensaje indicando que no tiene 'flats'
        // content += `Usuario: ${key} - No tiene flats<br/>`;
    }
}

// Asignar el contenido al elemento HTML con ID 'flat'
document.getElementById('flats').innerHTML = content;
document.getElementById('flats').innerHTML = flatsContentSimple;


