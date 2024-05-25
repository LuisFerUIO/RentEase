/*****************************************************************************************
 '		RECUPERO EL USERKAY POR LA URL
 //  *****************************************************************************************/
// // Obtener la URL actual
// const urlParams = new URLSearchParams(window.location.search);
//
// // Obtener el valor del parámetro userkey
// const userkeyurlParams = urlParams.get('userkey');
// const firstName = urlParams.get('firstName');
// //imprimo en pantalla
// document.getElementById('nameUser').innerHTML = firstName;
// document.getElementById('userKey').innerHTML = userkeyurlParams;
/*****************************************************************************************
 '		RECUPERAR FLATS DE TODOS LOS USUARIOS
 *****************************************************************************************/
//console.log('Grabado', window.localStorage);

// for(let i=0; i<localStorage.length; i++) {
//     let key = localStorage.key(i);
//     alert(`${key}: ${localStorage.getItem(key)}`);
// }

//leer datos del usuario segun su userkay
// let readUser = localStorage.getItem('userkey');
// console.log("readUser = "+readUser);
// let userKeys = localStorage.getItem('userkeys');
// console.log("userKeys = "+ userKeys);

//console.log('localstore = ', window.localStorage);

// let keys = Object.keys(localStorage);
// for (let key of keys) {
//
//     console.log(`${key}: ${localStorage.getItem(key)}`);
//
//     let flatsBox = (`${key}: ${localStorage.getItem(key)}`);
//
//     document.getElementById('flat').innerHTML += flatsBox;
//     document.getElementById('flat').innerHTML += '<br/><br/><br/>';
// }
console.log(`****************************************`);

// Obtener todas las claves almacenadas en localStorage
let keys = Object.keys(localStorage);

// Variable para almacenar el contenido que se va a mostrar en el elemento con ID 'flat'
let content = '';

for (let key of keys) {
    // Obtener el valor asociado a la clave actual y parsearlo como un objeto JSON
    let item = JSON.parse(localStorage.getItem(key));

    // Verificar si el objeto tiene una propiedad 'flats'
    if (item.flats) {
        // Convertir los objetos dentro de 'flats' a una cadena JSON legible
        let flatsContent = item.flats.map(flat => JSON.stringify(flat)).join('<br/>');

        // Añadir la información de 'flats' al contenido
        content += `Usuario: ${key} - Flats:<br/>${flatsContent}<br/><br/><br/>`;
    } else {
        // Si no tiene la propiedad 'flats', agregar un mensaje indicando que no tiene 'flats'
        content += `Usuario: ${key} - No tiene flats<br/><br/><br/>`;
    }
}

// Asignar el contenido al elemento HTML con ID 'flat'
document.getElementById('flats').innerHTML = content;

// localStorage.user = JSON.stringify({name: "John"});
//
// // en algún momento más tarde
// let user = JSON.parse( localStorage.user );
// alert( user.name ); // John


// se ha añadido opciones de formato a JSON.stringify para que el objeto se lea mejor
//alert( JSON.stringify(localStorage, null, 2) );

//verifica su existe
// hasOwnProperty(key)


// Convertir los datos a un objeto JavaScript
//let datos = JSON.parse(readUser);

// Verificar si la propiedad "flats" existe y es un array
// let flatsBox;
// if (Array.isArray(datos.flats)) {
//     datos.flats.forEach(flat => {
//
//         flatsBox += `<div class="flatsBox">`;
//         flatsBox += `<li class="favorite"><span>Favorito:</span><input type="checkbox" id="favorite" name="favorite" value="second_checkbox"/></li>`;
//         flatsBox += `<li class="img"><li class="img"> <img height="200px" src="../images/flats/flats_200x200px.jpg"></li>`;
//         flatsBox += `<li>${flat.dateRegisterKey}</li>`;
//         flatsBox += `<li>${flat.favorite}</li>`;
//         flatsBox += `<li>${flat.city}</li>`;
//         flatsBox += `<li>${flat.rentPrice}</li>`;
//         flatsBox += `<li>${flat.areaSize}</li>`;
//         flatsBox += `</div>`;
//
//         document.getElementById('flat').innerHTML = flatsBox;
//
//         console.log(flat.dateRegisterKey)
//     });
// } else {
//     console.log('error');
// }