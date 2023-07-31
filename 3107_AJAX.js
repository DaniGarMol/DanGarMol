// Método Fetch
//Realizar peticiones AJAX de una manera más simple de como se hacia antes.

var div_usuarios = document.querySelector('#usuarios');
var usuario = [];

fetch('https://reqres.in/api/users?page=2')
.then(data => data.json())
.then(user =>{
    usuarios = user.data;
    console.log(usuarios);

    usuarios.map((user, i)=>{
        let nombre = document.createElement('h3');
        nombre.innerHTML = (i+1) + " " + user.first_name + " " + user.last_name;

        div_usuarios.append(nombre);
        
        document.querySelector('.loading').style.display ="none";
    })
});

//TRY para hacer una prueba (encontrar errores)

try{
    var year = 2023;
    alert(year);
}
//Si el código anterior tuviese un problema/fallo saltaría el siguiente aviso
catch(error){
    console.log(error);
    alert("Ha ocurrido un error en el código");
}
//Y en la consola nos marcaría la línea donde se encuentra el error.