//Tomamos el valor de los niños
let ninos = parseInt (prompt("Introduce el número de niños: "));
console.log ("El número de niños es: " + ninos);

//Tomamos el valor de las niñas
let ninas = parseInt (prompt("Introduce el número de niñas: "));
console.log ("El número de niñas es: " + ninas);

//Calculamos el porcentaje
let total = parseInt(ninos) + parseInt(ninas);
let porcentajeninos = (parseInt(ninos) * 100)/ total;
let porcentajeninas = 100 - porcentajeninos;

//Mostramos los resultados
console.log ("Hay un " + porcentajeninos.toFixed(2) + "% de niños.");
console.log ("Hay un " + porcentajeninas.toFixed(2) + "% de niñas.");


//Función cálculo
// function calcular(nro1, nro2){
//     document.write("Sumar: " + (nro1+nro2) + "<br/>");
//     document.write("Restar: " + (nro1-nro2) + "<br/>");
//     document.write("Producto: " + (nro1*nro2) + "<br/>");
//     document.write("División: " + (nro1/nro2) + "<br/>");
//     document.write("<hr>");
// }

// //Llamada de la función con distintos parámetros
// calcular(10, 12);
// calcular(5, 6);
// calcular(34, 35);


// //Añadimos un for
// function calcular(nro1, nro2){
//     document.write("Sumar: " + (nro1+nro2) + "<br/>");
//     document.write("Restar: " + (nro1-nro2) + "<br/>");
//     document.write("Producto: " + (nro1*nro2) + "<br/>");
//     document.write("División: " + (nro1/nro2) + "<br/>");
//     document.write("<hr>");
// }
// for (var n= 1; n<=5; n++){
//     document.write(n + "<br/>");
//     calcular(n, 5);
// }


//Añadimos una variable booleana a los parámetros
// function calcular(nro1, nro2, ver = false){
//         if(ver == false){
//         document.write("Sumar: " + (nro1+nro2) + "<br/>");
//         document.write("Restar: " + (nro1-nro2) + "<br/>");
//         document.write("Producto: " + (nro1*nro2) + "<br/>");
//         document.write("División: " + (nro1/nro2) + "<br/>");
//         document.write("<hr>");
//     } else {
//         document.write("No tengo nada que mostrar!!!")
//     }
// }

//     // calcular(20, 5, true);
//     calcular(20, 5, false);
//     calcular(20, 5, )








