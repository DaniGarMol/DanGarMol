$(document).ready(function(){
    //selectores
    var rojo = $("#rojo");
    rojo.css("background-color", "red")
    .css("color", "white");
    $("#amarillo").css("background-color", "yellow")
    .css("color", "black");
    $("#verde").css("background-color", "green")
    .css("color", "white");

    rojo.addClass("recuadro");
    $("#amarillo").removeClass(".recuadro");

    var elemento = $(".recuadro");
    elemento.css("border", "2px solid black").css("font-zise", "1.5em")

   $("[title=Google]").css("color", "red") 
   $('[title]').css('text-decoration', 'none')

   //Eventos

   var contenedor = $('#contenedor');
//    contenedor.mouseover(function(){
//     $(this).css('background', 'red');
// })
// contenedor.mouseout(function(){
//     $(this).css('background', 'green');
// })

//Es lo mismo que arriba pero con funciones
function cambiaRojo(){
    $(this).css('background', 'red');
}
function cambiaRVerde(){
    $(this).css('background', 'green');
}
contenedor.hover(cambiaRojo, cambiaRVerde);

$(document).mousemove(function(){
    $('body').css("cursor", "none");
    $('#sigueme')
    .css("left", event.clientX)
    .css("top", event.clientY)
});

$('#add-button')
    .click(function(){
        // .append  Añade al final del ultimo elemento

        // $('#menu').append('<li><a href="'+$('#add-link').val()+'">Ir a nuevo enlace</a></li>');
        // $('add-link').val('');   

        // prepend  Añade al inicio del primer elemento
        $('#menu').prepend('<li><a class="enlace" href="'+$('#add-link').val()+'"></a></li>');
        $('add-link').val(''); 
        reloadLinks();
     })

     function reloadLinks() {
        $('a').each(function(index){
            var esto = $(this);
            var enlace = esto.attr("href");
            esto.attr("target", "_blank")
            esto.text(enlace);
            console.log(esto);
        })
     }

// $('#animar').click(function(){
//     var caja=$('#contenedor');

//     caja.animate({
//         marginLeft: '500px',
//         fontSize: '40px',
//         height: '120px'}, 4000)

//         .animate({
//             borderRadius: '25px',
//             marginTop: '200px'
//         }, 'fast')
// })

$('#contenedor').draggable();

});