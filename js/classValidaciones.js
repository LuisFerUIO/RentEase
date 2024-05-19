class classValidaciones {
    constructor() {
    }

    camposNumeros(elEvento, permitidos, mitexto) {
        /*****************************************************************************************
         '                      validacion de texto y numeros
         '.........................................................................................
         'Descripcion:
         '		Verifica que una cadena contenga unicamente caracteres numericos.
         '		Retorna "true"  "false" seggún sea el caso
         '.........................................................................................
         'Parametros:
         '		- str : Cadena que se quiere evaluar
         '.........................................................................................
         'Validaciones:
         '		- Ninguno de los caracteres que componen la cadena debe ser diferente de los
         '		  caracteres de la lista "0123456789"
         *****************************************************************************************/
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
        //var evento = elEvento || window.event;

        var codigoCaracter = elEvento.charCode || elEvento.keyCode;
        var caracter = String.fromCharCode(codigoCaracter);
        // console.log(caracter);

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
        //var resultado = permitidos.indexOf(caracter) != -1 || tecla_especial
        // console.log('************************ '+resultado);
    }

    camposEmail(campo, mensaje) {
        /*****************************************************************************************
         '                       validacion de email
         '.........................................................................................
         'Descripcion:
         '		Funcion para validar que el texto ingresado en un campo texto,
         '		corresponda a una direcci\xF3n v�lida de correo (e-mail)
         '.........................................................................................
         'Parametros:
         '		Campo:		Control con el valor a validar
         '		Mensaje:	Cadena con el nombre descriptivo del control, usada para mostrar
         '					un mensaje personalizado.
         '.........................................................................................
         'Validaciones:
         '		- Los caracteres que contiene la cuenta de correo deben estar dentro de la siguiente lista
         '			"0123456789abcdefghijlkmnopqrstuvwxyz@.-_"
         '		- El primer y \xFAltimo caracter no pueden ser alguno de los caracteres "@.-_"
         '		- Los caracteres anterior y posterior a la arroba (@), no pueden ser "@.-_"
         '		- La cadena NO puede contener m�s de una arroba (@)
         '		- La cadena debe contener al menos UNA arroba (@)
         '		- La cadena NO puede contener espacios vac�os (" ")
         '		- Despu�s del \xFAltimo punto, debe haber AL MENOS 2 caracteres
         *****************************************************************************************/

            //console.log('imprimir campo ='+ campo);

        let perfect = true;

        //with (Campo){ en desuso

        // Validar que los caracteres que contiene la cuenta de correo
        // esten dentro de los caracteres de la siguiente lista
        let car_validos = "0123456789abcdefghijlkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@.-_"
        let car_otros = "@.-_";

        console.log('length =' + campo.value.length);
        for (let i = 0; i < campo.value.length; i++) {
            let ch = campo.value.substring(i, i + 1);
            console.log('ch =' + ch);
            if (car_validos.indexOf(ch) == -1) {
                perfect = false;
            }
        }

        let pos = campo.value.indexOf("@");
        let lastpos = campo.value.length - 1;

        // Validar primer y ultimo caracter
        let car1 = campo.value.substring(0, 1);
        let car2 = campo.value.substring(lastpos, lastpos + 1);
        if ((car_otros.indexOf(car1) != -1) || (car_otros.indexOf(car2) != -1)) {
            perfect = false;
        }

        // Validar anterior y siguiente caracter despues de "@"
        let apos;
        car1 = campo.value.substring(apos - 1, apos);
        car2 = campo.value.substring(apos + 1, apos + 2);
        if ((car_otros.indexOf(car1) != -1) || (car_otros.indexOf(car2) != -1)) {
            perfect = false;
        }

        // Buscar si existe otro simbolo "@" en el campo
        let subcadena = campo.value.substring(apos + 1, 100);
        let a2pos = subcadena.indexOf("@");
        let spacepos = campo.value.indexOf(" ");
        let dotpos = campo.value.lastIndexOf(".");

        //if (apos < 1 || a2pos != -1 || dotpos - apos < 2 || lastpos - dotpos > 3 || lastpos - dotpos < 2 || spacepos != -1) {
        if (apos < 1 || a2pos != -1 || lastpos - dotpos < 2 || spacepos != -1) {
            perfect = false;
        }

        // } with en desuso

        if (!perfect) {
            //alert('\nEl e-mail ' + mensaje + '\'' + campo.value + '\' no es inv\xE0lido.\n\nPor favor corrija la informaci\xF3n.');
            alert('\nEl e-mail ' + mensaje + ' \'' + campo.value + '\' no es válido.\n\nPor favor corrija la información.');
            // document.form_sorteo.email.focus();

            return false;
        }

        //return true;

    }

}

