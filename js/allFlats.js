/*****************************************************************************************
 '		RECUPERO EL USERKAY POR LA URL
 //  *****************************************************************************************/
// Obtener la URL actual
const urlParams = new URLSearchParams(window.location.search);

// Obtener el valor del parámetro userkey
const userkeyurlParams = urlParams.get('userkey');
const firstNameParams = urlParams.get('firstName');
//imprimo en pantalla
document.getElementById('nameUser').innerHTML = firstNameParams;
document.getElementById('userKey').innerHTML = userkeyurlParams;
/*****************************************************************************************
 '		RECUPERAR FLATS DE TODOS LOS USUARIOS
 *****************************************************************************************/
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
        //content += `Usuario: ${key} - Flats:<br/>${flatsContent}<br/><br/><br/>`;
        //content += `Usuario: ${key}`;


        item.flats.forEach((flat, index) => {

            let flatsBox = '';

            // Convertir el objeto 'flat' a una cadena JSON para fines demostrativos
            let flatJson = JSON.stringify(flat);

            // Agregar esta cadena JSON a nuestra variable 'flatsContent'
            // Además, añadir un salto de línea '<br/>' para separar cada flat visualmente en HTML
            //flatsContent += `Flat ${index + 1}: ${flatJson}<br/>`;

            // También podemos mostrar cómo acceder a propiedades individuales
            // Por ejemplo, imprimimos la ciudad y el precio de cada flat
            //content += `Flat ${index + 1}: City - ${flat.city}, Price - $${flat.rentPrice}`;

            flatsBox += `<div class="flatsBox">`;
            //flatsBox += `<li><span class="favorite">${flat.favorite}<span></li>`;
            if (flat.favorite == 'si') {
                flatsBox += `<label>Favorito:</label><input type="checkbox" id="" value="" checked />`;
            } else {
                flatsBox += `<label>Favorito:</label><input type="checkbox" id="" value=""/>`;
            }
            flatsBox += `<li class="picture"><img height="200px" src="${flat.picture}"></li>`;
            flatsBox += `<li><span class="userkey">Usuario:<span> ${key}</li>`;
            flatsBox += `<li><span class="dateRegisterKey">ID:<span>${flat.dateRegisterKey}</li>`;
            flatsBox += `<li><span class="city">Ciudad:<span>${flat.city}</li>`;
            flatsBox += `<li><span class="rentPrice">Precio:<span>$${flat.rentPrice}</li>`;
            flatsBox += `<li><span class="areaSize">Metros2:<span>${flat.areaSize}</li>`;
            flatsBox += `</div>`;
            content += flatsBox;
        });


    } else {
        // Si no tiene la propiedad 'flats', agregar un mensaje indicando que no tiene 'flats'
        content += `Usuario: ${key} - No tiene flats<br/><br/><br/>`;
    }
}
document.getElementById('flats').innerHTML = content;


/*****************************************************************************************
 '                  BOTON update register id="updateRegister"
 *****************************************************************************************/
document.addEventListener('DOMContentLoaded', function () {
// Obtener el elemento input
    const btnUpdateRegister = document.getElementById('updateRegister');

// Asociar el manejador de eventos con el evento keypress del input
    btnUpdateRegister.addEventListener('click', function (event) {

        event.preventDefault();

        document.location.href = `update_register.html?userkey=${userkeyurlParams}&firstName=${firstNameParams}`;

    });
});
/*****************************************************************************************
 '                  BOTON home.index id="home"
 *****************************************************************************************/
document.addEventListener('DOMContentLoaded', function () {
// Obtener el elemento input
    const btnHome = document.getElementById('home');

// Asociar el manejador de eventos con el evento keypress del input
    btnHome.addEventListener('click', function (event) {

        event.preventDefault();

        document.location.href = `home.html?userkey=${userkeyurlParams}&firstName=${firstNameParams}`;

    });
});
/*****************************************************************************************
 '                  BOTON nuevo flat pasar datos del usuario
 *****************************************************************************************/
document.addEventListener('DOMContentLoaded', function () {
// Obtener el elemento input
    const btnNewFlat = document.getElementById('new_flat');

// Asociar el manejador de eventos con el evento keypress del input
    btnNewFlat.addEventListener('click', function (event) {

        event.preventDefault();

        document.location.href = `new_flat.html?userkey=${userkeyurlParams}&firstName=${firstNameParams}`;

    });
});