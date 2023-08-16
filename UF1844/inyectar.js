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
    

    // contenido.innerHTML=`<img src="" alt="">
    // <h1>Entra en nuestra Academia.</h1>
    // <p>Crea tu itinerario informativo.</p>
    // <button><a href="PPF_UF_1842_contacto.html">INFORMACIÓN</a></button>`

    acceso.addEventListener('click', function(){
        
        contenido.innerHTML=`<div class="formulario"><h3>Acceso</h3>
        <form action="">
        <label for="">Usuario</label>
        <input type="text" id="usuario" name="usuario">

        <label for="">Contraseña</label>
        <input type="password" id="contraseña" name="contraseña">
        
        <button id="botonAñadir" value="Añadir">Enviar</button>
        </form></div>`
    })

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

        <label>Url Imagen</label>
        <input type="text" id="ImagenAñadir" name="imagen">

        <button id="botonAñadir" value="Añadir" onclick="formulario()">Enviar</button>
     </form><p class="legal">Texto Legal.</p>
     </div>`
    })

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

        <button id="botonAñadir" value="Añadir" onclick="formulario()">Enviar</button>
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
})


// function formulario(){
//     var alumno={
//         nombres: document.querySelector("#nombre").value,
//         correo: document.querySelector("#mail").value,
//         asunto: document.querySelector("#asunto").value,
//         mensaje: document.querySelector("#mensaje").value
//     }
//     var alumnos = [];
//     alumnos.push(alumno);
//     localStorage.setItem('alumnos', JSON.stringify(alumnos));
// }

$( function() {
    $( "#accordion" ).accordion();
  } );