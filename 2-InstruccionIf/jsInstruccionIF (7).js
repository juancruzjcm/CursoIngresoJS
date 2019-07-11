function mostrar()
{
//tomo la edad  
var edad;
//creo una variable con la condicion de que sea igual a soltero
var civil = "Soltero";
//pido el ID de Edad
edad = document.getElementById("edad").value;
//Pido el Id de EstadoCivil
civil = document.getElementById("estadoCivil").value;
    //luego pido que edad sea menor a 18 y que el estado civil sea distinto a Soltero
    if(edad < 18 && civil != "Soltero"){
        //document.write("Es muy pequeño para No estar soltero");
        alert("Es muy pequeño para No estar soltero");
    }else{
        //nada
    }
         


     //menor que   <
     //mayor que   >
     //menor igual <=
     //mayot igual >=
     //distinto de !=
     //Igual que   ==
	


}//FIN DE LA FUNCIÓN