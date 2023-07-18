function Actividad2(){
    var primerNumero = parseInt ( prompt ("Introduce el primer número: "));
// var primerNumero = Number ( prompt ("Introduce el primer número: "));
console.log ("El primer número es: " + primerNumero);
var segundoNumero = parseInt (prompt ("Introduce el segundo número: "));
console.log ("El segundo número es:" + segundoNumero);

let suma = 0;
suma = primerNumero + segundoNumero;
console.log ("El resultado de la suma es: " + suma); 
// suma = Number(primerNumero) + Number(segundoNumero);


let resta = 0;
resta = primerNumero - segundoNumero;
console.log ("El resultado de la resta es " + resta);
document.write ("El resultado de la resta es " + resta + "</br>");

let producto = 0;
producto = primerNumero * segundoNumero;
console.log ("El resultado del producto es " + producto);
document.write ("El resultado del producto es " + producto + "<br/>");

let division = 0;
division = primerNumero / segundoNumero;
console.log ("El resultado de la división es " + division);
document.write ("El resultado de la división es " + division + "<br/>");

}

function Actividad3(){
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
}

function Actividad4(){
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
}

function Actividad5(){
    let compra = parseInt(prompt("Introduce el importe de la compra: "));
console.log ("El importe de la cuenta es: " + compra);

let mes = prompt("Introduce el mes: ");
console.log ("La compra se realizó en el mes de " + mes);

if( mes == "octubre" || mes == "Octubre" || mes == "OCTUBRE"){
    let total = 0;
    total = compra * 0.85;
    document.write("El importe de su compra es " + total);
}

else{
    document.write("El importe de su compra es " + compra)
}
}

function Actividad6(){
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
}

