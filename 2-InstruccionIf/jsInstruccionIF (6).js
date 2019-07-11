function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value;

if(edad < 13){
    //document.write("Es un niño");
    alert("Es un niño");
}else if(edad >= 13 && edad <=17){
    //document.write("Es un adolecente");    
    alert("Es un adolecente");
}else{
    //document.write("MayorS de edad")
    alert("Mayor de edad");
}
     //menor que   <
     //mayor que   >
     //menor igual <=
     //mayot igual >=
     //distinto de !=
     //Igual que   ==



}//FIN DE LA FUNCIÓN