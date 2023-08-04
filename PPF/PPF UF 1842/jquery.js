$(document).ready(function(){
    $(".informacion #info").click(function(){
    $(".informacion").css("background-image", "url('media/imagen-curso.jpg')");
    $(".informacion h1,p").css("color", "#ffff00")
})

    $("#access").click(function(){
        $("body, button, a, li").css("font-size", "120%");
        $("body, .principal").css("background-color", "black");
        $("footer").css("color", "white");
        $("button").css("background-color", "white");
        $("button, a, li").css("color", "black");
    })

})

