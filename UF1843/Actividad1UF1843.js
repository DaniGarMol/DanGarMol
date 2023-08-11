$(document).ready(function(){

    // $('#datos').load("https://reqres.in/");
    
    // Recoger datos petición AJAX
    // Get y Post
        $.get("https://reqres.in/api/users",{page: 2}, function(respuesta){
            respuesta.data.forEach((element, index)=>{
                $('#datos').append("<p>"+element.first_name+" "+element.last_name+"</p>");
            });
        });
    
        $('#formulario').submit(function(e){
            e.preventDefault();
            var usuario = {
                codigo: $('input[name="codigo"]').val(),
                nombre: $('input[name="nombre"]').val(),
                apellidos: $('input[name="apellidos"]').val(),
                email: $('input[name="email"]').val(),
                edad: $('input[name="edad"]').val(),
                imagen: $('input[name="imagen"]').val()
            };
            console.log(usuario);
    
            // $.post($(this).attr("action"), usuario, function(respuesta){
            //     console.log(respuesta);
            // }).done(function(){
            //     alert("Usuario añadido correctamente");
            // });
    
            $.ajax({
                type: 'POST',
                url: $(this).attr("action"),
                data: usuario,
                beforeSend: function(){
                    console.log("Enviando usuario...");
                },
                success: function(respuesta){
                    console.log(respuesta);
                },
                error: function(){
                    console.log("Ha ocurrido un error");
                },
                timeout: 100
            });
        });
    });
    
    // boton.addEventListener('click', () =>{
    // imagen.className = "nombre de la clase"
    // });