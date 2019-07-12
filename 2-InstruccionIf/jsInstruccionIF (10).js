function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	let calc = Math.floor((Math.random() * 10) + 1);
	console.log(calc)
	if (calc >= 9){

		alert("EXCELENTE");

	}if(calc > 4 && calc <=8 ){

		alert("APROBÓ");

	}if(calc < 4 && calc > 0){

		alert("VAMOS LA PROXIMA SE PUEDE" );
	}
	

}//FIN DE LA FUNCIÓN