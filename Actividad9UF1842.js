//Ejercicio 9.1 Introduce un valor, muestra la tabla de ese valor.
let tabla = parseInt(prompt("¿Qué tabla de multiplicar quieres ver?"));
alert("Quieres ver la tabla del " + tabla);

document.write("<h1>La Tabla del " + tabla+ "</h1><br/>");
for (var n=0; n<=10; n++){
document.write( n + " x " + tabla + " = " + (n*tabla) + "<br/>");
}


//Ejercicio 9.2 Muestra todas las tablas del 0 al 10.
for( var i=0; i<=10; i++){
    document.write("<h1>La Tabla del " + i + "</h1><br/>");
    for (var n=0; n<=10; n++){
        document.write( n + " x " + i + " = " + (n*i) + "<br/>");
    }
}


//Ejercicio 9.3 Muestra todas las tablas del 0 hasta la del valor mostrado.
for( var i=0; i<=tabla; i++){
    document.write("<h1>La Tabla del " + i + "</h1><br/>");
    for (var n=0; n<=10; n++){
        document.write( n + " x " + i + " = " + (n*i) + "<br/>");
    }
}
