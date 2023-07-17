//Leemos el primer numero
let numero1 = parseInt ( prompt("Introduce el primer número: "));
console.log ("El primer número es: " + numero1);

//Leemos el segundo numero
let numero2 = parseInt (prompt ("Introduce el segudno número: "));
console.log ("El segundo número es: " + numero2);

if (numero1==numero2) {
    console.log ("El primer número es igual que el segundo.")
}
else if (numero1 > numero2){
    console.log ("El primer número es mayor que el segundo.")
}
else {
    console.log ("El primer número es menor que el segundo número.")
}