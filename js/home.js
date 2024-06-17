// /*****************************************************************************************
//  '		RECUPERO EL USERKAY POR LA URL
//  *****************************************************************************************/
// // Obtener la URL actual
// const urlParams = new URLSearchParams(window.location.search);
//
// // Obtener el valor del parámetro userkey
// const userkeyurlParams = urlParams.get('userkey');
// const firstNameParams = urlParams.get('firstName');
// //imprimo en pantalla
// document.getElementById('nameUser').innerHTML = firstNameParams;
// document.getElementById('userKey').innerHTML = userkeyurlParams;


// Se dispara cuando haya cargado la pagina y verificar la sesión al cargar la página
window.onload = function () {
    let sessionUser = verificarSesion();
    imprimirMisFlats(sessionUser);
}
/*****************************************************************************************
 '		RECUPERAR FLATS DEL USUARIO
 *****************************************************************************************/
function imprimirMisFlats(sessionUser) {
    serkeyurlParams = sessionUser.userkey;
    firstNameParams = sessionUser.firstName;
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
            // flatsBox += `<li>${flat.favorite}</li>`;
            flatsBox += `<li>${flat.city}</li>`;
            flatsBox += `<li>${flat.rentPrice}</li>`;
            flatsBox += `<li>${flat.areaSize}</li>`;
            flatsBox += `<li class="delete"><a class="btn" href=delete_Flat.html?userkey=${userkeyurlParams}&dateRegisterKey=${flat.dateRegisterKey}&firstName=${firstNameParams}>Eliminar</a></li>`;
            flatsBox += `<li class="update"><a class="btn" href=update_flat.html?userkey=${userkeyurlParams}&dateRegisterKey=${flat.dateRegisterKey}&firstName=${firstNameParams}&update=true>Actualizar</a></li>`;
            flatsBox += `</div>`;

            document.getElementById('flats').innerHTML = flatsBox;

            // console.log(flat.dateRegisterKey)
        });
    } else {
        console.log('error');
    }
}
