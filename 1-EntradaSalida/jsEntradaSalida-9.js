/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    var n1;
    var n2;    
    var n3;
   //Traigo el valor del Id 
    n1 = document.getElementById("sueldo").value; 
    //paso el valor del id al parseInt para que me devuelva un Int(numero entero)
    n2 = parseInt(n1);    
    //Realizo la operacion "importe con un aumento del 10 %""
    n3 = n2 * 10 / 100 + n2;
    //mostrar el importe en el cuadto con el texto RESULTADO
    document.getElementById("resultado").value = n3;


    //Nota: En este ejercio lo puedo hacer con solo 2 variables y el programa lo corre igual...
    //... la decicion de hacerlo con 3 me parecio mas practico y mejor.
  
}

