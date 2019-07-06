/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    //Creo variables
    var n1;
    var n2;
    var n3;
    //Pido el id con documnet.getElementById("").value
    n1 = document.getElementById("importe").value;
    //Utilizo parseInt
    n2 = parseInt(n1);
    //Realizo la operacion
    n3 = n2 * 25 / 100 - n2;
    //Le envio al cliente la informacion desde el ID con documet.getElementById("").value
    document.getElementById("resultado").value = n3; 
    //primero escribo document despues la variable para enviar el id al cliente


}
