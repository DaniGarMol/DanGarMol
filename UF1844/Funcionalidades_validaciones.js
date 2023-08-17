$(document).ready(function(){

$("#botonAñadir").click(function(e){
    e.preventDefault();

    var datos = {
    usuario: $('input[name="usuario"]').val(),
    contraseña: $('input[name="contraseña"]').val()
};

    $(".datos").html(datos);

});





});