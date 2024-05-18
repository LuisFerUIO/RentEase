

var user = {
        "login":"",
        "contraseña":"",
        profile:{
            id: 0,
            nameProfile:'',
        }
}
var procesarClic = function(){
    var user1 = document.getElementById('Email').value;
    var contraseña1 = document.getElementById('contraseña').value;
if(contraseña1 == "1234"){
    user.profile.nameProfile="admin";
    user.profile.id=5;
    user.login = user1;
    user.contraseña = contraseña1;
    document.getElementById('profile').style = "display:block";
    document.getElementById('autenticación').style = "display:none";
    document.getElementById('mensaje').innerHTML = "Bienvenid@" + user.login + "Usted es el usuario con el rol:" +user.profile.nameProfile;
}
else{
alert('La clave ingresada es inválida. Inténtalo nuevamente.');
}
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

var Campo = document.getElementById('Email').value;
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