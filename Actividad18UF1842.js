function grabar(){
    let datos = [];
    cod = document.getElementById("codigo").value;
    nombre = document.formulario.name.value;
    age = document.formulario.Edad.value;
    mail = document.getElementById("mail").value;
    phone = document.getElementById("movil").value;
    option = document.getElementById("select").value;

    datos.push(cod, nombre, age, mail, phone, option);

    console.log(datos);

    
    document.getElementById("muestra").innerHTML= datos.join("</br>");
}
