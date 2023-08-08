$(document).ready(function(){


$( function() {
    $( ".puntos" ).draggable();
  } );

$( function() {
    $( document ).tooltip();
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
 
    $( "#opener" ).on( "dblclick", function() {
      $( "#dialog" ).dialog( "open" );
    });

 $( "#dialog01" ).dialog({
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
 
    $( "#opener01" ).on( "dblclick", function() {
      $( "#dialog01" ).dialog( "open" );
    });

     $( "#dialog02" ).dialog({
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
 
    $( "#opener02" ).on( "dblclick", function() {
      $( "#dialog02" ).dialog( "open" );
    });

    $( "#dialog03" ).dialog({
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
 
    $( "#opener03" ).on( "dblclick", function() {
      $( "#dialog03" ).dialog( "open" );
    });

    $( "#dialog04" ).dialog({
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
 
    $( "#opener04" ).on( "dblclick", function() {
      $( "#dialog04" ).dialog( "open" );
    });

  } );




  })