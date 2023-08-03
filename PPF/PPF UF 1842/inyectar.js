window.addEventListener('load', ()=>{
    let inicio, curso, contacto, contenido;
    inicio = document.querySelector("#añadirInicio");
    curso = document.querySelector("#añadirCurso");
    contacto = document.querySelector("#añadirContacto");
    contenido = document.querySelector(".informacion");

    contenido.innerHTML=`<img src="" alt="">
    <h1>Entra en nuestra Academia.</h1>
    <p>Crea tu itinerario informativo.</p>
    <button><a href="PPF_UF_1842_contacto.html">INFORMACIÓN</a></button>`

    inicio.addEventListener('click', function(){
        contenido.innerHTML=`<img src="" alt="">
        <h1>Entra en nuestra Academia.</h1>
        <p>Crea tu itinerario informativo.</p>
        <button><a href="PPF_UF_1842_contacto.html">INFORMACIÓN</a></button>`
    })

    curso.addEventListener('click', function(){
        contenido.innerHTML=`<video src="media/VideoClase.mp4" controls></video>`
    })

    contacto.addEventListener('click', function(){
        contenido.innerHTML=`<div class="formulario"><form>
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre">
        <label for="mail">Correo electrónico</label>
        <input type="mail" id="mail">
        <label for="asunto">Asunto</label>
        <input type="text" id="asunto">
        <label for="mensaje">Mensaje</label>
        <input type="textarea" id="mensaje">
        <button id="botonAñadir" value="Añadir" onclick="formulario()">Enviar</button>
     </form><p class="legal">Texto Legal.</p>
     </div>`
    })
})


function formulario(){
    var alumno={
        nombres: document.querySelector("#nombre").value,
        correo: document.querySelector("#mail").value,
        asunto: document.querySelector("#asunto").value,
        mensaje: document.querySelector("#mensaje").value
    }
    var alumnos = [];
    alumnos.push(alumno);
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
}