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
let readUser = localStorage.getItem(userkeyurlParams);
console.log("readUser = " + readUser);

// Convertir los datos a un objeto JavaScript
let datos = JSON.parse(readUser);


// Verificar si la propiedad "flats" existe y es un array
let flatsBox;
if (Array.isArray(datos.flats)) {
    datos.flats.forEach(flat => {

        flatsBox += `<div class="flatsBox">`;
        flatsBox += `<li class="img"><li class="img"> <img height="200px" src="../images/flats/flats_200x200px.jpg"></li>`;
        flatsBox += `<li>${flat.dateRegisterKey}</li>`;
        flatsBox += `<li>${flat.favorite}</li>`;
        flatsBox += `<li>${flat.city}</li>`;
        flatsBox += `<li>${flat.rentPrice}</li>`;
        flatsBox += `<li>${flat.areaSize}</li>`;
        flatsBox += `<li class="delete"><a class="btn">Eliminar</a></li>`;
        flatsBox += `</div>`;

        document.getElementById('flat').innerHTML = flatsBox;

        console.log(flat.dateRegisterKey)
    });
} else {
    console.log('error');
}