/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    //creo variables
	var n1;    
    var n2;   
    var sumar; 
    //pido los valores del id que me envia el cliente 
    //nota: "parseInt(document.getElementById("numeroUno").value)= n1; esto le envia al cliente el valor del id
    n1 = document.getElementById("numeroUno").value;
    n2 = document.getElementById("numeroDos").value;
    //utilizo parseInt para que me devuelva un int
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    //realizo la suma
    sumar = n1+n2;
    //finalmente envio un alert al cliente con la operacion resuelta    
    alert("el resultado es " + sumar );
}

function restar()
{
    //creo variables
	var n1;  
    var n2;
    var restar;
    //pido los valores del id que me envia el cliente  
    n1 = document.getElementById("numeroUno").value;
    n2 = document.getElementById("numeroDos").value;
    //utilizo parseInt para que me devuelva un int
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    //realizo la resta
    restar = n1-n2;
    //Envio un alrte al cliente
    alert("el resultado es " + restar );
}

function multiplicar()
{ 
    //creo varibale
    var n1;
    var n2;
    var multiplicar;
    //pido los valores id de html
    n1 = document.getElementById("numeroUno").value;
    n2 = document.getElementById("numeroDos").value;
    //Utilizo parseInt para que me devuelva un int
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    //realizo la pultiplicacion
    multiplicar = n1*n2;
    //Envio un alert al cliente
    alert("El resultado es " + multiplicar)

}

function dividir()
{
//creo varibale
var n1;
var n2;
var dividir;
//pido los valores id de html
n1 = document.getElementById("numeroUno").value;
n2 = document.getElementById("numeroDos").value;
//Utilizo parseInt para que me devuelva un int
n1 = parseInt(n1);
n2 = parseInt(n2);
//realizo la pultiplicacion
dividir = n1 / n2;
//Envio un alert al cliente
alert("El resultado es " + dividir);

//Notas: errores de typeo
//n1 = documente.getElementById("numeroUno").value; 
//n1 = document.getElementById("numeroUno");
//n1 = document.getelementById("numeroUno").value;
}
