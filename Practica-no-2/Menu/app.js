const menu=[
    {
        id: 1,
        title: "Zelda ocarina of time",
        category: "Accion-aventura",
        price: 60.00,
        img:"./imagenes/ocarina.jpg",
        desc:"La historia del juego se enfoca en el joven héroe Link, quien emprende una aventura en el reino de Hyrule para detener a Ganondorf, rey de la tribu Gerudo, antes de que encuentre la Trifuerza, una reliquia sagrada capaz de concederle cualquier deseo a su poseedor."
    },
    {
        id: 2,
        title: "Metal Gear Solid 3 Snake eater",
        category: "Sigilo",
        price: 1223.79,
        img: "./imagenes/mgs3.jpg",
        desc: "La historia nos sitúa en el año 1964. Naked Snake (que más tarde será conocido como Big Boss) debe rescatar a Sokolov, un científico ruso que se ve obligado a construir un arma gigante que puede disparar misiles a cualquier parte del mundo llamada Shagohod."
    },
    {
        id: 3,
        title: "Mario Kart 8 Deluxe",
        category: "Carreras",
        price: 1179.00,
        img: "./imagenes/mk8.jpg",
        desc: "¡Acelera a través de las pistas del Reino Champiñón bajo el agua, en el cielo, de cabeza y sin gravedad, y llega a la meta para obtener la victoria! Prepara motores en el modo multijugador local*, en los torneos en línea** del juego, en el modo batalla que ha sido mejorado ¡y más!"
    },
    {
        id: 4,
        title: "God of War: Ragnarök",
        category: "Accion-aventura",
        price: 1199.00,
        img: "./imagenes/gwr.jpg",
        desc: "Kratos y Atreus deben viajar a cada uno de los nueve reinos en búsqueda de respuestas, mientras que las fuerzas asgardianas se preparan para una batalla profetizada que terminará con el mundo. En el camino explorarán paisajes increíbles y míticos, y se enfrentarán a aterradores enemigos en la forma de dioses nórdicos y monstruos. La amenaza del Ragnarök cada vez está más cerca. Kratos y Atreus deben elegir entre su propia seguridad y la seguridad de los reinos."
    },
    {
        id: 5,
        title: "The Last of Us Part I",
        category: "Terror",
        price: 1529.00,
        img: "./imagenes/tlou.jpg",
        desc: "En una civilización devastada, donde los infectados y los empedernidos sobrevivientes proliferan, Joel, un protagonista cansado, es contratado para rescatar de contrabando a una niña de 14 años llamada Ellie de una zona de cuarentena militar. Sin embargo, lo que comienza como un pequeño trabajo pronto se transforma en una brutal travesía por todo el país."
    },
    {
        id: 6,
        title: "Marvel's Spider-Man Remasterizado",
        category: "Accion",
        price: 1930.58,
        img: "./imagenes/spr.jpg",
        desc: "En Marvel's Spider-Man Remasterizado, nos encontramos con un Peter Parker experimentado en luchar contra el crimen organizado en la ciudad de Nueva York. Al mismo tiempo, se esfuerza por mantener el equilibrio entre su caótica vida personal y su carrera mientras carga con el peso de proteger el destino de la Nueva York de Marvel."
    },
    {
        id: 7,
        title: "Rock Band 4",
        category: "Musical-Ritmo",
        price: 573.12,
        img: "./imagenes/rb.jpg",
        desc: "Rock Band 4 te trae el subidón de adrenalina de tocar con un grupo en directo como nunca antes. Rock Band 4, el nuevo título del aclamado estudio juegos musicales Harmonix Music Systems, te permite aportar tu toque personal a cada actuación gracias a innovadoras funciones que premian la expresividad del jugador, tanto si este juega a solas como con la banda."
    },
    {
        id: 8,
        title: "High on Life",
        category: "Disparos-en-primera-persona",
        price: 1059.00,
        img: "./imagenes/hol.jpg",
        desc: "Recién terminas la preparatoria, no tienes trabajo, ambiciones ni planes hasta que un cártel alienígena, que quiere usar a la humanidad para drogarse, invade la Tierra. Ahora tú y un carismático equipo de armas parlantes deben ser los héroes y convertirse en los cazarrecompensas intergalácticos más letales del cosmos."
    },
    {
        id: 9,
        title: "Super Smash Bros. Ultimate",
        category: "Pelea",
        price: 1100.00,
        img: "./imagenes/ssbu.jpg",
        desc: "¡Un auténtico duelo de titanes de los videojuegos que podrás jugar cuando quieras y donde quieras! Lanza a tus rivales del escenario usando uno de los nuevos personajes como Simon Belmont o King K. Rool que se unen a Inkling, Ridley y a todos los combatientes presentes en la historia de Super Smash Bros. Disfruta de la velocidad mejorada y combate en los nuevos escenarios basados en las series de Castlevania, Super Mario Odyssey y otras."
    },
    {
        id: 10,
        title: "Metal: Hellsinger",
        category: "Ritmo",
        price: 400.00,
        img:  "./imagenes/mh.jpg",
        desc: "Mata a ritmo de metal y venganza en una travesía infernal por los Ocho Infiernos. Que le teman al ritmo. Metal: Hellsinger es un FPS rítmico repleto de demonios, armas brutales y música heavy metal."
    }
];

// Obtener elemento principal
//querySelector selecionara el primer elemento de que le estemos pasando
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

//mostrar todos los productos al cargar la pagina
//NOTA: "DOMContentLoaded" permite conocer el momento en el que todos los elementos del DOM, es decir, los elementos HTML de un proyecto,etsan cargados
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

//Items de productos
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {

        return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">
                    ${item.desc}
                </p>
            </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");

    sectionCenter.innerHTML = displayMenu;
}

//Opciones de botones
function displayMenuButtons(){
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    //constructor del boton con el nombre de la categoria de los items del array
    const categoryBtns = categories
        .map(function (category) {
            return `<button type="button" class="filter-btn" data-id=${category}>
                ${category}
            </button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");

    filterBtns.forEach(function (btn) {
       btn.addEventListener("click", function (e) {
        const category =e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
            if (menuItem.category == category) {
                return menuItem;
            }
        });
        if (category == "all") {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
       });
    });
}