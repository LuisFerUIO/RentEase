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

//funcion que borra todo lo que hay en que localStorage
document.getElementById('limpiarFormLocalStorage').addEventListener('click', function () {
        localStorage.clear();
        console.log('localStorage borrado.');
    }
);


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


