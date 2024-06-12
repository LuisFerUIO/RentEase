/*****************************************************************************************
 '		RECUPERO EL USERKAY POR LA URL
 *****************************************************************************************/
// Obtener la URL actual
const urlParams = new URLSearchParams(window.location.search);

// Obtener el valor del parámetro userkey
const userkeyurlParams = urlParams.get('userkey');
const firstNameParams = urlParams.get('firstName');
//imprimo en pantalla
document.getElementById('nameUser').innerHTML = firstNameParams;
document.getElementById('userKey').innerHTML = userkeyurlParams;
/*****************************************************************************************
 '		RECUPERAR FLATS DEL USUARIO
 *****************************************************************************************/
//leer datos del usuario segun su userkay
let readUser = localStorage.getItem(userkeyurlParams);
//console.log("readUser = " + readUser);

// Convertir los datos a un objeto JavaScript
let datos = JSON.parse(readUser);

// Verificar si la propiedad "flats" existe y es un array
let flatsBox;
if (Array.isArray(datos.flats)) {
    datos.flats.forEach(flat => {

        flatsBox += `<div class="flatsBox">`;
        flatsBox += `<li class="img"><li class="img"> <img src="${flat.picture}"></li>`;
        flatsBox += `<li>${flat.dateRegisterKey}</li>`;
        flatsBox += `<li>${flat.favorite}</li>`;
        flatsBox += `<li>${flat.city}</li>`;
        flatsBox += `<li>${flat.rentPrice}</li>`;
        flatsBox += `<li>${flat.areaSize}</li>`;
        flatsBox += `<li class="delete"><a class="btn" href=delete_Flat.html?userkey=${userkeyurlParams}&dateRegisterKey=${flat.dateRegisterKey}&firstName=${firstNameParams}>Eliminar</a></li>`;
        flatsBox += `<li class="update"><a class="btn" href=update_flat.html?userkey=${userkeyurlParams}&dateRegisterKey=${flat.dateRegisterKey}&firstName=${firstNameParams}>Actualizar</a></li>`;
        flatsBox += `</div>`;

        document.getElementById('flats').innerHTML = flatsBox;

        // console.log(flat.dateRegisterKey)
    });
} else {
    console.log('error');
}
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
/*****************************************************************************************
 '                  BOTON all flat pasar datos del usuario
 *****************************************************************************************/
document.addEventListener('DOMContentLoaded', function () {
// Obtener el elemento input
    let btnAllFlats = document.getElementById('all_flats');

// Asociar el manejador de eventos con el evento keypress del input
    btnAllFlats.addEventListener('click', function (event) {

        event.preventDefault();

        document.location.href = `all_flats.html?userkey=${userkeyurlParams}&firstName=${firstNameParams}`;

    });
});

