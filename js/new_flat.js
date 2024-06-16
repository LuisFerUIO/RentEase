// /*****************************************************************************************
//  '		RECUPERO EL USERKAY POR LA URL
//  *****************************************************************************************/
// // Obtener la URL actual
// const urlParams = new URLSearchParams(window.location.search);
//
// // Obtener el valor del parámetro userkey
// const userkey = urlParams.get('userkey');
// document.getElementById('userkey').value = userkey;
// const firstName = urlParams.get('firstName');
// document.getElementById('mensaje').innerHTML = 'bienvenido ' + firstName;

// Se dispara cuando haya cargado la pagina y verificar la sesión al cargar la página
window.onload = function () {
    let sessionUser = verificarSesion();
    userkey = sessionUser.userkey;
    firstNameParams = sessionUser.firstName;
    document.getElementById('userkey').value = userkey;
}
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
 '                 FUNCTION GUARDAR FLAT
 *****************************************************************************************/

// Obtener el formulario
const elementFlatRegister = document.querySelector('form[name=formFlatRegister]');
//detecto la accion en el boton y ejecuto la funcion
elementFlatRegister.addEventListener('submit', getDataForm);

//funcion
function getDataForm(event) {
    event.preventDefault()

    console.log('formulario completo', elementFlatRegister);

    const formData = new FormData(elementFlatRegister);
    //console.log('Está pensado principalmente para enviar datos de formularios', formData);

    const objetData = Object.fromEntries(formData);
    console.log('transforma una lista de pares con [clave-valor]', objetData);

    //elimino lo que no necisito
    delete objetData.userkey;

//asignar la fecha y hora de registro

// creo una key por medio de la fecha,hora,min,seg del sistema
    function obtenerFechaHoraActual() {
        const ahora = new Date();

        const año = ahora.getFullYear();
        const mes = String(ahora.getMonth() + 1).padStart(2, '0'); // Los meses son 0-indexados
        const dia = String(ahora.getDate()).padStart(2, '0');

        const horas = String(ahora.getHours()).padStart(2, '0');
        const minutos = String(ahora.getMinutes()).padStart(2, '0');
        const segundos = String(ahora.getSeconds()).padStart(2, '0');

        const fechaHora = `${año}${mes}${dia}${horas}${minutos}${segundos}`;
        return fechaHora;
    }

    let dateNow = obtenerFechaHoraActual()
    //guardo el valor generado
    //objetData[dateRegisterKey] = dateNow;
    objetData.dateRegisterKey = dateNow;

    //asigno el valor del campo oculto userkey
    let userkey = document.getElementById('userkey').value;
    console.log('userkey campo oculto = ' + userkey);

    if (localStorage.getItem(userkey) !== null) {

        //leer datos del usuario segun su userkay
        let readUser = localStorage.getItem(userkey)
        console.log(readUser);

        // Convertir los datos a un objeto JavaScript
        let datos = JSON.parse(readUser);

        // Agregar la propiedad "flats" al objeto "datos" si no existe
        if (!datos.flats) {
            datos.flats = [];
        }

        //const flatRegister = JSON.stringify(objetData);
        //console.log('grabar estos datos' , userRegister);
        // let flat1 = {
        //     calle: 'alonso',
        // }
        // flat = JSON.parse(flat1);
        //datos.flats.push(flat1);

        //flat = JSON.parse(objetData);
        datos.flats.push(objetData);

        // Guardar los datos actualizados en localStorage
        localStorage.setItem(userkey, JSON.stringify(datos));
        console.log('graba', window.localStorage);

        document.location.href = 'home.html?userkey=' + userkey + '&firstName=' + firstName;
    } else {
        alert('ERROR!');
    }
}