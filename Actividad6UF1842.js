var clave = prompt("Introduce una clave de 6 caracteres: ");

if (clave == "123456"){
    alert( "Su clave es la correcta. ¡Bienvenido!");
}

else {
    for (var n=1; n<=3; n++){
        if( n<3){
            alert("Su clave no es correcta. Intentelo de nuevo.") + prompt("Introduce una clave de 6 caracteres: ");
        }
        else {
            alert("Su acceso está denegado. Póngase en contacto con el administrador.");
        }
    }
}