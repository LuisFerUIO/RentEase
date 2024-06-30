// Obtener todas las claves almacenadas en localStorage
let keys = Object.keys(localStorage);

for (let key of keys) {
    // Obtener el valor asociado a la clave actual y parsearlo como un objeto JSON
    let item = JSON.parse(localStorage.getItem(key));

    // Verificar si el objeto tiene una propiedad 'flats'
    if (item.flats) {
        // Convertir los objetos dentro de 'flats' a una cadena JSON legible
        let flatsContent = item.flats.map(flat => JSON.stringify(flat)).join('<br/>');

        item.flats.forEach((flat, index) => {

            let flatsBox = '';

            // Convertir el objeto 'flat' a una cadena JSON para fines demostrativos
            let flatJson = JSON.stringify(flat);

            flatsBox += `<div class="flatsBox">`;
            //flatsBox += `<li><span class="favorite">${flat.favorite}<span></li>`;
            if (flat.favorite == 'si') {
                flatsBox += `<button class="flatFavorito" data-id="${flat.dateRegisterKey}\&${key}"></button>`;
            } else {
                flatsBox += `<button class="flatNoFavorito" data-id="${flat.dateRegisterKey}\&${key}"></button>`;
            }
            flatsBox += `<li class="picture"><img src="${flat.picture}"></li>`;
            flatsBox += `<li><span class="userkey">Usuario:<span> ${key}</li>`;
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