function mostrar()
{
    var nota;
    var sexo;
    var acumuladorNotas = 0;
    var notaBaja;
    var sexoBajo;
    var contadorVaronesMayor = 0;

    for( i = 0; i<5 ; i++)
    {
        nota = parseInt(prompt("Ingrese un numero "));
        /*while (!(nota >= 0 && nota <= 10))
        {
            alert("ingrese un numero entro 0 y 10" );
            nota = parseInt(prompt("Error. reingrese el numero "));
        }*/
        while(nota < 0 || nota > 10 || isNaN(nota))
        {
            nota = parseInt(prompt("Error.Reingrese un numero "));
        }
        //ya tengo nota validad

        sexo = prompt("ingrese sexo: ").toLowerCase();

        //mientras que el sexo no sea valido

        while(!(sexo == 'm' || sexo == 'f'))
        {
            //mientras el sexo sea invalido
           // while( sexo != 'f' && sexo != 'm')
            
            sexo = prompt("Error. Reingrese sexo:" ).toLowerCase();
        }

        //alert("sexo " + sexo + " nota " + nota);

        //acumuladorNotas += numero;
        acumuladorNotas = acumuladorNotas + nota;

    }
    if(nota < notaBaja || i == 0)
    {
        notaBaja = nota;
        sexoBajo = sexo;
    }

    if(sexo =='m' && nota > 6)
    {
        contadorVaronesMayor++;
    }
    promedio = acumuladorNotas/5;
    alert("El promedio es " + promedio);
    document.write("Promedio: " + promedio + "<br>");
    document.write("Nota baja: " + notaBaja +  " Sexo: " + sexo + "<br>");
    document.write("Catidad de varones con mayor nota seis " + contadorVaronesMayor  ) 

}
