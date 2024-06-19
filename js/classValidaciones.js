class classValidaciones {
    constructor() {
        let elementos;
    }

    camposRegistro(dataFormulario) {
        let tipoDato = typeof dataFormulario;
        console.log("tipoDato = " + tipoDato);
        console.log("dataFormulario = " + dataFormulario);
        let validacion = true;
        console.log(dataFormulario.birthDate);
        if (tipoDato == "object") {
            for (let key of Object.keys(dataFormulario)) {
                console.log("key = " + key);
                console.log("objetData[key] = " + dataFormulario[key] + dataFormulario[key].length);
                let pass;
                switch (key) {
                    case'email':
                        if (localStorage.getItem(dataFormulario[key]) !== null) {
                            alertify.alert('Aviso', 'El email ya fue registrado', function () {
                                alertify.message('OK______________________');
                            });
                            return false;
                        } else if (dataFormulario[key] == null || dataFormulario[key] == "" || dataFormulario[key] == 0) {
                            alertify.alert('Aviso', 'Ingres su email', function () {
                                alertify.message('OK______________________');
                            });
                            return false;
                        }
                        break;
                    case'password':
                        if (dataFormulario[key].length < 6) {
                            //alert("Ingrese al menos 6 caracter");
                            alertify.alert('Aviso', 'ingresa al menos 6 caracteres', function () {
                                alertify.message('OK______________________');
                            });
                            return false;
                        }
                        break;
                    case'passwordConfirmation':
                        if (dataFormulario[key] !== dataFormulario.password) {
                            //alert("Ingrese al menos 6 caracter");
                            alertify.alert('Aviso', 'Confirme que su password sea igual', function () {
                                alertify.message('OK______________________');
                            });
                            return false;
                        }
                        break;
                    case'birthDate':
                        let now = new Date();
                        //let birth = new Date(`1984/12/25 00:00:00`);
                        let birth = new Date(dataFormulario.birthDate);
                        let anios = now.getFullYear() - birth.getFullYear();
                        if (dataFormulario[key] == "" || dataFormulario[key] == 0 || dataFormulario[key] == undefined) {
                            alertify.alert('Aviso', 'Ingrese su fecha de nacimiento', function () {
                                alertify.message('OK______________________');
                            });
                            return false;
                        } else if (anios < 18) {
                            alertify.alert('Aviso', 'Debe ser mayor de edad para registrarse', function () {
                                alertify.message('OK______________________');
                            });
                            return false;
                        } else if (anios > 120) {
                            alertify.alert('Aviso', 'Debe tener menos de 120 años', function () {
                                alertify.message('OK______________________');
                            });
                            return false;
                        }


                        break;
                    case'firstName':
                        if (dataFormulario[key].length < 2) {
                            //alert("Ingrese al menos 6 caracter");
                            alertify.alert('Aviso', 'Ingrese al menos dos caracteres', function () {
                                alertify.message('OK______________________');
                            });
                            return false;
                        }

                        break;
                    case'lastName':
                        if (dataFormulario[key].length < 2) {
                            //alert("Ingrese al menos 6 caracter");
                            alertify.alert('Aviso', 'Ingrese al menos dos caracteres', function () {
                                alertify.message('OK______________________');
                            });
                            return false;
                        }

                        break;
                }

            }

        }
        return validacion;
    }

    camposVacios(dataFormulario) {
        let tipoDato = typeof dataFormulario;
        console.log("tipoDato = " + tipoDato);
        let validacion = true;
        if (tipoDato == "object") {
            for (let key of Object.keys(dataFormulario)) {
                // console.log("key = " + key);
                // console.log("objetData[key] = " + dataFormulario[key] + dataFormulario[key].length);
                if (key == "streetNumber") {
                    if (dataFormulario[key].length < 1) {
                        //alert("Seleccione una opción en" + key );
                        alert("Seleccione una provincia");
                        return false;
                    }
                } else if (key == "city" || key == "province") {
                    if (dataFormulario[key].length < 1) {
                        alert("Seleccione una ciudad");
                        return false;
                    }
                } else {
                    if (dataFormulario[key].length < 2) {
                        alert("Ingrese al menos 2 caracter" + key);
                        return false;
                    }
                }
            }
            return validacion;
        }

        //return  elemeto = elemeto || false;
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
            // se inicia presumiendo que el email es correcto
        let perfect = true;

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

        let apos = campo.value.indexOf("@");
        let lastpos = campo.value.length - 1;

        // Validar primer y ultimo caracter
        let car1 = campo.value.substring(0, 1);
        let car2 = campo.value.substring(lastpos, lastpos + 1);
        if ((car_otros.indexOf(car1) != -1) || (car_otros.indexOf(car2) != -1)) {
            perfect = false;
        }

        // Validar anterior y siguiente caracter despues de "@"
        car1 = campo.value.substring(apos - 1, apos);
        console.log('car1 = campo.value.substring(apos - 1, apos);' + car1);
        car2 = campo.value.substring(apos + 1, apos + 2);
        console.log('car2 = campo.value.substring(apos + 1, apos + 2);' + car2);
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

        if (!perfect) {
            //alert('\nEl e-mail ' + mensaje + '\'' + campo.value + '\' no es inv\xE0lido.\n\nPor favor corrija la informaci\xF3n.');
            alert('\nEl e-mail ingresado ' + mensaje + ' \'' + campo.value + '\' no es correcto.\n\nPor favor inténtalo nuevamente.');
            // document.form_sorteo.email.focus();

            return false;

        }


        //return true;

    }

}

