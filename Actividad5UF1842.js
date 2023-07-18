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