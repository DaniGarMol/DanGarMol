// JSON - JavaScript Object NOTation
//Nos permite crear objetos de forma rápida

var alumno = {
    nombre: "Juan López",
    correo: "juanlopez@gmail.com",
    telefono: "555 555 555"
}
// var alumnodos = {
//     nombre: "José García",
//     correo: "josegarcia@gmail.com",
//     telefono: "555 777 777"
// }

// alumno.nombre = "Juan López López";

// var alumnos = [alumno, alumnodos];
// console.log(alumnos);

// var total_alumnos = document.querySelector("#totalalumnos");

// var indice;
// for(indice in alumnos){
//     var p=document.createElement("p");
//     p.append(alumnos[indice].nombre + "------");
//     p.append(alumnos[indice].correo + "------");
//     p.append(alumnos[indice].telefono + "------");
//     total_alumnos.append(p);
// }

//LocalStorage
//Memoria en el Navegador

//Comprobación de que el navegador tiene disponible el LocalStorage

if(typeof(Storage) !== 'undefined'){
    console.log("Disponible");
}else{
    console.log("No disponible");
}

//Guardar datos
localStorage.setItem("Listado", "Listado de Alumnos");
//La primera palabra entre comillas es la palabra clave, y la segunda es el valor.

//Recuperar Datos
localStorage.getItem("Listado");

//Guardar Objetos JSON
localStorage.setItem("alumno", JSON.stringify(alumno));
//Con la orden JSON convertimos en una cadena de caracteres, string, el objeto "alumnos"

var alumnojs = JSON.parse(localStorage.getItem("alumno"));

document.querySelector("#totalalumnos").append(alumnojs.nombre + "------" + alumnojs.correo + "------" + alumnojs.telefono);

//Borrar Datos concretos en LocalStorage
localStorage.removeItem("Listado");

//Vacia de DAtos todo el Caché del LocalStorage
localStorage.clear();