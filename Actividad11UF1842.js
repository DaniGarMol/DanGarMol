var usuario = prompt("Introduce tu nombre de usuario: ");


if (usuario == "Admin" || usuario == "admin" || usuario == "ADMIN"){
    alert ("¡Bienvenido Admin!");
    var cont = prompt("Introduce tu contraseña: ");

    if( cont == "Webmaster"){
    alert ("Bienvenido" + cont);
    }else if (cont === "" ||cont === null){
        alert("Cancelado.")

    }else{
        alert ("Contraseña incorrecta. Acceso denegado.")
    }

}else if (usuario === null ||usuario === "" ){
    alert("Cancelado.");

}else{
     alert ("Usuario Incorrecto.")
}

