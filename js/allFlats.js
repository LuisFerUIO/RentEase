// Se dispara cuando haya cargado la pagina y verificar la sesión al cargar la página
window.onload = function () {
    sessionUser = verificarSesion();
    imprimirFlats(sessionUser);
    listCities();
    loadPriceRange();
    loadaAreaRange();
}
/*************************MOSTRAR TODOS *********************************************/
const elementFormShowAll = document.querySelector('form[name=showAll]');
elementFormShowAll.addEventListener('submit', showAll);

function showAll(event) {
    event.preventDefault()
    imprimirFlats(sessionUser);
}
/*****************************************************************************************
 '		RECUPERAR FLATS DE TODOS LOS USUARIOS
 *****************************************************************************************/

function imprimirFlats(sessionUser,) {
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

                // **Itera dentro de Favorite de cada flat buscando si el ID del usuario esta registrado devuelve true : false
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

                //data-id para ser usado en los filtros
                flatsBox += `<div class="flatsBox" data-id="${flat.dateRegisterKey}">`;
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
                flatsBox += `<li><span class="city" data-id="${flat.city}" >Ciudad:<span>${flat.city}</li>`;
                flatsBox += `<li><span class="rentPrice">Precio:<span>$${flat.rentPrice}</li>`;
                flatsBox += `<li><span class="areaSize">Metros2:<span>${flat.areaSize}</li>`;
                flatsBox += `</div>`;
                content += flatsBox;
            });


        } else {
            // Si no tiene la propiedad 'flats', agregar un mensaje indicando que no tiene 'flats'
            //content += `Usuario: ${key} - No tiene flats<br/><br/><br/>`;
        }
    }
    document.getElementById('flats').innerHTML = content;
}
/*****************************************************************************************
 '                  Button favoritos/corazon
 '                en cada clic se debe verificar antes de guardar o eliminar
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
                console.log('data-id:', buttonId);

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

                let claseHjoSelecionado = event.target.className;//clase CSS
                let btnSelecionado = event.target;
                let variables = buttonId.split('&'); //devuelve array
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

/*****************************************************************************************
 '                 FILTRAR POR CIUDAD
 *****************************************************************************************/
/********************* LISTA DE CIUDADES **********************************/
//imprime el listado de ciudades existentes en flats
var ArrAllCity = [];
var ArrListCity = []

function listCities() {
    //let readUser = localStorage.getItem(userkeyurlParams);
    let keys = Object.keys(localStorage);
    for (let key of keys) {
        let item = JSON.parse(localStorage.getItem(key));
        console.log(item)
        // Verificar si el objeto tiene una propiedad 'flats'
        if (item.flats) {
            item.flats.forEach((flat, index) => {
                let dataCity = flat.city;
                let dataDateRegisterKey = flat.dateRegisterKey;
                ArrAllCity.push({city: dataCity, dateRegisterKey: dataDateRegisterKey});
                ArrListCity.push(flat.city);
                console.log(ArrListCity);
            });


        }
    }
    ArrListCity.sort();
    ArrListCity = new Set(ArrListCity);
    console.log(ArrAllCity);
    let flatsBox = '';
    flatsBox += `<option value="">Selecciona una Ciudad</option>`;
    for (item of ArrListCity) {
        flatsBox += `<option value="${item}">${item}</option>`;
    }
    document.getElementById('filterCity').innerHTML = flatsBox;
}

/********************* DETECTA LA CIUDAD SELECCIONADA**********************************/
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        // Seleccionamos el contenedor de los botones
        const contenedorFlats = document.getElementById('filterCity');
        // Definimos el manejador de eventos para el contenedor
        contenedorFlats.addEventListener('change', function (event) {
            let selectedValue = event.target.value;
            let cities = citiesSelect(selectedValue);
            console.log(cities)
            hideDiv(cities);
        });
    });
})();

/********************* FILTRA CITY  Y DEVUELVE ARRAY  CON ID DEL FLAT y NOMBRE SELECCIONADA**********************************/
function citiesSelect(selectedValue) {
    let dataFilter = ArrAllCity.filter(function (citiesObjet) {
        return citiesObjet.city === selectedValue;
    });
    dataFilterOrdered = dataFilter.sort(function (a, b) {
        if (a[city] < b[city]) {
            return -1;
        }
        if (a[property] > b[property]) {
            return 1;
        }
        return 0;
    });
    console.log(dataFilterOrdered);
    return dataFilterOrdered;

}
/********************* OCULTA DIVS CON ID QUE NO SON PARTE DE LA SELECCION**********************************/
function hideDiv(citiesSelect) {
    console.log(typeof citiesSelect);
    citiesSelect = citiesSelect.map(id => id.dateRegisterKey);
    console.log(citiesSelect);

    if (citiesSelect.length != 0) {

    let divContent = document.getElementById('flats');
    const divsFlats = divContent.querySelectorAll("div");

    let divsFlatsBox;

    for (divsFlatsBox of divsFlats) {
        if (divsFlatsBox.getAttribute('data-id')) {
            const dataId = divsFlatsBox.getAttribute('data-id');

            // si no encuentra devuelve true y hace que si esta en el array de  false
            let hide = !citiesSelect.includes(dataId);
            console.log(hide);

            let fatherDIV = divsFlatsBox.parentNode;

            if (citiesSelect.length === 0) {
                // divsFlatsBox.classList.add('show');
                // divsFlatsBox.classList.remove('hide');
                // setTimeout(() => {
                //     divsFlatsBox.classList.add('showEnd');
                //     divsFlatsBox.classList.remove('hideEnd');
                // }, 500)
                // fatherDIV.appendChild(removeChild);
                //divsFlatsBox.style.display = 'block';
                divsFlatsBox.style.display = 'block';
            } else {

                if (hide) {
                    // divsFlatsBox.classList.add('hide');
                    // divsFlatsBox.classList.remove('show');
                    //
                    // setTimeout(() => {
                    //     divsFlatsBox.classList.add('hideEnd');
                    //     divsFlatsBox.classList.remove('showEnd');
                    // }, 500)

                    //const removeChild = fatherDIV.removeChild(divsFlatsBox);
                    divsFlatsBox.style.display = 'none';
                } else {
                    // divsFlatsBox.classList.add('show');
                    // divsFlatsBox.classList.remove('hide');
                    // setTimeout(() => {
                    //     divsFlatsBox.classList.add('showEnd');
                    //     divsFlatsBox.classList.remove('hideEnd');
                    // }, 500)

                    //fatherDIV.appendChild(removeChild);
                    divsFlatsBox.style.display = 'block';
                }
            }
        }
    }
    } else {
        console.log("citiesSelect error");
    }
}

/*****************************************************************************************
 '                 FILTRO POR RANGO DE PRECIO
 *****************************************************************************************/
var ArrAllPrice = [];
var ArrListPrice = [];

function loadPriceRange() {
    let keys = Object.keys(localStorage);
    for (let key of keys) {
        let item = JSON.parse(localStorage.getItem(key));
        console.log(item)
        // Verificar si el objeto tiene una propiedad 'flats'
        if (item.flats) {
            item.flats.forEach((flat, index) => {
                let dataRentPrice = flat.rentPrice;
                let dataDateRegisterKey = flat.dateRegisterKey;
                ArrAllPrice.push({rentPrice: dataRentPrice, dateRegisterKey: dataDateRegisterKey});
                ArrListPrice.push(flat.rentPrice);
                //console.log(ArrAllPrice);
                //console.log(ArrListPrice);
            });
        }
    }
    document.querySelector('input[name="filerPriceMin"]').placeholder = Math.min(...ArrListPrice);
    document.querySelector('input[name="filerPriceMax"]').placeholder = Math.max(...ArrListPrice);
}

/*****************************FILTRO  PRECIO*****************************************************/
const elementFormRegisterFilerPrice = document.querySelector('form[name=filerPrice]');
elementFormRegisterFilerPrice.addEventListener('submit', filerPrice);

function filerPrice(event) {
    event.preventDefault()

    let min = document.querySelector('input[name="filerPriceMin"]').value;
    let max = document.querySelector('input[name="filerPriceMax"]').value;
    // Filtrar los valores dentro del rango usando una función regular
    let Arrfilter = ArrAllPrice.filter(function (objetRentPrice) {
        //return !(price >= min && price <= max);
        if (objetRentPrice.rentPrice >= min && objetRentPrice.rentPrice <= max) {
            return true;
        } else {
            return false;
        }
    });
    console.log("Arrfilter" + Arrfilter);
    document.querySelector('form[name="filerArea"]').reset();
    hideDiv(Arrfilter);

}

/*****************************************************************************************
 '                 FILTRO POR RANGO DE AREA
 *****************************************************************************************/
var ArrAllArea = [];
var ArrListArea = [];

function loadaAreaRange() {

    let keys = Object.keys(localStorage);
    for (let key of keys) {
        let item = JSON.parse(localStorage.getItem(key));
        console.log(item)
        // Verificar si el objeto tiene una propiedad 'flats'
        if (item.flats) {
            item.flats.forEach((flat, index) => {
                let dataAreaSize = flat.areaSize;
                let dataDateRegisterKey = flat.dateRegisterKey;
                ArrAllArea.push({areaSize: dataAreaSize, dateRegisterKey: dataDateRegisterKey});
                ArrListArea.push(flat.areaSize);
                console.log(ArrAllArea);
                console.log(ArrListArea);
            });
        }
    }
    document.querySelector('input[name="filterAreaMin"]').placeholder = Math.min(...ArrListArea);
    document.querySelector('input[name="filterAreaMax"]').placeholder = Math.max(...ArrListArea);
}

/*****************************FILTRO  AREA*****************************************************/
const elementFormFilerArea = document.querySelector('form[name=filerArea]');
elementFormFilerArea.addEventListener('submit', filerArea);

function filerArea(event) {
    event.preventDefault()
    let min = document.querySelector('input[name="filterAreaMin"]').value;
    let max = document.querySelector('input[name="filterAreaMax"]').value;
    // Filtrar los valores dentro del rango usando una función regular
    let ArrfilterArea = ArrAllArea.filter(function (objetAreaSize) {
        //return !(price >= min && price <= max);
        if (objetAreaSize.areaSize >= min && objetAreaSize.areaSize <= max) {
            return true;
        } else {
            return false;
        }
    });
    console.log("ArrfilterArea" + ArrfilterArea);
    document.querySelector('form[name="filerPrice"]').reset();
    hideDiv(ArrfilterArea);
}
