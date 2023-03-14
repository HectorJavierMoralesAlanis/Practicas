const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // Remover seleccionado
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // Mostrar otros articulos
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// obtencion del modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("cuerpo");
var contador = 0;

// Botones para el modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");
var btn7 = document.getElementById("myBtn7");
var btn8 = document.getElementById("myBtn8");
var btn9 = document.getElementById("myBtn9");
var btn10 = document.getElementById("myBtn10");
var btn11 = document.getElementById("myBtn11");
var btn12 = document.getElementById("myBtn12");
var btn13 = document.getElementById("myBtn13");
var btn14 = document.getElementById("myBtn14");
var btn15 = document.getElementById("myBtn15");


// Para cerrar
var span = document.getElementsByClassName("close")[0];

// Cuando se presiona la imagen se hace mas grande
btn.onclick = function() {
  contador=1;
  modal.style.display = "block";
  modal1.innerHTML = `<img src="./imagenes/1.jpg"><h2 style="text-align:center;">Imagen 1</h2><button onclick="cambiar(${contador+1})">Siguiente</button>`;
}
btn2.onclick = function() {
  contador=2;
  modal.style.display = "block";
  modal1.innerHTML = `<img src="./imagenes/2.jpg"><h2 style="text-align:center;">Imagen 2</h2><button onclick="cambiar(${contador-1})">Anterior</button><button onclick="cambiar(${contador+2})">Siguiente</button>`;
}
btn3.onclick = function() {
  contador=3;
  modal.style.display = "block";
  modal1.innerHTML = `<img src="./imagenes/3.jpg"><h2 style="text-align:center;">Imagen 3</h2><button onclick="cambiar(${contador-1})">Anterior</button><button onclick="cambiar(${contador+1})">Siguiente</button>`;
}
btn4.onclick = function() {
  contador=4;
  modal.style.display = "block";
  modal1.innerHTML = `<img src="./imagenes/4.jpg"><h2 style="text-align:center;">Imagen 4</h2><button onclick="cambiar(${contador-1})">Anterior</button><button onclick="cambiar(${contador+1})">Siguiente</button>`;
}
btn5.onclick = function() {
  contador=5;
  modal.style.display = "block";
  modal1.innerHTML = `<img src="./imagenes/5.jpg"><h2 style="text-align:center;">Imagen 5</h2><button onclick="cambiar(${contador-1})">Anterior</button><button onclick="cambiar(${contador+1})">Siguiente</button>`;
}
btn6.onclick = function() {
  contador=6;
  modal.style.display = "block";
  modal1.innerHTML = `<img src="./imagenes/6.jpg"><h2 style="text-align:center;">Imagen 6</h2><button onclick="cambiar(${contador-1})">Anterior</button><button onclick="cambiar(${contador+1})">Siguiente</button>`;
}
btn7.onclick = function() {
  contador=7;
  modal.style.display = "block";
  modal1.innerHTML = `<img src="./imagenes/7.jpg"><h2 style="text-align:center;">Imagen 7</h2><button onclick="cambiar(${contador-1})">Anterior</button><button onclick="cambiar(${contador+1})">Siguiente</button>`;
}
btn8.onclick = function() {
  contador=8;
  modal.style.display = "block";
  modal1.innerHTML = `<img src="./imagenes/8.jpg"><h2 style="text-align:center;">Imagen 8</h2><button onclick="cambiar(${contador-1})">Anterior</button><button onclick="cambiar(${contador+1})">Siguiente</button>`;
}
btn9.onclick = function() {
  contador=9;
  modal.style.display = "block";
  modal1.innerHTML = `<img src="./imagenes/9.jpg"><h2 style="text-align:center;">Imagen 9</h2><button onclick="cambiar(${contador-1})">Anterior</button><button onclick="cambiar(${contador+1})">Siguiente</button>`;
}
btn10.onclick = function() {
  contador=10;
  modal.style.display = "block";
  modal1.innerHTML = `<img src="./imagenes/10.jpg"><h2 style="text-align:center;">Imagen 10</h2><button onclick="cambiar(${contador-1})">Anterior</button><button onclick="cambiar(${contador+1})">Siguiente</button>`;
}
btn11.onclick = function() {
  contador=11;
  modal.style.display = "block";
  modal1.innerHTML = `<img src="./imagenes/11.jpg"><h2 style="text-align:center;">Imagen 11</h2><button onclick="cambiar(${contador-1})">Anterior</button><button onclick="cambiar(${contador+1})">Siguiente</button>`;
}
btn12.onclick = function() {
  contador=12;
  modal.style.display = "block";
  modal1.innerHTML = `<img src="./imagenes/12.jpg"><h2 style="text-align:center;">Imagen 12</h2><button onclick="cambiar(${contador-1})">Anterior</button><button onclick="cambiar(${contador+1})">Siguiente</button>`;
}
btn13.onclick = function() {
  contador=13;
  modal.style.display = "block";
  modal1.innerHTML = `<img src="./imagenes/13.jpg"><h2 style="text-align:center;">Imagen 13</h2><button onclick="cambiar(${contador-1})">Anterior</button><button onclick="cambiar(${contador+1})">Siguiente</button>`;
}
btn14.onclick = function() {
  contador=14;
  modal.style.display = "block";
  modal1.innerHTML = `<img src="./imagenes/14.jpg"><h2 style="text-align:center;">Imagen 14</h2><button onclick="cambiar(${contador-1})">Anterior</button><button onclick="cambiar(${contador+1})">Siguiente</button>`;
}
btn15.onclick = function() {
  contador=15;
  modal.style.display = "block";
  modal1.innerHTML = `<img src="./imagenes/15.jpg"><h2 style="text-align:center;">Imagen 15</h2><button onclick="cambiar(${contador-1})">Anterior</button>`;
}
// Para cerrar
span.onclick = function() {
  modal.style.display = "none";
}

// cuando se presiona fuera del modal se cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Funcion para cambair de imagen
function cambiar(cont){
  alert(cont)
  if (cont == 1){
    modal1.innerHTML = `<img src="./imagenes/1.jpg"><h2 style="text-align:center;">Imagen 1</h2><button onclick="cambiar(${2})">Siguiente</button>`;
  }else if (cont == 2){
    modal1.innerHTML = `<img src="./imagenes/2.jpg"><h2 style="text-align:center;">Imagen 2</h2><button onclick="cambiar(${1})">Anterior</button><button onclick="cambiar(${3})">Siguiente</button>`;
  }else if(cont == 3){
    modal1.innerHTML = `<img src="./imagenes/3.jpg"><h2 style="text-align:center;">Imagen 3</h2><button onclick="cambiar(${2})">Anterior</button><button onclick="cambiar(${4})">Siguiente</button>`;
  }else if(cont == 4){
    modal1.innerHTML = `<img src="./imagenes/4.jpg"><h2 style="text-align:center;">Imagen 4</h2><button onclick="cambiar(${3})">Anterior</button><button onclick="cambiar(${5})">Siguiente</button>`;
  }else if(cont == 5){
    modal1.innerHTML = `<img src="./imagenes/5.jpg"><h2 style="text-align:center;">Imagen 5</h2><button onclick="cambiar(${4})">Anterior</button><button onclick="cambiar(${6})">Siguiente</button>`;
  }else if(cont == 6){
    modal1.innerHTML = `<img src="./imagenes/6.jpg"><h2 style="text-align:center;">Imagen 6</h2><button onclick="cambiar(${5})">Anterior</button><button onclick="cambiar(${7})">Siguiente</button>`;
  }else if(cont == 7){
    modal1.innerHTML = `<img src="./imagenes/7.jpg"><h2 style="text-align:center;">Imagen 7</h2><button onclick="cambiar(${6})">Anterior</button><button onclick="cambiar(${8})">Siguiente</button>`;
  }else if(cont == 8){
    modal1.innerHTML = `<img src="./imagenes/8.jpg"><h2 style="text-align:center;">Imagen 8</h2><button onclick="cambiar(${7})">Anterior</button><button onclick="cambiar(${9})">Siguiente</button>`;
  }else if(cont == 9){
    modal1.innerHTML = `<img src="./imagenes/9.jpg"><h2 style="text-align:center;">Imagen 9</h2><button onclick="cambiar(${8})">Anterior</button><button onclick="cambiar(${10})">Siguiente</button>`;
  }else if(cont == 10){
    modal1.innerHTML = `<img src="./imagenes/10.jpg"><h2 style="text-align:center;">Imagen 10</h2><button onclick="cambiar(${9})">Anterior</button><button onclick="cambiar(${11})">Siguiente</button>`;
  }else if(cont == 11){
    modal1.innerHTML = `<img src="./imagenes/11.jpg"><h2 style="text-align:center;">Imagen 11</h2><button onclick="cambiar(${10})">Anterior</button><button onclick="cambiar(${12})">Siguiente</button>`;
  }else if(cont == 12){
    modal1.innerHTML = `<img src="./imagenes/12.jpg"><h2 style="text-align:center;">Imagen 12</h2><button onclick="cambiar(${11})">Anterior</button><button onclick="cambiar(${13})">Siguiente</button>`;
  }else if(cont == 13){
    modal1.innerHTML = `<img src="./imagenes/13.jpg"><h2 style="text-align:center;">Imagen 13</h2><button onclick="cambiar(${12})">Anterior</button><button onclick="cambiar(${14})">Siguiente</button>`;
  }else if(cont == 14){
    modal1.innerHTML = `<img src="./imagenes/14.jpg"><h2 style="text-align:center;">Imagen 14</h2><button onclick="cambiar(${13})">Anterior</button><button onclick="cambiar(${15})">Siguiente</button>`;
  }else if(cont == 15){
    modal1.innerHTML = `<img src="./imagenes/15.jpg"><h2 style="text-align:center;">Imagen 15</h2><button onclick="cambiar(${14})">Anterior</button>`;
  }
}