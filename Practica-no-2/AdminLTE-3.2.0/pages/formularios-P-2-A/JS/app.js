const usuario = document.querySelector("#id");
const nombre = document.querySelector("#nombre");
const apaterno = document.querySelector("#apaterno");
const amaterno = document.querySelector("#amaterno");
const email = document.querySelector("#email");
const direccion = document.querySelector("#direccion");
const rfc = document.querySelector("#rfc");
const categoria = document.querySelector("#categoria");
const button = document.querySelector("#botonS");

window.addEventListener("DOMContentLoaded", function () {
    campoUsuario(usuario);
    campoNombre();
    campoApaterno();
    campoAmaterno();
    campoEmail();
    campoDireccion();
    campoRfc();
    campoCategoria();
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

//Funcion del campo apellido paterno
function campoApaterno(){
    let mostrarapaterno = `<label for="apaterno">Ingrese su Apellido paterno</label> <input type="text" id="iApaterno" class="form-control">`;
    apaterno.innerHTML = mostrarapaterno; 
}

//Funcion del campo apellido materno
function campoAmaterno(){
    let mostaramaterno = `<label for="amaterno">Ingrese su Apellido materno</label> <input type="text" id="iAmaterno" class="form-control">`;
    amaterno.innerHTML = mostaramaterno;
}

//Funcion del campo email
function campoEmail(){
    let mostraremail = `<label for="email">Ingrese su email</label> <input type="email" id="iEmail" class="form-control">`;
    email.innerHTML = mostraremail;
}

//Funcion del campo direccion
function campoDireccion(){
    let mostrardireccion = `<label for="direccion">Ingrese su direccion</label> <input type="text" id="iDireccion" class="form-control">`;
    direccion.innerHTML = mostrardireccion;
}

//Funcion del campo RFC
function campoRfc(){
    let mostrarrfc = `<label for="rfc">Ingrese su rfc</label> <input type="text" id="iRfc" class="form-control">`;
    rfc.innerHTML = mostrarrfc;
}

//Funcion del campo categoria
function campoCategoria(){
    let mostrarcategoria = `<label for="categoria">Ingrese su categoria</label> <input type="text" id="iCategoria" class="form-control">`;
    categoria.innerHTML = mostrarcategoria;
}

//Funcion de boton
function boton(){
    let mostrarboton = `<button type="button" onclick="subir()" name="boton" data-toggle="modal" data-target="#modal-info"  class="btn btn-primary">Entrar</button>`;
    button.innerHTML = mostrarboton;
}

function subir(){
    let valorUsuario = document.form1.iUser.value;
    let valorNombre = document.form1.iNombre.value;
    let valorApaterno = document.form1.iApaterno.value;
    let valorAmaterno = document.form1.iAmaterno.value;
    let valorEmail = document.form1.iEmail.value;
    let valorDireccion = document.form1.iDireccion.value;
    let valorRfc = document.form1.iRfc.value;
    let valorCategoria = document.form1.iCategoria.value;
    const contenido = document.getElementById("cuerpo");

    contenido.innerHTML = "<h7>ID: "+valorUsuario+"</h7>"+"<br>"+"<h7>Nombre: "+valorNombre+"</h7>"+"<br>"+"<h7>Apellido Paterno: "+valorApaterno+"</h7>"+"<br>"+"<h7>Apellido Materno: "+valorAmaterno+"</h7>"+ "<h7>Email: "+valorEmail+"</h7>"+"<br>"+"<h7>Direccion: "+valorDireccion+"</h7>"+"<h7>RFC: "+valorRfc+"</h7>"+"<br>"+"<h7>Categoria: "+valorCategoria+"</h7>";

}