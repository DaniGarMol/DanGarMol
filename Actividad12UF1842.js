//Versión 1. Inyecta en HTML vacio

// var datos = prompt("Introduce los datos a comprobar: ");
// var resultado = eval(datos);

// document.write("Resultado: " + resultado);

//Versión 2. En HTML con input, button, etc. Función onclick.

function comprobar(){
    let operador = document.getElementById("operadores").value;
    resultado = eval(operador);

    document.getElementById("resultado").innerHTML="Resultado: " + resultado;
}