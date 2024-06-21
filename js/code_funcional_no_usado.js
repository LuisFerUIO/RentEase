/*****************************************************************************************
 '                 FUNCTION VERIFICAR SI UN USUARIO TIENE FAVORITOS
 *****************************************************************************************/
//Necesita el ID/userkey del usuario y el ID/dateRegisterKey del flat
function verificarFavorito(userkey, dateRegisterKey) {

    //Si el email/userkey no existe me despliega error en la consola
    if (localStorage.getItem(userkey) !== null) {

        //leer datos del usuario segun su userkay
        let readUser = localStorage.getItem(userkey);

        // Convertir los datos a un objeto JavaScript
        let datos = JSON.parse(readUser);

        //Si tiene flats continua
        if (datos.flats) {

            // Convertir los objetos dentro de 'flats' a una cadena JSON legible
            //let flatsContent = datos.flats.map(flat => JSON.stringify(flat));

            // Inicializó como que no tiene flats asignados
            let miFavorito = false;

            // Hago una iteración  dentro de flats
            //datos.flats.forEach((flat, index) => {
            for (let flat of datos.flats) {
                //Si existe el id del flat continuo
                if (flat.dateRegisterKey === dateRegisterKey) {
                    console.log(flat.favorite);
                    //hago una iteración dentro de los favoritos que está dentro de flats
                    //flat.favorite.forEach((favoriteUsers, index) => { (*_*)(*_*)(*_*)
                    for (let favoriteUser of flat.favorite) {
                        // Si existe un registro que coincide con el ID del usuario continuo
                        if (favoriteUser.favoriteUserkey === userkey) {
                            //console.log('ya es mi favorito');
                            miFavorito = true;
                            break;
                        }
                        // console.log('miFavorito = ' + miFavorito);
                    }
                    if (miFavorito) {
                        //Devuelvo si el usuario tiene o no un favorito
                        break;
                    }
                }

            }
            return miFavorito;
        }
    } else {
        alert('ERROR EL USUARIO NO EXISTE EN LOCALSTORE');
    }
}

/*****************************************************************************************
 '               CERRAR SESION CON VARIABLES GLOBALES
 *****************************************************************************************/
document.addEventListener('DOMContentLoaded', function () {
// Seleccionamos el contenedor de los botones
    const logOut = document.getElementById('logOut');

// Definimos el manejador de eventos para el contenedor
    logOut.addEventListener('click', function (event) {
        var userkeyurlParams = null;
        var firstNameParams = null;
        delete window.userkeyurlParams;
        delete window.firstNameParams;
        console.log("logOut");
    });
});
/*****************************************************************************************
 '		RECUPERO EL USERKAY POR LA URL
 //  *****************************************************************************************/

//Variables globales
var userkeyurlParams;
var firstNameParams;

(function () {
// Obtener la URL actual
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams != undefined) {
// Obtener el valor del parámetro userkey
        var userkeyurlParams = urlParams.get('userkey');
        var firstNameParams = urlParams.get('firstName');
//imprimo en pantalla
        document.getElementById('nameUser').innerHTML = firstNameParams;
        document.getElementById('userKey').innerHTML = userkeyurlParams;
    } else {
        let h1 = document.createElement('h1');
        h1.textContent = "SIN DATOS DEL USUARIO"
        document.querySelector(body).appendChild(h1);
    }
})();

/********************* FILTRA Y DEVUELVE ARRAY  CON ID CIUDADES SELECCIONADA**********************************/
function citiesSelect(selectedValue) {
    let dataFilter = ArrAllCity.filter(function (ArrAllCity) {
            return ArrAllCity.city === selectedValue;
        }
    );
    console.log(dataFilter);
}

/*****************************************************************************************
 '		DATOS DE EJEMPLO LOCAL STORE NO-RELACIONAL
 '.........................................................................................
 '  Se agrega un suario con sus dos propiedades
 '  Estos datos se cargan al entrar en la pagina index por primera vez
 '
 ' pront para 20 ejemplos
 ' usando el codigo a continuacion dame 20 objectData adicionales el pasword que sea el mismo. los emails que sean inventados con maximo 4 caracteres en nombre y dominio.
 ' FirsteName y Lasteme invetados de igual manera el resto de propiedasdes. Las provincias si deben ser de Ecuador y la ciudad que corresponda a la provinvia.
 ' Quiero que me des el texto listo para copiar no un script para generar.
 *****************************************************************************************/
/*****************************************************************************************
 '              boton carga de datos en  local store
 '.........................................................................................
 'Descripcion:
 '		Necesario para pruebas
 '.........................................................................................
 'Parametros:
 '		nunguno
 *****************************************************************************************/
document.getElementById('cargarDatosLocalStorageNoRelacional').addEventListener('click', cargarDatosLocalStorageNoRelacional);

function cargarDatosLocalStorageNoRelacional() {

// const firstName = objetData.firstName;
// console.log('userkey = ' + userkey + ' firstName = ' + firstName);

// elimino del objeto porque lo usare de key asi no puede haber dos iguales
// delete objetData.userkey;

// este campo es solo para la validacion se debe borrar
//delete objetData.passwordConfirmation;

//console.log(objetData);

    if (localStorage.length === 0) {

        console.log('localStorage está vacío procedo a grabar NoRelacional');

        // Función para guardar datos en localStorage
        function saveToLocalStorage(key, data) {
            localStorage.setItem(key, JSON.stringify(data));
        }

        // Función para leer datos de localStorage
        function loadFromLocalStorage(key) {
            return JSON.parse(localStorage.getItem(key)) || {};
        }


        // 1. Tabla de Usuarios
        const users = {
            "luis@1234.com": {
                "firstName": "Luis",
                "lastName": "Suarez",
                "birthDate": "1984-12-25",
                "password": "1234"
            },
            "diana@1234.com": {
                "firstName": "Diana",
                "lastName": "Siguenza",
                "birthDate": "2004-12-25",
                "password": "1234"
            }
        };


// 2. Tabla de Propiedades
        const properties = {
            "prop1": {
                "owner": "luis@1234.com",
                "province": "MANABI",
                "city": "MANTA",
                "streetName": "Nicolas",
                "streetNumber": "195",
                "areaSize": "100",
                "hasAc": "SI",
                "yearBuilt": "2024",
                "rentPrice": "1500",
                "dateAvailable": "2024-05-01",
                "image": "images/flats/picture_0001.png"
            },
            "prop2": {
                "owner": "luis@1234.com",
                "province": "PICHINCHA",
                "city": "QUITO",
                "streetName": "Burgeus",
                "streetNumber": "195",
                "areaSize": "500",
                "hasAc": "NO",
                "yearBuilt": "1980",
                "rentPrice": "300",
                "dateAvailable": "2024-05-01",
                "image": "images/flats/picture_0002.png"
            },
            "prop3": {
                "owner": "diana@1234.com",
                "province": "PICHINCHA",
                "city": "QUITO",
                "streetName": "Nicolas",
                "streetNumber": "195",
                "areaSize": "100",
                "hasAc": "NO",
                "yearBuilt": "2000",
                "rentPrice": "500",
                "dateAvailable": "2024-05-01",
                "image": "images/flats/picture_01.png"
            },
            "prop4": {
                "owner": "diana@1234.com",
                "province": "AZUAY",
                "city": "CUENCA",
                "streetName": "Quito",
                "streetNumber": "195",
                "areaSize": "100",
                "hasAc": "NO",
                "yearBuilt": "1990",
                "rentPrice": "400",
                "dateAvailable": "2024-05-01",
                "image": "images/flats/picture_01.png"
            }
        };

// 3. Tabla de Favoritos
        const favorites = [
            {"user": "luis@1234.com", "propertyId": "prop1"},
            {"user": "luis@1234.com", "propertyId": "prop2"},
            {"user": "luis@1234.com", "propertyId": "prop3"},
            {"user": "luis@1234.com", "propertyId": "prop4"},
            {"user": "diana@1234.com", "propertyId": "prop2"}
        ];

        // Guardar las tablas en localStorage
        saveToLocalStorage('users', users);
        saveToLocalStorage('properties', properties);
        saveToLocalStorage('favorites', favorites);

    } else {
        console.log('localStorage tiene elementos almacenados -- No Relacional --');
    }

}