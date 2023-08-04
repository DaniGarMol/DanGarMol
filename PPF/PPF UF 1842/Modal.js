const modal_container = document.getElementById("modal_container")
const modal_btn2 = document.getElementById("teacher")

modal_btn2.addEventListener("click", () => {
    createModal(`
    <section id="login">
    <form action="">
        <label for="">Usuario</label>
        <input type="text">

        <label for="">Contraseña</label>
        <input type="password">
        
        <input type="submit">
    </form>
    <p>En caso de no estar registrado.</p>
    <a href="registro.html"><button>Registrarse</button></a>
</section>
  `,"modal-desdeAbajo" )
})

const createModal = (content = "sin contenido", style = "") => {
    modal_container.innerHTML = `
      <div class="modal" id="modal">
        <div class="modal-content ${style}">
          ${content}
          <button class="modal-btn-closed" id="modal_btn_closed">x</button>
        </div>
      </div>
    `

    document.getElementById("modal").addEventListener("click", (e) => {
      console.log(e.target.id)
      if (e.target.id === "modal" || e.target.id === "modal_btn_closed") {
        modal_container.innerHTML = ""
      }
    })
  }