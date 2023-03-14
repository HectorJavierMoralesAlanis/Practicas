//Arreglo de productos
const productos = [
    {
        img:"./imagenes/californication.jpg",
        nombre:"Californication",
        descripcion:"Californication es el nombre del séptimo álbum de estudio de la banda estadounidense de rock alternativo y funk rock Red Hot Chili Peppers. Rick Rubin lo produjo y Warner Bros. Records lo lanzó al mercado el 8 de junio de 1999.",
        precio:100.00,
        fecha_de_entrega:"17/03/2023"
    },
    {
        img: "./imagenes/audio.jpg",
        nombre: "Audioslave",
        descripcion: "Audioslave es el título del álbum debut de estudio homónimo grabado por el supergrupo estadounidense de rock alternativo Audioslave, Fue lanzado al mercado por las empresas discográficas Epic Records e Interscope Records el 18 de noviembre de 2002 en el Reino Unido y un día después en los Estados Unidos.",
        precio:120.00,
        fecha_de_entrega:"15/03/2023"
    },
    {
        img: "./imagenes/echo.png",
        nombre: "Echoes,Silence,Patinece & Grace",
        descripcion: "Echoes, Silence, Patience & Grace (en español: «Ecos, silencio, paciencia y gracia») es el sexto álbum de la banda de rock alternativo Foo Fighters, que fue lanzado el 25 de septiembre de 2007.",
        precio:140.00,
        fecha_de_entrega:"20/03/2023"
    },
    {
        img: "./imagenes/herores.jpg",
        nombre: "Heroes",
        descripcion: "Heroes es el duodécimo álbum del músico y compositor británico David Bowie, lanzado el 14 de octubre de 1977 por RCA Records. Es la segunda entrega de su 'Berlin Trilogy' ",
        precio: 160.00,
        fecha_de_entrega:"27/03/2023"
    },
    {
        img: "./imagenes/deadKenedys.jpg",
        nombre: "Give me convenience OR give me death",
        descripcion: "Give Me Convenience or Give Me Death (estilizado como Give me convenience OR give me death) es el segundo álbum recopilatorio de la banda estadounidense de hardcore punk Dead Kennedys. Fue lanzado en junio de 1987 a través del sello discográfico Alternative Tentacles del líder de la banda, Jello Biafra.",
        precio: 180.00,
        fecha_de_entrega:"25/03/2023"
    },
    {
        img:"./imagenes/colour.jpg",
        nombre:"The Colour and the Shape",
        descripcion: "The Colour and the Shape es el segundo álbum de la banda Foo Fighters. Fue lanzado al mercado el 20 de mayo de 1997 por Capitol a través del sello Roswell.",
        precio: 200.00,
        fecha_de_entrega:"22/03/2023"
    },
    {
        img:"./imagenes/strays.jpg",
        nombre:"Strays",
        descripcion: "Strays es el tercer álbum de estudio de la banda estadounidense de rock alternativo Jane's Addiction, lanzado el 22 de julio de 2003 a través de Capitol Records.",
        precio: 220.00,
        fecha_de_entrega:"29/03/2023"
    },
    {
        img:"./imagenes/rage.png",
        nombre:"Rage Against the Machine",
        descripcion:"Rage Against the Machine —en español: Rabia contra la máquina— es el álbum debut de la banda de rap metal Rage Against the Machine, lanzado el 3 de noviembre de 1992, como una de las primeras fusiones integrales de géneros dispersos como el hip hop y el rock, que luego se conocería como nu meta",
        precio: 240.00,
        fecha_de_entrega:"07/03/2023"
    },
    {
        img:"./imagenes/american.jpg",
        nombre: "American Psycho",
        descripcion: "American Psycho es el tercer álbum de estudio de la banda estadounidense The Misfits, publicado el 13 de mayo de 1997 por Geffen Records. Fue el primero en ser grabado y publicado sin Glenn Danzig, fundador y antiguo líder de la banda. ",
        precio: 260.00,
        fecha_de_entrega:"09/03/2023"
    },
    {
        img: "./imagenes/blood.jpg",
        nombre: "Blood Sugar Sex Magik",
        descripcion: "Blood Sugar Sex Magik es el quinto álbum de estudio de la banda estadounidense de funk rock Red Hot Chili Peppers, lanzado el 24 de septiembre de 1991. Producido por Rick Rubin, fue la primera grabación de la banda lanzada por Warner Bros. Records.",
        precio: 280.00,
        fecha_de_entrega:"11/03/2023"
    }

];

//Constantes que se utilizaran para mostrar datos desde el html
const tabla = document.querySelector("#tabla");
const botones = document.querySelector("#botones");
const filtro1 = document.getElementById("rango1");

//Evento para mostrar los productos y los botones
window.addEventListener("DOMContentLoaded",function(){
    mostrarTabla(productos);
    filtro();
});

//Funcion para mostrar los productos
function mostrarTabla(producto){
    let mostrarProductos = producto.map(function (item){
        return `<article class="objeto-producto">
            <img src=${item.img} class="foto"/>
            <div class="precio-nombre">
                <header>
                    <h4>${item.nombre}</h4>
                    <h4>${item.precio}</h4>
                </header>
                <p class="mDescripcion>
                    ${item.descripcion}
                </p>
            </div>
        </article>`;
    });
    mostrarProductos = mostrarProductos.join("");
    tabla.innerHTML = mostrarProductos;
}

//Funcion para motrar los botones en pantalla
function filtro(){
    let mostrarfiltro = `<div class="filtro">
    <button id="todos" onclick="mostrarTabla()"> Todos </button>
    <button id="rango1" onclick="mostrar()"> <100 -- 100 </button>
    <button id="rango2"> 120 -- 180 </button>
    <button id="rango3"> 200 -- 260 </button>
    <button id="rango4"> 280 -- >280 </button>
    </div>`
    botones.innerHTML = mostrarfiltro;
}

//funcion para seleccionar los rangos 
function mostrar(){
    let aux=0;
    let arraux=[];
    //Ciclo para obtener los objetos que estan el rango de precios determinados
    for(x=0;x<=9;x++){
        if(productos[x].precio<=100.00){
            aux++;
            arraux=productos[x];
            alert(arraux);
            mostrarTabla(arraux);
        }
    }
}
