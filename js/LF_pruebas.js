/*
//////////////////////////////////////////////

RentEase 2024

Luis F. Suarez
Diana Siguenza

Email String
Password String
First_Name String
Last_Name String
Birth_Date_Date

//////////////////////////////////////////////
*/
//prototipo
class User {
	constructor(email,password,First_Name,Last_Name,Birth_Date_Date) {
		this.email = email;
		this.password = password;
		this.First_Name = First_Name;
		this.last_Name = Last_Name;
		this.Birth_Date_Date = Birth_Date_Date;
	}
	unionData(){

		var User = JSON.parse(localStorage.getItem('User'));
-	}
	saveUser(){
		this.email.push
	}
}

const user = new User();
User.


/////////////////////////////////////
	const elementoForm = document.querySelector('form')
elementoForm.addEventListener('submit',getDataForm )
function getDataForm (event) {
	event.preventDefault()
	console.log('formulario completo', elementoForm);

	const fromData = new FormData(elementoForm) // event.target
	console.log('Está pensado principalmente para enviar datos de formularios', fromData);

	const data = Object.fromEntries(fromData)
	console.log('transforma una lista de pares con [clave-valor]', data)

	console.log(JSON.stringify(data))

	const userRegister = JSON.stringify(data)

	localStorage.setItem('user', data);
	console.log(window.localStorage);
}