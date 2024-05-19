/*****************************************************************************************
City String
Street name String
Street number Number
Area size Number
Has AC Boolean
Year built Number
Rent price Number
Date available Date
 *****************************************************************************************/

/*****************************************************************************************
 'Descripcion:
 '		Borra el contenido de localStorage
 '		Necesario porque en el servidor de pruebas tenia datos de formularios anteriores
 '.........................................................................................
 'Parametros:
 '		nunguno
 *****************************************************************************************/
document.getElementById('limpiarFormLocalStorage').addEventListener('click', function () {
        localStorage.clear();
        console.log('localStorage borrado.');
    }
);


/*****************************************************************************************
 'GENERADOR DE CANTONES
 '.........................................................................................
 'Fecha : Mayo 19/05/2004
 '.........................................................................................
 'Descripcion:
 '		Genera el select con los cantones segun corresponda
 '
 '.........................................................................................
 'Parametros:
 '		- str : provincia
 *****************************************************************************************/
class cantones {
    constructor() {
    }

    generarSelect(selectedOption) {

        const provincia = selectProvince.value;
        console.log('var provincia=' + provincia);

        let AZUAY = ['CAMILO PONCE', 'CHORDELEG', 'CUENCA', 'EL PAN', 'GIRON', 'GUACHAPALA', 'GUALACEO', 'NABON', 'O&Ntilde;A.', 'PAUTE', 'PUCARA', 'SAN FERNANDO', 'SANTA ISABEL', 'SEVILLA DE ORO', 'SIGSIG'];
        let BOLIVAR = ['CALUMA', 'CHILLANES', 'CHIMBO', 'ECHEANDIA', 'GUARANDA', 'LAS NAVES', 'SAN MIGUEL'];
        let CANAR = ['AZOGUES', 'BIBLIAN', 'CA&Ntilde;AR.', 'DELEG', 'LA TRONCAL', 'SUSCAL', 'TAMBO'];
        let CARCHI = ['BOLIVAR', 'ESPEJO', 'MIRA', 'MONTUFAR', 'SAN PEDRO DE HUACA', 'TULCAN'];
        let CHIMBORAZO = ['ALAUSI', 'CHAMBO', 'CHUNCHI', 'COLTA', 'CUMANDA', 'GUAMOTE', 'GUANO', 'PALLATANGA', 'PENIPE', 'RIOBAMBA'];
        let COTOPAXI = ['LA MANA', 'LATACUNGA', 'PANGUA', 'PUJILI', 'SALCEDO', 'SAQUISILI', 'SIGCHOS'];
        let EL_ORO = ['ARENILLAS', 'ATAHUALPA', 'BALSAS', 'CHILLA', 'EL GUABO', 'HUAQUILLAS', 'LAS LAJAS', 'MACHALA', 'MARCABELI', 'PASAJE', 'PINAS', 'PORTOVELO', 'SANTA ROSA', 'ZARUMA'];
        let ESMERALDAS = ['ATACAMES', 'ELOY ALFARO', 'ESMERALDAS', 'MUISNE', 'QUININDE', 'RIO VERDE', 'SAN LORENZO'];
        let GALAPAGOS = ['ISABELA', 'SAN CRISTOBAL', 'SANTA CRUZ'];
        let GUAYAS = ['ALFREDO BAQUERIZO MORENO (JUJAN]', 'BALAO', 'BALZAR', 'COLIMES', 'DAULE', 'DURAN', 'EL TRIUNFO', 'EMPALME', 'GENERAL ANTONIO ELIZALDE (BUCAY]', 'GENERAL VILLAMIL (PLAYAS]', 'GUAYAQUIL', 'ISIDRO AYORA', 'LOMAS DE SARGENTILLO', 'MARCELINO MARIDUENA', 'MILAGRO', 'NARANJAL', 'NARANJITO', 'NOBOL (NARCISA DE JESUS]', 'PALESTINA', 'PEDRO CARBO', 'SAMBORONDON', 'SANTA LUCIA', 'SIMON BOLIVAR', 'URBINA JADO (SALITRE]', 'YAGUACHI'];
        let IMBABURA = ['ATUNTAQUI (ANTONIO ANTE]', 'COTACACHI', 'IBARRA', 'OTAVALO', 'PIMAMPIRO', 'URCUQUI'];
        let LOJA = ['CALVAS(CARIAMANGA]', 'CATAMAYO', 'CELICA', 'CHAGUARPAMBA', 'ESPINDOLA', 'GONZANAMA', 'LOJA', 'MACARA', 'OLMEDO', 'PALTAS (CATACOCHA]', 'PINDAL', 'PUYANGO(ALAMOR]', 'QUILANGA', 'SARAGURO', 'SOZORANGA', 'ZAPOTILLO'];
        let LOS_RIOS = ['BABA', 'BABAHOYO', 'BUENA FE', 'MOCACHE', 'MONTALVO', 'PALENQUE', 'PUEBLO VIEJO', 'QUEVEDO', 'URDANETA', 'VALENCIA', 'VENTANAS', 'VINCES'];
        let MANABI = ['24 DE MAYO', 'BOLIVAR', 'CHONE', 'EL CARMEN', 'FLAVIO ALFARO', 'JAMA', 'JARAMIJO', 'JIPIJAPA', 'JUNIN', 'MANTA', 'MONTECRISTI', 'OLMEDO', 'PAJAN', 'PEDERNALES', 'PICHINCHA', 'PORTOVIEJO', 'PUERTO LOPEZ', 'ROCAFUERTE', 'SAN VICENTE', 'SANTA ANA', 'SUCRE', 'TOSAGUA'];
        let MORONA_SANTIAGO = ['GUALAQUIZA', 'HUAMBOYA', 'LIMON-INDANZA', 'LOGRO&Ntilde;O.', 'MORONA', 'PABLO VI', 'PALORA', 'SAN JUAN BOSCO', 'SANTIAGO', 'SUCUA', 'TAISHA', 'TWINTZA'];
        let NAPO = ['AGUARICO', 'ARCHIDONA', 'CARLOS J. AROSEMENA', 'EL CHACO', 'LA JOYA DE LOS SACHAS', 'LORETO', 'ORELLANA', 'QUIJOS', 'TENA'];
        let ORELLANA = ['AGUARICO', 'LA JOYA DE LOS SACHAS', 'LORETO', 'ORELLANA'];
        let PASTAZA = ['ARAJUNO', 'MERA', 'PASTAZA', 'SANTA CLARA'];
        let PICHINCHA = ['CAYAMBE', 'MEJIA', 'PEDRO MONCAYO', 'PEDRO VICENTE MALDONADO', 'PUERTO QUITO', 'QUITO', 'RUMI&Ntilde;AHUI.', 'SAN MIGUEL DE LOS BANCOS'];
        let SANTA_ELENA = ['LA LIBERTAD', 'SALINAS', 'SANTA ELENA'];
        let SANTO_DOMINGO_DE_LOS_TSACHILAS = ['SANTO DOMINGO DE LOS TSACHILAS'];
        let SUCUMBIOS = ['CASCALES', 'CUYABENO', 'GONZALO PIZARRO', 'LAGO AGRIO', 'PUTUMAYO', 'SHUSHUFINDI', 'SUCUMBIOS'];
        let TUNGURAHUA = ['AMBATO', 'BA&Ntilde;OS DE AGUA SANTA.', 'CEVALLOS', 'MOCHA', 'PATATE', 'QUERO', 'SAN PEDRO DE PELILEO', 'SANTIAGO DE PILLARO', 'TISALEO'];
        let ZAMORA_CHINCHIPE = ['CENTINELA DEL CONDOR', 'CHINCHIPE', 'EL PANGUI', 'NANGARITZA', 'PALANDA', 'PAQUISHA', 'YACUAMBI', 'YANTZAZA', 'ZAMORA', 'ZAMORA CHINCHIPE'];
        let result = eval(provincia);
        let cadena = '';
        let i;
        switch (provincia) {
            case 'AZUAY':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + AZUAY[i] + "\">" + AZUAY[i] + "</option>";
                }
                break
            case 'BOLIVAR':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + BOLIVAR[i] + "\">" + BOLIVAR[i] + "</option>";
                }
                break
            case 'CANAR':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + CANAR[i] + "\">" + CANAR[i] + "</option>";
                }
                break

            case 'CARCHI':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + CARCHI[i] + "\">" + CARCHI[i] + "</option>";
                }
                break

            case 'CHIMBORAZO':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + CHIMBORAZO[i] + "\">" + CHIMBORAZO[i] + "</option>";
                }
                break

            case 'COTOPAXI':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + COTOPAXI[i] + "\">" + COTOPAXI[i] + "</option>";
                }
                break

            case 'EL_ORO':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + EL_ORO[i] + "\">" + EL_ORO[i] + "</option>";
                }
                break

            case 'ESMERALDAS':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + ESMERALDAS[i] + "\">" + ESMERALDAS[i] + "</option>";
                }
                break
            case 'GALAPAGOS':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + GALAPAGOS[i] + "\">" + GALAPAGOS[i] + "</option>";
                }
                break

            case 'GUAYAS':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + GUAYAS[i] + "\">" + GUAYAS[i] + "</option>";
                }
                break

            case 'IMBABURA':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + IMBABURA[i] + "\">" + IMBABURA[i] + "</option>";
                }
                break
            case 'LOJA':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + LOJA[i] + "\">" + LOJA[i] + "</option>";
                }
                break
            case 'LOS_RIOS':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + LOS_RIOS[i] + "\">" + LOS_RIOS[i] + "</option>";
                }
                break
            case 'MANABI':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + MANABI[i] + "\">" + MANABI[i] + "</option>";
                }
                break
            case 'MORONA_SANTIAGO':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + MORONA_SANTIAGO[i] + "\">" + MORONA_SANTIAGO[i] + "</option>";
                }
                break
            case 'NAPO':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + NAPO[i] + "\">" + NAPO[i] + "</option>";
                }
                break
            case 'ORELLANA':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + ORELLANA[i] + "\">" + ORELLANA[i] + "</option>";
                }
                break
            case 'PASTAZA':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + PASTAZA[i] + "\">" + PASTAZA[i] + "</option>";
                }
                break
            case 'PICHINCHA':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + PICHINCHA[i] + "\">" + PICHINCHA[i] + "</option>";
                }
                break
            case 'SANTA_ELENA':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + SANTA_ELENA[i] + "\">" + SANTA_ELENA[i] + "</option>";
                }
                break
            case 'SANTO_DOMINGO_DE_LOS_TSACHILAS':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + SANTO_DOMINGO_DE_LOS_TSACHILAS[i] + "\">" + SANTO_DOMINGO_DE_LOS_TSACHILAS[i] + "</option>";
                }
                break
            case 'SUCUMBIOS':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + SUCUMBIOS[i] + "\">" + SUCUMBIOS[i] + "</option>";
                }
                break
            case 'TUNGURAHUA':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + TUNGURAHUA[i] + "\">" + TUNGURAHUA[i] + "</option>";
                }
                break
            case 'ZAMORA_CHINCHIPE':
                for (i = 0; i < result.length; i++) {
                    cadena += "<option value=\"" + ZAMORA_CHINCHIPE[i] + "\">" + ZAMORA_CHINCHIPE[i] + "</option>";
                }
                break
        }

        let mensaje = "<option value=\"\">Seleciona un cant\xF3n</option>";
        //document.getElementById('city').innerHTML = "<select name=\"canton_residencia\" >" + mensaje + cadena + "</select>";
        return document.getElementById('city').innerHTML = mensaje + cadena;


    }
}

/*****************************************************************************************
 '                  imprimir cantones/ciudades
 *****************************************************************************************/
const canton = new cantones();

// Obtener el elemento input
const selectProvince = document.getElementById('province');

// Asociar el manejador de eventos con el evento keypress del input
selectProvince.addEventListener('change', function (event) {

    const selectedOption = selectProvince.options[selectProvince.selectedIndex].text;
    canton.generarSelect(selectedOption);
    event.preventDefault();
});

// /*****************************************************************************************
//  '.........................................................................................
//  'Descripcion:
//  '		Verifica que una cadena contenga \xFAnicamente caracteres num�ricos.
//  '		Retorna "true" \xF3 "false" seg\xFAn sea el caso
//  '.........................................................................................
//  'Parametros:
//  '		- str : Cadena que se quiere evaluar
//  '.........................................................................................
//  'Validaciones:
//  '		- Ninguno de los caracteres que componen la cadena debe ser diferente de los
//  '		  caracteres de la lista "0123456789"
//  *****************************************************************************************/
// class validaciones {
//     constructor() {
//     }
//
//     camposNumeros(elEvento, permitidos, mitexto) {
//         //function permite(elEvento, permitidos, mitexto) {
//         // Variables que definen los caracteres permitidos
//         var numeros = "0123456789";
//         var caracteres = "\xA0\xAD\xE1\xE9\xED\xF3\xFA\xD1\xF1abcdefghijklmn�opqrstuvwxyz\xC1\xC9\xCD\xD3\xDAABCDEFGHIJKLMN�OPQRSTUVWXYZ";
//         var numeros_caracteres = numeros + caracteres;
//         var teclas_especiales = [37, 39, 46, 8, 32, 9];
//         //  var teclas_especiales = [8, 37, 39, 46];
//         // 8 = BackSpace, 46 = Supr, 37 = flecha izquierda, 39 = flecha derecha
//         // Seleccionar los caracteres a partir del par�metro de la funci�n
//         switch (permitidos) {
//             case 'num':
//                 permitidos = numeros;
//                 break;
//             case 'car':
//                 permitidos = caracteres;
//                 break;
//             case 'num_car':
//                 permitidos = numeros_caracteres;
//                 break;
//         }
//
//         // Obtener la tecla pulsada
//         //var evento = elEvento || window.event;
//
//         var codigoCaracter = elEvento.charCode || elEvento.keyCode;
//         var caracter = String.fromCharCode(codigoCaracter);
//         console.log(caracter);
//
//         // Comprobar si la tecla pulsada es alguna de las teclas especiales
//         // (teclas de borrado y flechas horizontales)
//         var tecla_especial = false;
//         for (var i in teclas_especiales) {
//             if (codigoCaracter == teclas_especiales[i]) {
//                 tecla_especial = true;
//                 break;
//             }
//         }
//
//         var texto = mitexto.value;
//         var cont = 0;
//         var textF = "";
//         var espacio = false;
//
//         while (cont < mitexto.value.length) {
//
//             if (cont == 0 | mitexto.value.charAt(cont - 1) == " ")
//                 textF += mitexto.value.charAt(cont).toUpperCase();
//             else
//                 textF += mitexto.value.charAt(cont).toLowerCase();
//             cont++;
//         }
//         mitexto.value = textF;
//         // Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
//         // o si es una tecla especial
//         return permitidos.indexOf(caracter) != -1 || tecla_especial;
//         //var resultado = permitidos.indexOf(caracter) != -1 || tecla_especial
//         // console.log('************************ '+resultado);
//     }
// }

/*****************************************************************************************
 '                  INPUT streetName
 *****************************************************************************************/
//intancio la class permitidos
const validarStreetName = new classValidaciones();

// Obtener el elemento input
const inputStreetName = document.getElementById('streetName');

// Asociar el manejador de eventos con el evento keypress del input
inputStreetName.addEventListener('keypress', function (event) {
    let permitidos = 'num_car';
    let mitexto = inputStreetName;

    // Llama al método de validación y previene el comportamiento por defecto si la tecla no es permitida
    if (!validarStreetName.camposNumeros(event, permitidos, mitexto)) {
        event.preventDefault();
    }

});
/*****************************************************************************************
 '                  INPUT AreaSize
 *****************************************************************************************/
//intancio la class permitidos
const validarAreaSize = new classValidaciones();

// Obtener el elemento input
const inputAreaSize = document.getElementById('areaSize');

// Asociar el manejador de eventos con el evento keypress del input
inputAreaSize.addEventListener('keypress', function (event) {
    let permitidos = 'num';
    let mitexto = inputAreaSize;

    // Llama al método de validación y previene el comportamiento por defecto si la tecla no es permitida
    if (!validarAreaSize.camposNumeros(event, permitidos, mitexto)) {
        event.preventDefault();
    }

});
/*****************************************************************************************
 '                  INPUT StreetNumber
 *****************************************************************************************/
//intancio la class permitidos
const validarStreetNumber = new classValidaciones();

// Obtener el elemento input
const inputStreetNumber = document.getElementById('streetNumber');

// Asociar el manejador de eventos con el evento keypress del input
inputStreetNumber.addEventListener('keypress', function (event) {
    let permitidos = 'num';
    let mitexto = inputStreetNumber;

    // Llama al método de validación y previene el comportamiento por defecto si la tecla no es permitida
    if (!validarStreetNumber.camposNumeros(event, permitidos, mitexto)) {
        event.preventDefault();
    }
});
/*****************************************************************************************
 '                  INPUT YearBuilt
 *****************************************************************************************/
//intancio la class permitidos
const validarYearBuilt = new classValidaciones();

// Obtener el elemento input
const inputYearBuilt = document.getElementById('yearBuilt');

// Asociar el manejador de eventos con el evento keypress del input
inputYearBuilt.addEventListener('keypress', function (event) {
    let permitidos = 'num';
    let mitexto = inputYearBuilt;

    // Llama al método de validación y previene el comportamiento por defecto si la tecla no es permitida
    if (!validarYearBuilt.camposNumeros(event, permitidos, mitexto)) {
        event.preventDefault();
    }
});
/*****************************************************************************************
 '                  INPUT rentPrice
 *****************************************************************************************/
//intancio la class permitidos
const validarRentPrice = new classValidaciones();

// Obtener el elemento input
const inputRentPrice = document.getElementById('rentPrice');

// Asociar el manejador de eventos con el evento keypress del input
inputRentPrice.addEventListener('keypress', function (event) {
    let permitidos = 'num';
    let mitexto = inputRentPrice;

    // Llama al método de validación y previene el comportamiento por defecto si la tecla no es permitida
    if (!validarRentPrice.camposNumeros(event, permitidos, mitexto)) {
        event.preventDefault();
    }
});
/*****************************************************************************************
 '
 *****************************************************************************************/
// const elementFormNewFlat = document.querySelector('form');
// //Compruebo que exista un formulario
// if (elementFormNewFlat) {
//     elementFormNewFlat.addEventListener('submit', getDataForm);
// } else {
//     console.log('Formulario no encontrado');
//     }
//
// function getDataForm(event) {
//
//     //evita que la pagina se recargue
//     event.preventDefault();
//
//     console.log('formulario completo', elementFormNewFlat);
//
//     const formData = new FormData(elementFormNewFlat);
//     console.log('Está pensado principalmente para enviar datos de formularios', formData);
//
//     const data = Object.fromEntries(formData);
//     console.log('transforma una lista de pares con [clave-valor]********', data);
//
//     console.log('grabar estos datos' + JSON.stringify(data));
//     const userRegister = JSON.stringify(data);
//
//     localStorage.setItem('user', userRegister);
//     console.log(window.localStorage);
//     }
// });


// class flat {
//         constructor(city, streetName, streetNumber, areaSize, hasAc, yearBuilt, rentPrice, dateAvailable) {
//             this.city = city;
//             this.streetName = streetName;
//             this.streetNumber = streetNumber;
//             this.areaSize = areaSize;
//             this.hasAc = hasAc;
//             this.yearBuilt = yearBuilt;
//             this.rentPrice = rentPrice;
//             this.dateAvailable = dateAvailable;
//         }
//
//         validacionSqlInyectionFlat() {
//         }
//
//         saveFlat() {
//             var User = JSON.parse(localStorage.getItem('flat'));
//             users.push(user);
//             localStorage.setItem('users', JSON.stringify(users));
//         }


