function mostrar()
{
   var letra;
   var numero;
   var contadorPares = 0;
   var contadorImpares = 0;
   var contadorceros = 0;
   var acumuladorPositivos = 0;
   var acumuladorNegativos = 0;
   var contador = 0;
   var respuesta = 'si';
   var flaf = 0;

    

    do
    {
        letra = prompt("Ingrese una letra ");

        //while(!((letra >= 65 && letra <=90) || (letra >=97 && letra <= 122))) ETO NO
        numero = parseInt(prompt("Ingrese un numero"));

        while( isNaN(numero) || numero < -100 || numero >100)
        {
            numero = parseInt(prompt("Ingrese un numero entre -100 y 100"));

        }

        respuesta = prompt("Desea continuar ");
        
    
        contador++;
    }while(respuesta == 'si')
    //me fijo la paridad
    if(numero % 2 == 0)
    {
        contadorPares++;
    }
    else
    {
        contadorPares++;
    }
     
    if (numero < 0)
    {
        acumuladorPositivos = acumuladorNegativos + numero;

        contadorPos ++;

    }
    else if(numero < 0)
    {
        acumuladorNegativos = acumuladorNegativos + numero;
               

    }
    else{
        contadorceros++;
    }
    if ( numero > mayor || flag == 0){
        menor = numero
        menorLetra = letra;
        flag =1;
    }



    //numeros pares
    //numeros impares
    //positivos, negativos y cero
    //maximo y minimo y letra

   
   
   
   
   
   
   
   
   
   
   
   
    /*var seguir;

    do
    {

        alert("hola que tal ");
        seguir = confirm("Quiere que lo salude de nuevo? ");

    }while( seguir == true);*/
}
