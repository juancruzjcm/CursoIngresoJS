/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    //Creo variables
    var n1;    
    var n2; 
    var resto;
    //n1 = parseInt(document.getElementById("numeroDividendo").value);
    //error de Typeo n1 = document.getElementyById("numeroDividiendo").value;
    n1 = document.getElementById("numeroDividendo").value;
    //eror de typeo n1 = parsenInt;
    n1 = parseInt(n1);
    //error de Typeo parsenInt
    
    //n2 = parseInt(document.getElementById("numeroDivisor").value);
    n2 = document.getElementById("numeroDivisor").value;
    // error de typeo n2 = parseInt;
    n2 = parseInt(n2);
    resto = n1%n2;
    //Envio un alert al cliente
    alert("El resto es " + resto);

    //NOTA: para sacar el resto el simbolo es %
}
