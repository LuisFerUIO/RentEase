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
