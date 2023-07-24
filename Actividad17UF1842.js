function pulsar(){
    var arr = [];
    arr= document.formulario.miarea.value.split(" ");

    var n_palabras=arr.length;
    var p_palabras=arr[0];
    var u_palabras=arr[arr.length-1];

    document.getElementById("resultado").innerHTML="Número de palabras: " + n_palabras + "</br> Primera palabra: " + p_palabras + "</br> Última palabra: "+ u_palabras;
}

