window.addEventListener('load', ()=>{
    let acceso, registro, info, curso, contacto, contenido;
    acceso = document.querySelector("#añadirAcceso");
    registro = document.querySelector("#añadirRegistro");
    info = document.querySelector("#añadirInfo");
    curso = document.querySelector("#añadirCurso");
    contacto = document.querySelector("#añadirContacto");
    legal = document.querySelector("#añadirLegal");
    app = document.querySelector("#añadirApli");
    contenido = document.querySelector(".informacion");
    

    acceso.addEventListener('click', function(){
        
        contenido.innerHTML=`<div class="formulario"><h3>Acceso</h3>
        <form action="">
        <label for="">Usuario</label>
        <input type="text" id="usuario" name="usuario">

        <label for="">Contraseña</label>
        <input type="password" id="contraseña" name="contraseña">
        
        <button id="botonAcceso" value="Añadir">Enviar</button>
        </form></div>`;

        $("#botonAcceso").click(function(e){
            e.preventDefault();

            var usuario = $('input[name="usuario"]').val();
            var contraseña = $('input[name="contraseña"]').val();

            var datos = `Usuario: ${usuario}`;

            $("#userdata").html("<p>"+ datos +"</p>");

    });

});

//STILOS COLORES

$(document).ready(function(){
    var naranja = $("#uno");
    var rojo = $("#dos");
    var verde = $("#tres");
    var azul = $("#cuatro");

    $(naranja).click(function(){
        $("li").css('color', 'darkorange');
        $("a").css('color', 'darkorange');
        $(".titulo").css('background-color', 'darkorange');
        $("header").css('background-color', 'rgba(255, 140, 0, 0.295)');
        $("footer").css('background-color', 'rgba(255, 140, 0, 0.295)');
    
    })

    $(rojo).click(function(){
        $("li").css('color', 'darkred');
        $("a").css('color', 'darkred');
        $(".titulo").css('background-color', 'darkred');
        $("header").css('background-color', 'rgba(139, 0, 0, 0.24)');
        $("footer").css('background-color', 'rgba(139, 0, 0, 0.24)');
        
        
    })

    $(verde).click(function(){
        $("li").css('color', 'darkgreen');
        $("a").css('color', 'darkgreen');
        $(".titulo").css('background-color', 'darkgreen');
        $("header").css('background-color', 'rgba(0, 100, 0, 0.384)');
        $("footer").css('background-color', 'rgba(0, 100, 0, 0.384)');
        
    })

    $(azul).click(function(){
        $("li").css('color', 'rgb(0, 81, 255)');
        $("a").css('color', 'rgb(0, 81, 255)');
        $(".titulo").css('background-color', 'rgb(0, 81, 255)');
        $("header").css('background-color', 'rgba(0, 81, 255, 0.404)');
        $("footer").css('background-color', 'rgba(0, 81, 255, 0.404)');
        
    })

});
    registro.addEventListener('click', function(){
        contenido.innerHTML=`<div class="formulario">
        <h3>Registro</h3>
        <form>
        
        <label>Nombre del Alumno</label>
        <input type="text" id="nombreAñadir" name="nombre">

        <label>Apellidos del Alumno</label>
        <input type="text" id="apellidoAñadir" name="apellidos">

        <label>Correo Electrónico</label>
        <input type="email" id="emailAñadir" name="email">

        <label>Edad</label>
        <input type="number" id="edadAñadir" name="edad">

        <label>Contraseña</label>
        <input type="password" id="passAñadir" name="contraseña">

        <label>Url Imagen</label>
        <input type="text" id="ImagenAñadir" name="imagen">

        <button id="botonAñadir" value="Añadir">Enviar</button>
     </form>
     <p class="legal">Texto Legal.</p>
     </div>`;

     $("#botonAñadir").click(function(e){
        e.preventDefault();

        var nombre = $('#nombreAñadir').val();
        var apellidos = $('#apellidoAñadir').val();
        var email = $('#emailAñadir').val();
        var edad = $('#edadAñadir').val();
        var contraseña = $('#passAñadir').val();
        var imagen = $('#ImagenAñadir').val();
        var datos2 = {
            nombre: nombre,
            apellidos: apellidos,
            email: email,
            edad: edad,
            contraseña: contraseña,
            imagen: imagen
        };

        //Obtener datos existentes del Local Storage si los hay
        var registros = JSON.parse(localStorage.getItem('registros')) || [];
        registros.push(datos2);

        //Almacenar los datos actualizados en el Local Storage
        localStorage.setItem('registros', JSON.stringify(registros));

        //Limpiar el formulario
        $('input[type="text"], input[type="email"], input[type="number"]').val('');

     });


    });

    info.addEventListener('click', function(){
        contenido.innerHTML=`<div class="formulario">
        <h3>Información</h3>
        <p class="legal">Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br> Repellendus quo ut minus praesentium aliquam explicabo saepe quas, deserunt ab expedita dolor deleniti modi labore maxime?<br> Recusandae quaerat cupiditate corrupti laudantium?</p>
     </div>`
    })

    curso.addEventListener('click', function(){
        contenido.innerHTML=`<div class="formulario">
        <h3>Curso</h3>
        <video src="media/VideoClase.mp4" controls></video>
        <p class="legal">Todos los derechos legales reservados.</p>
     </div>`
    })
  

    contacto.addEventListener('click', function(){
        contenido.innerHTML=`<div class="formulario"><form action="">
        <label for="">Nombre</label>
        <input type="text" placeholder="Nombre y Apellidos">

        <label for="">Correo</label>
        <input type="email" placeholder="ejemplo@gmial.com">

        <label for="">Mensaje</label>
        <textarea name="" id="" cols="30" rows="10" placeholder="Escriba un comentario"></textarea>

        <button id="botonAñadir" value="Añadir">Enviar</button>
     </form><p class="legal">Texto Legal.</p>
     </div>`
    })

    legal.addEventListener('click', function(){
        contenido.innerHTML=`<div class="formulario">
        <h3>Textos Legales</h3>
        <p class="legal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id velit sapiente perferendis, unde quia esse fugit aspernatur odio praesentium quidem placeat minus accusamus aut modi earum sequi iste corrupti.<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id velit sapiente perferendis, unde quia esse fugit aspernatur odio praesentium quidem placeat minus accusamus aut modi earum sequi iste corrupti.</p>
     </div>`
    })

    app.addEventListener('click', function(){
        contenido.innerHTML=`<div class="formulario">
        <h3>Información de Uso de la Aplicación</h3>
        <p class="legal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id velit sapiente perferendis, unde quia esse fugit aspernatur odio praesentium quidem placeat minus accusamus aut modi earum sequi iste corrupti.<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id velit sapiente perferendis, unde quia esse fugit aspernatur odio praesentium quidem placeat minus accusamus aut modi earum sequi iste corrupti.</p>
     </div>`
    })
});

$( function() {
    $( "#accordion" ).accordion();
  } );

