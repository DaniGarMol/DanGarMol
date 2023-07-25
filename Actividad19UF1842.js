function grabar(){
   let contador = 3;

    for(i=1; i<=contador; i++){
        let datos = [];
    
        cod = document.getElementById("codigo").value;
        nombre = document.formulario.name.value;
        age = document.formulario.Edad.value;
        mail = document.getElementById("mail").value;
        phone = document.getElementById("movil").value;
        option = document.getElementById("select").value;
    
        datos.push(cod, nombre, age, mail, phone, option);
        console.log(datos);

        let usuario = [];
        usuario.push(datos);
        console.log(usuario);
    }
   
    // datos[0] = datosusuario0
    // datos[1] = datosusuario1
    // datos[2] = datosusuario2
    // datos[3] = datosusuario3
    // datos[4] = datosusuario4
    // datos[5] = datosusuario5

    

}




//     let datos2 = new Array (6);
//     cod = document.getElementById("codigo").value;
//     nombre = document.formulario.name.value;
//     age = document.formulario.Edad.value;
//     mail = document.getElementById("mail").value;
//     phone = document.getElementById("movil").value;
//     option = document.getElementById("select").value;

//     datos2.push(cod, nombre, age, mail, phone, option);

//     let datos3 = new Array (6);
//     cod = document.getElementById("codigo").value;
//     nombre = document.formulario.name.value;
//     age = document.formulario.Edad.value;
//     mail = document.getElementById("mail").value;
//     phone = document.getElementById("movil").value;
//     option = document.getElementById("select").value;

//     datos3.push(cod, nombre, age, mail, phone, option);

//     datos[0] = datosusuario0
//     datos[1] = datosusuario1
//     datos[2] = datosusuario2
//     datos[3] = datosusuario3
//     datos[4] = datosusuario4
//     datos[5] = datosusuario5

//     console.log(datosusuario);
// }