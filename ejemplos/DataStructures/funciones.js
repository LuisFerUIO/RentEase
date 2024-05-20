var RegistrarUsuario = function (user) {
    var users = JSON.parse(localStorage.getItem('users'));
    if (users) {
        for (var i = 0; i < users.length; i++) {
            var temporal = users[i];
            let {username} = temporal;
            console.log('username: ' + username);
            if (user.username == username) {
                // break
                return "Usuario ya existe";
            }
        }
        // El usuario nunca existio dentor FOR
        users.push(user);
        // Nombre de la estructura
        localStorage.setItem('users', JSON.stringify(users));
        return "OK";
    } else {
        // La primera vez, no hay usuarios
        var users = [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        return "OK";
    }
}

var AutenticarUsuario = function (userAutenticado) {
    // LLamada por el nombre de a estructura
    var users = JSON.parse(localStorage.getItem('users')); // del string -> Array JSON
    console.log('users: ' + users);
    if (users) {
        let ExisteUsuario = false;
        for (var i = 0; i < users.length; i++) {
            var temporal = users[i];
            if (userAutenticado.username == temporal.username) {
                ExisteUsuario = true;
                if (userAutenticado.password == temporal.password) {
                    return "OK";
                } else {
                    return "La clave ingresada no es valida.";
                }
            }
        }
        if (ExisteUsuario == false) {
            return "Usuario no encontrado";
        } else {
            return "Usuario/Clave no existen";
        }
    } else {
        return "No hay usuarios registrados";
    }
}


var RegistrarFlat = function (flat) {
    var flats = JSON.parse(localStorage.getItem('flats')); // Etiqueta (nombre de variable)
    if (flats) {
        for (var i = 0; i < flats.length; i++) {
            var temporal = flats[i];
            if (user.username == temporal.username) {
                // break
                return "Usuario ya existe";
            }
        }
        // El usuario nunca existio dentor FOR
        users.push(user);
        localStorage.setItem('flats', JSON.stringify(users));
        return "OK";
    } else {
        // La primera vez, no hay usuarios
        var flats = [];
        users.push(user);
        localStorage.setItem('flats', JSON.stringify(users));
        return "OK";
    }
}

function ValidarLogin() {
    var logged = JSON.parse(localStorage.getItem('logged')); // Etiqueta (nombre de variable)
    if (logged) {
        return true;
    } else {
        return false;
    }
}

function ValidarPassword(password) {
    let miarray = [...password];
    if (miarray.includes('.') || miarray.includes('#') || miarray.includes('*')) {
        return true;
    } else {
        return false;
    }
}