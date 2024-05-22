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

let keys = Object.keys(localStorage);
for (let key of keys) {
    console.log(`${key}: ${localStorage.getItem(key)}`);
    let flatsBox = (`${key}: ${localStorage.getItem(key)}`);
    document.getElementById('flat').innerHTML += flatsBox;
    document.getElementById('flat').innerHTML += '<br/><br/><br/>';
}
console.log(`****************************************`);

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