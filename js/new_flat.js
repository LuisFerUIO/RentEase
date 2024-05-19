/*
City String
Street name String
Street number Number
Area size Number
Has AC Boolean
Year built Number
Rent price Number
Date available Date
 */
/////////////////////////////////////

//funcion para pruebas, borra_todo lo que hay en que localStorage
document.getElementById('limpiarFormLocalStorage').addEventListener('click', function () {
        localStorage.clear();
        console.log('localStorage borrado.');
    }
);

class validadiones {
    constructor() {
    }

    camposTexto() {

    }

    /*****************************************************************************************
     '.........................................................................................
     'Descripcion:
     '		Verifica que una cadena contenga \xFAnicamente caracteres num�ricos.
     '		Retorna "true" \xF3 "false" seg\xFAn sea el caso
     '.........................................................................................
     'Parametros:
     '		- str : Cadena que se quiere evaluar
     '.........................................................................................
     'Validaciones:
     '		- Ninguno de los caracteres que componen la cadena debe ser diferente de los
     '		  caracteres de la lista "0123456789"
     *****************************************************************************************/
    camposNumeros() {
        //function permite(elEvento, permitidos, mitexto) {
        // Variables que definen los caracteres permitidos
        var numeros = "0123456789";
        var caracteres = "\xA0\xAD\xE1\xE9\xED\xF3\xFA\xD1\xF1abcdefghijklmn�opqrstuvwxyz\xC1\xC9\xCD\xD3\xDAABCDEFGHIJKLMN�OPQRSTUVWXYZ";
        var numeros_caracteres = numeros + caracteres;
        var teclas_especiales = [37, 39, 46, 8, 32, 9];
        //  var teclas_especiales = [8, 37, 39, 46];
        // 8 = BackSpace, 46 = Supr, 37 = flecha izquierda, 39 = flecha derecha
        // Seleccionar los caracteres a partir del par�metro de la funci�n
        switch (permitidos) {
            case 'num':
                permitidos = numeros;
                break;
            case 'car':
                permitidos = caracteres;
                break;
            case 'num_car':
                permitidos = numeros_caracteres;
                break;
        }

        // Obtener la tecla pulsada
        var evento = elEvento || window.event;
        var codigoCaracter = evento.charCode || evento.keyCode;
        var caracter = String.fromCharCode(codigoCaracter);

        //alert(codigoCaracter);

        // Comprobar si la tecla pulsada es alguna de las teclas especiales
        // (teclas de borrado y flechas horizontales)
        var tecla_especial = false;
        for (var i in teclas_especiales) {
            if (codigoCaracter == teclas_especiales[i]) {
                tecla_especial = true;
                break;
            }
        }

        var texto = mitexto.value;
        var cont = 0;
        var textF = "";
        var espacio = false;

        while (cont < mitexto.value.length) {

            if (cont == 0 | mitexto.value.charAt(cont - 1) == " ")
                textF += mitexto.value.charAt(cont).toUpperCase();
            else
                textF += mitexto.value.charAt(cont).toLowerCase();
            cont++;
        }
        mitexto.value = textF;
        // Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
        // o si es una tecla especial
        return permitidos.indexOf(caracter) != -1 || tecla_especial;
    }
}

camposFechas()
{
}
}



const elementFormNewFlat = document.querySelector('form');

//Compruebo que exista un formulario
if (elementFormNewFlat) {
    elementFormNewFlat.addEventListener('submit', getDataForm);
} else {
    console.log('Formulario no encontrado');
    }

function getDataForm(event) {

    //evita que la pagina se recargue
    event.preventDefault();

    console.log('formulario completo', elementFormNewFlat);

    const formData = new FormData(elementFormNewFlat);
    console.log('Está pensado principalmente para enviar datos de formularios', formData);

    const data = Object.fromEntries(formData);
    console.log('transforma una lista de pares con [clave-valor]********', data);

    console.log('grabar estos datos' + JSON.stringify(data));
    const userRegister = JSON.stringify(data);

    localStorage.setItem('user', userRegister);
    console.log(window.localStorage);
    }


//});


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


