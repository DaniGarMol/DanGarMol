// var primerNumero = parseInt ( prompt ("Introduce el primer número: "));
// // var primerNumero = Number ( prompt ("Introduce el primer número: "));
// console.log ("El primer número es: " + primerNumero);
// var segundoNumero = parseInt (prompt ("Introduce el segundo número: "));
// console.log ("El segundo número es:" + segundoNumero);

// let suma = 0;
// suma = primerNumero + segundoNumero;
// console.log ("El resultado de la suma es: " + suma); 
// // suma = Number(primerNumero) + Number(segundoNumero);


// let resta = 0;
// resta = primerNumero - segundoNumero;
// console.log ("El resultado de la resta es " + resta);
// document.write ("El resultado de la resta es " + resta + "</br>");

// let producto = 0;
// producto = primerNumero * segundoNumero;
// console.log ("El resultado del producto es " + producto);
// document.write ("El resultado del producto es " + producto + "<br/>");

// let division = 0;
// division = primerNumero / segundoNumero;
// console.log ("El resultado de la división es " + division);
// document.write ("El resultado de la división es " + division + "<br/>");


function actividad2(){
    var primerNumero = Number(document.getElementById("primerNumero").value);
    var segundoNumero = Number(document.getElementById("segundoNumero").value);


suma = primerNumero + segundoNumero;
resta =  primerNumero - segundoNumero;
producto = primerNumero * segundoNumero;
division = primerNumero / segundoNumero;

document.getElementById("suma").innerHTML="El resultado de la suma es: " + suma + "<br/>"; 
document.getElementById("resta").innerHTML="El resultado de la resta es: " + resta + "</br>";
document.getElementById("producto").innerHTML="El resultado del producto es: " + producto + "<br/>";
document.getElementById("division").innerHTML="El resultado de la división es: " + division + "<br/>";

}