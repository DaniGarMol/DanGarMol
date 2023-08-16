$(document).ready(function(){

    $("#uno").click(function(){
        $(".cont1").css("background-image", "url('../media/avatar5.jpg')");
        $(".cont1").css("background-size", "contain");
        $(".cont1").css("color", "#ffffff");

    });

    $( function() {
        $( ".cont2" ).draggable();
      } );

      $( function() {
        $( document ).tooltip();
      } );

      $( function() {
        $( ".cont4" ).resizable();
      } );

      $( function() {
        $( "#dialog" ).dialog({
          autoOpen: false,
          show: {
            effect: "blind",
            duration: 1000
          },
          hide: {
            effect: "fade",
            duration: 1000
          }
        });
     
        $( "#cinco" ).on( "click", function() {
          $( "#dialog" ).dialog( "open" );
        });
      } );

      $("#seis").click(function(){
        $(".cont6").css("background-color", "#000000");
        $(".cont6").css("color", "#ffffff");

    });

    $("#siete").click(function(){
        $(".textcont7").remove();
       
    });

    $("#ocho").click(function(){
        $(".parrafocont8").toggle('blind', 1000);
       
    });

    $("#nueve").click(function() {
        $(".textcont9").hide();
        $(".parrafocont9").hide();
        $( ".cont9" ).datepicker();
      } );

      $("#diez").click(function(){
        $(".textcont10").toggle('clip', 1000);
       
    });

    $("#once").click(function(){
        $(".textcont11").toggle('bounce', 1000);
        $(".parrafocont11").toggle('bounce', 1000);
       
    });

    $(function() {
        $("#doce").on('click', function(){
            $(".contenedor").effect("explode", 1000);
            $("header").effect("explode", 500);
            $("footer").effect("explode", 700);
        });
    })
})