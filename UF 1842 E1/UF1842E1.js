let bachiller = prompt("¿Tienes el título de bachiller?");
alert ("Su respuesta es: " + bachiller);

if (bachiller.toLowerCase() === "si"){
    document.write ("Puedes acceder al grado superior.");
} else {
    let prueba = prompt("¿Tienes la prueba de acceso superada?");
    alert("Su respuesta es: " + prueba);

    if (prueba.toLowerCase() === "si"){
        document.write ("Puedes acceder al grado superior.");
    } else {
        document.write("No puedes acceder a un grado superior.");
    }
}