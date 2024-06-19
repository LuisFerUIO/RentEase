// Se dispara cuando haya cargado la pagina y verificar la sesión al cargar la página
window.onload = function () {
    let sessionUser = verificarSesion();
    new_flats(sessionUser);
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
//instancia la class permitidos
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
//instancia la class permitidos
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
//instancia la class permitidos
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
//instancia la class permitidos
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
//instancia la class permitidos
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
 '                 FUNCTION GENERAR ID PARA LOS FLATS
 *****************************************************************************************/

//Creo una key por medio de la fecha, hora, min, seg del sistema
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

/*****************************************************************************************
 '                 FUNCTION GUARDAR FLAT
 *****************************************************************************************/
function new_flats(sessionUser) {
    console.log(sessionUser);
    userkey = sessionUser.userkey;
    //serkeyurlParams = sessionUser.userkey;
    firstNameParams = sessionUser.firstName;


    // Recojo los elementos del formulario
    const elementFlatRegister = document.querySelector('form[name=formFlatRegister]');
    console.log('formulario completo', elementFlatRegister);

    //detecto la acción en el botón y ejecuto la función
    elementFlatRegister.addEventListener('submit', getDataForm);

    function getDataForm(event) {
        event.preventDefault()

        const formData = new FormData(elementFlatRegister);

        const objetData = Object.fromEntries(formData);
        console.log('transforma una lista de pares con [clave-valor]', objetData);

        //validar que cada campo tenga un valor min 2 caracteres
        let campos = new classValidaciones()
        let campoVacio = campos.camposVacios(objetData);

        //Creo y agrego el ID del flat al Objeto
        objetData.dateRegisterKey = obtenerFechaHoraActual();
        objetData.picture = "images/flats/picture_0002.png";
        objetData.favorte = {favoriteUserkey: userkey};
        console.log(objetData);

        //si la BD tiene el ID del Usuario y todos los campos tienen valores
        if (localStorage.getItem(userkey) !== null && campoVacio) {

            //leer datos del usuario segun su userkay
            let readUser = localStorage.getItem(userkey)
            datos = JSON.parse(readUser);
            datos.flats.push(objetData);
            localStorage.setItem(userkey, JSON.stringify(datos));
            console.log('graba', window.localStorage);

            //document.location.href = 'home.html?userkey=' + userkey + '&firstName=' + firstName;
        } else {
            console.log('NO PUEDE GRABAR ERROR!');
        }
    }
}