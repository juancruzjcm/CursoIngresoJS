function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value;

if(edad < 13){
    document.write("Es un niño");
}else if(edad >= 13 && edad <=17){
    document.write("Es un adolecente");    
}else{
    document.write("Mayou de edad")
}




}//FIN DE LA FUNCIÓN