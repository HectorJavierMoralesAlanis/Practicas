//Constatntes para mostrar los campos y botones
const usuario = document.querySelector("#usuario");
const contrasena = document.querySelector("#contrasena");
const boton = document.querySelector("#boton");
let formulario = document.querySelector(".login");


//variables para almacenar los datos
let usuarioDato = document.getElementById("user");
let contra = document.querySelector(".contrasena #password");

//Evento para mostrar el contenido de la pagina
window.addEventListener("DOMContentLoaded",function(){
    datosU();
    //contrasenaU();
    botonS();
})

//Funcion para mostrar en pantalla el campo para introducir el usuario

function datosU(){
    let mostrarUsuarios= `<label>Ingrese el usuario</label> <input type="text" id="user" placeholder="Ingrese el usuario">`;
    usuario.innerHTML = mostrarUsuarios;
}

//Funcion para ostrar en pantalla el campo para introducitr la contraseña
function contrasenaU(){
    let mostrarContrasena = `<label>Ingrese la contraseña</label> <input type="password" id="password" placeholder="Ingrese la contraseña">`;
    contrasena.innerHTML = mostrarContrasena;
}

//Funcion para mostrar el boton 
function botonS(){
    let mostrarBoton = `<button type="submit" onclick="return iniciarSesion()">Entrar</button>`;
    boton.innerHTML = mostrarBoton;
}

function iniciarSesion(){
    
    //Condicion para la seleccion de usuario y que muestre el respectivo formulario
    if(user.value=="jperez"&&contra.value=="mipssw"){
        return formulario.action = "clientes.html";

    }

    //Condicion para la seleccion de vendedor y que muestre el respectivo formulario
    if(user.value=="vendedor"&&contra.value=="mipssw-vens"){
        return formulario.action = "vendedor.html";
    }

    //Condicion para evaluar erroneo si los datos no son los correctos
    if((user.value!="jperez"&&contra.value!="mipssw")||(user.value!="vendedor"&&contra.value!="mipssw-vens")){
        return false();
    }
}