/*****************************************************************************************
VALIDA UN NUMERO ENTERO
'.........................................................................................*/
function validarEntero(valor){ 
    //intento convertir a entero. 
   //si era un entero no le afecta, si no lo era lo intenta convertir 
   valor = parseInt(valor) 

    //Compruebo si es un valor num�rico 
    if (isNaN(valor)) { 
          //entonces (no es numero) devuelvo el valor cadena vacia 
          return "" 
    }else{ 
          //En caso contrario (Si era un n\xFAmero) devuelvo el valor 
          return valor 
    } 
} 




/*****************************************************************************************
'Fecha : Mayo 28/2001
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
function permite(elEvento, permitidos, mitexto) {
    // Variables que definen los caracteres permitidos
    var numeros = "0123456789";
    var caracteres = "\xA0\xAD\xE1\xE9\xED\xF3\xFA\xD1\xF1abcdefghijklmn�opqrstuvwxyz\xC1\xC9\xCD\xD3\xDAABCDEFGHIJKLMN�OPQRSTUVWXYZ";
    var numeros_caracteres = numeros + caracteres;
    var teclas_especiales = [37, 39, 46, 8, 32, 9];
  //  var teclas_especiales = [8, 37, 39, 46];
    // 8 = BackSpace, 46 = Supr, 37 = flecha izquierda, 39 = flecha derecha
     // Seleccionar los caracteres a partir del par�metro de la funci�n
    switch(permitidos) {
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
    for(var i in teclas_especiales) {
      if(codigoCaracter == teclas_especiales[i]) {
        tecla_especial = true;
        break;
      }
    }
   
  var texto = mitexto.value;
  var cont=0;
  var textF="";
  var espacio=false;
  
  while(cont<mitexto.value.length){
  
  if(cont==0 | mitexto.value.charAt(cont-1)==" " )
  textF+=mitexto.value.charAt(cont).toUpperCase();
  else
  textF+=mitexto.value.charAt(cont).toLowerCase();
  cont++;
  }
  mitexto.value=textF;
    // Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
    // o si es una tecla especial
    return permitidos.indexOf(caracter) != -1 || tecla_especial;
    
    /////////////////////
  
    
    
    /////////////////////
  }


  /*
VALIDACION DE NUMEROS
*/
function isNumeric(str)
{
for (var i=0; i < str.length; i++) 
    {
    var ch = str.substring(i, i+1);
    if(ch < "0" || ch > "9") 
        {
        return false;
        }
    }

    return true;
}
// JavaScript Document
/*****************************************************************************************
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
function ValidarEmail(Campo, Mensaje)
{
var perfect = true;

with (Campo)
    {
    
    // Validar que los caracteres que contiene la cuenta de correo
    // esten dentro de los caracteres de la siguiente lista
    var car_validos = "0123456789abcdefghijlkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@.-_"
    var car_otros = "@.-_";

    for (var i=0; i < value.length; i++) {
        var ch = value.substring(i, i+1);
        if (car_validos.indexOf(ch) == -1) perfect = false;
    }

    apos = value.indexOf("@");
    lastpos = value.length-1;

    // Validar primer y ultimo caracter
    var car1 = value.substring(0, 1);
    var car2 = value.substring(lastpos, lastpos+1);
    if ((car_otros.indexOf(car1) != -1) || (car_otros.indexOf(car2) != -1)) perfect = false;

    // Validar anterior y siguiente caracter despues de "@"
    car1 = value.substring(apos-1, apos);
    car2= value.substring(apos+1, apos+2);
    if ((car_otros.indexOf(car1) != -1) || (car_otros.indexOf(car2) != -1)) perfect = false;

    // Buscar si existe otro simbolo "@" en el campo
    var subcadena = value.substring(apos + 1, 100);
    a2pos = subcadena.indexOf("@");
    spacepos = value.indexOf(" ");
    dotpos = value.lastIndexOf(".");

    //if (apos < 1 || a2pos != -1 || dotpos - apos < 2 || lastpos - dotpos > 3 || lastpos - dotpos < 2 || spacepos != -1) {
    if (apos < 1 || a2pos != -1 || lastpos - dotpos < 2 || spacepos != -1) perfect = false;
    }

if (!perfect) 
    {
    alert('\nEl e-mail ' + Mensaje + '\'' + Campo.value + '\' no es inv\xE0lido.\n\nPor favor corrija la informaci\xF3n.');
    document.form_sorteo.email.focus();
    
    return false;
    }

return true;

}