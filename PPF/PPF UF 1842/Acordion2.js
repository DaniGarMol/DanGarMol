//Accordion
$( function() {
    $( "#seccion3" ).accordion();
  } );

  //Tooltip
  $( function() {
    $( document ).tooltip();
  } );
  
  $(document).ready(function(){
  //Alto Contraste
  $("#access").click(function(){
    // $("body, button, a, li").css("font-size", "120%");
    $("body, #principal").css("background-color", "black");
    $("footer, a, li, h2, h1").css("color", "white");
    $("button").css("background-color", "white");
    $("button").css("color", "black");
    $(".ui-accordion .ui-accordion-header").css("background-color", "#000000");
    $(".ui-accordion .ui-accordion-header").css("color", "#ffffff");
})


$("#access2").click(function(){
    $("body, button, a, li, #principal, h2, #seccion3").css("font-size", "120%");
    $("#seccion3").css("z-index", "5");

})

})
