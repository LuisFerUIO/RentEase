/*
//////////////////////////////////////////////

RentEase 2024

Luis F. Suarez
Diana Siguenza

//////////////////////////////////////////////
*/
//prototipo
function Links(pagina){
	//this.link = Url;
	this.pagina = pagina;
}
Links.prototype.lanzar = function(nuevolanzamiento){
	//document.href = url;
	//this.pagina.document.href = nuevolanzamiento;
	window.location.href = nuevolanzamiento;
}

/*
document.getElementById("btnCrearCuenta").addEventListener("click", function(e){
		e.preventDefault();
		const links = new Links("regiter.html");
		links.lanzar(links.pagina);

	});
*/

document.getElementById("btnCrearCuenta").addEventListener("click", function(e) {
	e.preventDefault();
	const links = new Links("register.html");
	links.lanzar(links.pagina);
});

/*****************************************************************************************
 '                  GUARDAR REGISTRO
 *****************************************************************************************/
class guardar {
	constructor() {
	}

	usuario() {
		const elementFormrRegister = document.querySelector('form');

		//Compruebo que exista un formulario
		if (elementFormNewFlat) {
			elementFormNewFlat.addEventListener('submit', getDataForm);
		} else {
			console.log('Formulario no encontrado');
		}

		function getDataForm(event) {

			//evita que la pagina se recargue
			event.preventDefault();

			console.log('formulario completo', elementFormrRegister);

			const formData = new FormData(elementFormrRegister);
			console.log('Está pensado principalmente para enviar datos de formularios', formData);

			const data = Object.fromEntries(formData);
			console.log('transforma una lista de pares con [clave-valor]********', data);

			console.log('grabar estos datos' + JSON.stringify(data));
			const userRegister = JSON.stringify(data);

			localStorage.setItem('user', userRegister);
			console.log(window.localStorage);
		}
	}
}


