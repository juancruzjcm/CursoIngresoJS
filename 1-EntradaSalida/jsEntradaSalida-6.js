/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    // Creo 3 variables n1, n2 y suma.
    var n1;  
    var n2;
    var suma;
    //En las variables "n1 y n2" pido el valor desde el ID del html.
    n1 = document.getElementById("numeroUno").value;
    n2 = document.getElementById("numeroDos").value;

    //Envio el valor del Id al parseInt para que me devuelva un int(un numero entero).
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    //con la variable "suma" realizo la operación    
    suma = n1+n2;
    //Finalmente envio un alerte al cliente con la variable suma donde estara la operacion.
    alert("el resultado es " + suma );

   //Nota: parseInt(n1) no me devuelve un int 



}

