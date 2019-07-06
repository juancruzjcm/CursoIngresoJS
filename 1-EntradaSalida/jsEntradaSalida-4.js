/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//creo variable
	var nombre
	//Uso prompt para que el cliente ingrese el dato
	nombre = prompt("ingresa nombre")
	//le devuelvo dato por getElementById
	document.getElementById("elNombre").value = nombre;
	//primero escribo document despues la variable para enviar el id al cliente

}

