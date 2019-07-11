function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	let calc = Math.floor((Math.random() * 10) + 1);
	
	if (calc >= 9){
		alert("EXCELENTE");

	}else if(calc > 4 ){
		alert("APROBÓ");
	}else{
		alert("VAMOR LA PROXIMA SE PUEDE");
	}
	

}//FIN DE LA FUNCIÓN