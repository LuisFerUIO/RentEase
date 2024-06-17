// Se dispara cuando haya cargado la pagina y verificar la sesión al cargar la página
window.onload = function () {
    let sessionUser = verificarSesion();
    imprimirFlats(sessionUser);
}
/*****************************************************************************************
 '		RECUPERAR FLATS DE TODOS LOS USUARIOS
 *****************************************************************************************/

function imprimirFlats(sessionUser) {
    serkeyurlParams = sessionUser.userkey;
    firstNameParams = sessionUser.firstName;
//leer datos del usuario segun su userkay
    let readUser = localStorage.getItem(userkeyurlParams);

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
            // let flatsContent = item.flats.map(flat => JSON.stringify(flat)).join('<br/>');

            item.flats.forEach((flat, index) => {

                let flatsBox = '';

                // Itera dentro de Favorite de cada flat buscando si el ID del usuario esta registrado devuelve true : false
                function corazon(flat) {
                    let corazon = false;
                    if (flat.favorite) {
                        for (let favoritos of flat.favorite) {
                            if (favoritos.favoriteUserkey === userkeyurlParams) {
                                corazon = true;
                            }
                        }
                    }
                    console.log(`corazon ${corazon}`);
                    return corazon;
                }

                flatsBox += `<div class="flatsBox">`;
                //flatsBox += `<li><span class="favorite">${flat.favorite}<span></li>`;
                if (corazon(flat)) {
                    //flatsBox += `<label>Favorito:</label><input type="checkbox" id="" value="" checked />`;
                    //flatsBox += `<button class="seleccionFavorito" data-id="${flat.dateRegisterKey}"><img  class="flatFavorito" src="assets/like.svg" alt=""></button>`;
                    //flatsBox += `<button class="seleccionFavorito" data-id="${flat.dateRegisterKey}"><div  class="flatFavorito"></div></button>`;
                    flatsBox += `<button class="flatFavorito" data-id="${flat.dateRegisterKey}\&${key}"></button>`;
                } else {
                    //flatsBox += `<label>Favorito:</label><input type="checkbox" id="" value=""/>`;
                    //flatsBox += `<button class="seleccionFavorito" data-id="${flat.dateRegisterKey}"><div class="flatNoFavorito"></div></button>`;
                    //flatsBox += `<button class="seleccionFavorito" data-id="${flat.dateRegisterKey}"><img  class="flatFavorito" src="assets/like1.svg" alt=""></button>`;
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
    document.getElementById('flats').innerHTML = content;
}
/*****************************************************************************************
 '                  BOTON seleccion de favoritos/corazon
 '                      en cada clic se debe verificar antes de guardar o eliminar
 *****************************************************************************************/
(function () {
    document.addEventListener('DOMContentLoaded', function () {
// Seleccionamos el contenedor de los botones
        const contenedorFlats = document.getElementById('flats');

// Definimos el manejador de eventos para el contenedor
        contenedorFlats.addEventListener('click', function (event) {
            // Verificamos si el elemento clicado es un botón
            if (event.target.tagName === 'BUTTON') {
                // Obtenemos el valor del atributo data-id
                const buttonId = event.target.getAttribute('data-id');
                // imprimir
                console.log('Botón clicado con data-id:', buttonId);

                //document.querySelector("button.seleccionFavorito[data-id=\'"+ buttonId + " \']").removeChild(img);
                //event.target.querySelector('.seleccionFavorito').classList.toggle('hidden');
                // event.target.classList.toggle('flatFavorito');

                // let claseHjoSelecionado = event.target.firstChild.className ;
                // let btnSelecionado = event.target;
                // if (claseHjoSelecionado != 'flatFavorito') {
                //     btnSelecionado.firstChild.className  = 'flatFavorito';
                // }else {
                //     btnSelecionado.firstChild.className  = 'flatNoFavorito';
                // }

                let claseHjoSelecionado = event.target.className;
                let btnSelecionado = event.target;
                let variables = buttonId.split('&');
                if (claseHjoSelecionado !== 'flatFavorito') {
                    btnSelecionado.className = 'flatFavorito';
                    console.log(`${variables[0]} = ${variables[1]}`);
                    guardarFavoritos(variables[0], variables[1], userkeyurlParams, "save");
                    //  let favorito = true;
                } else if (claseHjoSelecionado !== 'flatNoFavorito') {
                    btnSelecionado.className = 'flatNoFavorito';
                    guardarFavoritos(variables[0], variables[1], userkeyurlParams, "delete");
                    //guardarFavoritos(variables[0],variables[1]);
                    //favorito = false;
                }
            }
        });
    });
})();
/*****************************************************************************************
 '                 FUNCTION GUARDAR FAVORITOS
 *****************************************************************************************/
function guardarFavoritos(dateRegisterKey, userkey, userkeyClick, accion) {

    if (localStorage.getItem(userkey) !== null) {

        //leer datos del usuario segun su userkay
        let readUser = localStorage.getItem(userkey);
        // console.log('getItem(userkey) ='+ readUser);

        // Convertir los datos a un objeto JavaScript
        let datos = JSON.parse(readUser);
        // console.log('parse(readUser) ='+ datos);

        if (datos.flats) {
            // Convertir los objetos dentro de 'flats' a una cadena JSON legible
            //let flatsContent = datos.flats.map(flat => JSON.stringify(flat));
            //console.log('flatsContent =' + flatsContent);

            let miFavorito = false;
            datos.flats.forEach((flat, index) => {
                if (flat.dateRegisterKey == dateRegisterKey) {
                    console.log(flat.favorite);
                    Arrfavoritos = flat.favorite;
                    flat.favorite.forEach((favoriteUsers, index) => {
                        if (favoriteUsers.favoriteUserkey === userkeyClick) {
                            //console.log('ya es mi favorito');
                            miFavorito = true;
                        }
                    });
                    console.log('miFavorito = ' + miFavorito);

                    if (miFavorito === false) {
                        console.log('miFavorito save');
                        let newUserkeyClick = {favoriteUserkey: userkeyClick};
                        Arrfavoritos.push(newUserkeyClick);
                        console.log(Arrfavoritos);
                        // Guardar los datos actualizados en localStorage
                        localStorage.setItem(userkey, JSON.stringify(datos));
                    } else if (miFavorito === true) {
                        console.log('miFavorito delete');
                        flat.favorite = Arrfavoritos.filter(item => item.favoriteUserkey !== userkeyClick);
                        console.log(Arrfavoritos);
                        // Guardar los datos actualizados en localStorage
                        localStorage.setItem(userkey, JSON.stringify(datos));
                    } else {
                        console.log("error");
                    }



                    // flat.forEach((favorite, index) => {
                    //     let objetData = {favoriteUserkey : userkeyClick};
                    //     Arrfavoritos.push(objetData);
                    //     console.log(Arrfavoritos);
                    // });
                }
            });
        }

        // // Agregar la propiedad "flats" al objeto "datos" si no existe
        // if (!datos.flats.favorite) {
        //     datos.flats.favorite = [];
        // }


        //console.log('graba', window.localStorage);
    } else {
        alert('ERROR GRABAR FAVORITOS');
    }
}