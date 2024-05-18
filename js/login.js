<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>

    <div id="profile" style="display: none;">
        <img src="./profile.png" alt="login">
    <br/>
    <span id="mensaje"></span>
    </div>

    <div id="autenticación" style="display: block;">
        <input type="text" id="usuario" placeholder="Ingrese su usuario" />
        <br/>
        <input type="password" id="contraseña" placeholder="Ingrese su contraseña" />
        <br/> <br/>
        <button onclick="procesarClic();">Iniciar sesión"</button>
    </div>

    <script>
        var user = {
                "login":"",
                "contraseña":"",
                profile:{
                    id: 0,
                    nameProfile:'',
                }
        }
        var procesarClic = function(){
            var user1 = document.getElementById('usuario').value;
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
      
    </script>
</body>
</html>