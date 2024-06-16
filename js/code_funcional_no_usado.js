/*****************************************************************************************
 '                 FUNCTION VERIFICAR SI UN USUARIO TIENE FAVORITOS
 *****************************************************************************************/
//Necesita el ID/userkey del usuario y el ID/dateRegisterKey del flat
function verificarFavorito(userkey, dateRegisterKey) {

    //Si el email/userkey no existe me despliega error en la consola
    if (localStorage.getItem(userkey) !== null) {

        //leer datos del usuario segun su userkay
        let readUser = localStorage.getItem(userkey);

        // Convertir los datos a un objeto JavaScript
        let datos = JSON.parse(readUser);

        //Si tiene flats continua
        if (datos.flats) {

            // Convertir los objetos dentro de 'flats' a una cadena JSON legible
            //let flatsContent = datos.flats.map(flat => JSON.stringify(flat));

            // Inicializó como que no tiene flats asignados
            let miFavorito = false;

            // Hago una iteración  dentro de flats
            //datos.flats.forEach((flat, index) => {
            for (let flat of datos.flats) {
                //Si existe el id del flat continuo
                if (flat.dateRegisterKey === dateRegisterKey) {
                    console.log(flat.favorite);
                    //hago una iteración dentro de los favoritos que está dentro de flats
                    //flat.favorite.forEach((favoriteUsers, index) => { (*_*)(*_*)(*_*)
                    for (let favoriteUser of flat.favorite) {
                        // Si existe un registro que coincide con el ID del usuario continuo
                        if (favoriteUser.favoriteUserkey === userkey) {
                            //console.log('ya es mi favorito');
                            miFavorito = true;
                            break;
                        }
                        // console.log('miFavorito = ' + miFavorito);
                    }
                    if (miFavorito) {
                        //Devuelvo si el usuario tiene o no un favorito
                        break;
                    }
                }

            }
            return miFavorito;
        }
    } else {
        alert('ERROR EL USUARIO NO EXISTE EN LOCALSTORE');
    }
}