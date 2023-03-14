const usuario = document.querySelector("#id");
const nombre = document.querySelector("#nombre");
const button = document.querySelector("#botonS");

window.addEventListener("DOMContentLoaded", function () {
    campoUsuario(usuario);
    campoNombre();
    boton();
})

//Funcion del campo usuario
function campoUsuario(){
    let mostrarUsuario = `<label for="clave">Ingrese el ID </label> <input type="text" id="iUser" class="form-control">`;
    usuario.innerHTML = mostrarUsuario;
}

//Funcion del campo nombre
function campoNombre(){
    let mostrarnombre = `<label for="nombre">Ingrese su nombre(s)</label> <input type="text" id="iNombre" class="form-control">`;
    nombre.innerHTML = mostrarnombre;
}

//Funcion de boton
function boton(){
    let mostrarboton = `<button type="button" onclick="subir()" name="boton" data-toggle="modal" data-target="#modal-info"  class="btn btn-primary">Entrar</button>`;
    button.innerHTML = mostrarboton;
}

function subir(){
    let valorUsuario = document.form1.iUser.value;
    let valorNombre = document.form1.iNombre.value;
    const contenido = document.getElementById("cuerpo");

    contenido.innerHTML = "<h7>ID: "+valorUsuario+"</h7>"+"<br>"+"<h7>Nombre: "+valorNombre+"</h7>";

}