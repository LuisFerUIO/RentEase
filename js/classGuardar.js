/*****************************************************************************************
 '                  GUARDAR REGISTRO
 *****************************************************************************************/
class classGuardar {

    constructor() {
    }

    usuario(event, elementFormRegister) {

        console.log('formulario completo', elementFormRegister);

        const formData = new FormData(elementFormRegister);
        console.log('Está pensado principalmente para enviar datos de formularios', formData);

        const objetData = Object.fromEntries(formData);
        console.log('transforma una lista de pares con [clave-valor]', objetData);

        const userRegister = JSON.stringify(objetData);
        console.log('grabar estos datos' + userRegister);

        localStorage.setItem(user, userRegister);
        console.log('graba' + window.localStorage);

        alert('Bien almacenado!!');
    }

}