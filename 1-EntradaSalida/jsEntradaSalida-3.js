/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    //Creo una varaible
    var nombre;
    //con document.getElementById pido el ID al html
    nombre = document.getElementById("elNombre").value;
    //devuelvo un alert con la variable Nombre
    alert(nombre);

    //nota: aca estoy tomando datos del HTML
}


