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

function acti3(){
    var numero1 = Number(document.getElementById("n1").value);
    var numero2 = Number(document.getElementById("n2").value);

    if (numero1 == numero2) {
        document.getElementById("igual").innerHTML="Resultado: El primer número es igual que el segundo.<br/>";
    }
    else if (numero1 > numero2){
        document.getElementById("igual").innerHTML="Resultado: El primer número es mayor que el segundo.<br/>";
    }
    else {
        document.getElementById("igual").innerHTML="Resultado: El primer número es menor que el segundo.<br/>";
    }
}

function actividad4(){
    var ninos = Number(document.getElementById("ninos").value);
    var ninas = Number(document.getElementById("ninas").value);

    let total = parseInt(ninos) + parseInt(ninas);
    let porcentajeninos = (parseInt(ninos) * 100)/ total;
    let porcentajeninas = 100 - porcentajeninos;

    document.getElementById("porcentaje").innerHTML="Hay un " + porcentajeninos.toFixed(2) + "% de niños.<br/>" + "Hay un " + porcentajeninas.toFixed(2) + "% de niñas.";
}

function actividad5(){
    var compra = Number(document.getElementById("compra").value);
    var mes = document.getElementById("mes").value;
    mes = (mes.toLowerCase());


    if( mes == "octubre"){
        let total = compra*0.85;
        document.getElementById("descuento").innerHTML= "El importe de su compra es " + total + "€";
    }
    
    else{
        document.getElementById("descuento").innerHTML= "El importe de su compra es " + compra + "€";
    }
}

function actividad6(){
   const passCorrecto = "123456"; 
    let oportunidades = 3;

    while (oportunidades > 0) {
        const clave = prompt(`Introduce una clave de 6 caracteres: (${oportunidades} intentos restantes):`);

        if (clave === passCorrecto){
            document.getElementById("login").innerHTML="Su clave es la correcta. ¡Bienvenido!";
            return true;
        } else {
            oportunidades--;
            alert("Su clave no es correcta. Intentelo de nuevo.");
       }
    }
    document.getElementById("login").innerHTML="Oportunidades agotadas. Su acceso está denegado. Póngase en contacto con el administrador.";
    return false;
}

function actividad10(){
    var buy = Number(document.getElementById("buy").value);
    var month = document.getElementById("month").value;
    month = (month.toLowerCase());

    let descuento;

    switch (month){
        case "enero": case "febrero":
            descuento = buy * 0.20;
            document.getElementById("precio").innerHTML= "Su descuento es del 20%. <br/> El importe de su compra es " + (buy - descuento) + "€";
            break;
        case "julio": case "agosto":
            descuento = buy * 0.15;
            document.getElementById("precio").innerHTML= "Su descuento es del 15%. <br/> El importe de su compra es " + (buy - descuento) + "€";
            break;
        case "noviembre": case "diciembre":
            descuento = buy * 0.25;
            document.getElementById("precio").innerHTML= "Su descuento es del 25%. <br/> El importe de su compra es " + (buy - descuento) + "€";
            break;
        default:
            document.getElementById("precio").innerHTML= "El importe de su compra es " + buy + "€";
            break;
    }
}

function actividad11(){
    var usuario = prompt("Introduce tu nombre de usuario: ");


if (usuario == "Admin" || usuario == "admin" || usuario == "ADMIN"){
    alert ("¡Bienvenido Admin!");
    var cont = prompt("Introduce tu contraseña: ");

    if( cont == "Webmaster"){
    document.getElementById("usuario").innerHTML="Bienvenido" + cont;
    }else if (cont === "" ||cont === null){
        document.getElementById("usuario").innerHTML="Cancelado.";

    }else{
        document.getElementById("usuario").innerHTML="Contraseña incorrecta. Acceso denegado.";
    }

}else if (usuario === null ||usuario === "" ){
    document.getElementById("usuario").innerHTML="Cancelado.";

}else{
    document.getElementById("usuario").innerHTML="Usuario Incorrecto.";
}
}

function comprobar(){
    let operador = document.getElementById("operadores").value;
    resultado = eval(operador);

    document.getElementById("resultado").innerHTML="Resultado: " + resultado;
}


function cambiar(){
    document.getElementById('matrix').src="media/img1.webp";
    
  }
  function volver(){
    document.getElementById('matrix').src="media/img3.webp";

  }

  function elefante(){
    document.getElementById("elefante").src="media/arbol-fuego.jpg";
  }

  document.getElementById("elefante").addEventListener("click", elefante);