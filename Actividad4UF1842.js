//Tomamos el valor de los niños
let niños = parseInt (prompt("Introduce el número de niños: "));
console.log ("El número de niños es: " + niños);

//Tomamos el valor de las niñas
let niñas = parseInt (prompt("Introduce el número de niñas: "));
console.log ("El número de niñas es: " + niñas);

//Calculamos el porcentaje
let total = parseInt(niños) + parseInt(niñas);
let porcentajeniños = (parseInt(niños) * 100)/ total;
let porcentajeniñas = 100 - porcentajeniños;

//Mostramos los resultados
console.log ("Hay un " + porcentajeniños.toFixed(2) + "% de niños.");
console.log ("Hay un " + porcentajeniñas.toFixed(2) + "% de niñas.");