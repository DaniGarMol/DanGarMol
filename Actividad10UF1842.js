let compra = parseInt(prompt("Introduce el importe de la compra: "));
alert ("El importe de la compra es: " + compra + "€");

let mes = prompt("Introduce el mes: ");
alert ("La compra se realizó en el mes de " + mes);
mes = (mes.toLowerCase());

let descuento;

switch (mes){
    case "enero": case "febrero":
        descuento = compra * 0.20;
        document.write("Su descuento es del 20%. <br/> El importe de su compra es " + (compra - descuento) + "€");
        break;
    case "julio": case "agosto":
        descuento = compra * 0.15;
        document.write("Su descuento es del 15%. <br/> El importe de su compra es " + (compra - descuento) + "€");
        break;
    case "octubre":
        descuento = compra * 0.15;
        document.write("Su descuento es del 15%. <br/> El importe de su compra es " + (compra - descuento) + "€");
        break;
    case "noviembre": case "diciembre":
        descuento = compra * 0.25;
        document.write("Su descuento es del 25%. <br/> El importe de su compra es " + (compra - descuento) + "€");
        break;
    default:
        document.write("El importe de su compra es " + compra + "€");
        break;

}