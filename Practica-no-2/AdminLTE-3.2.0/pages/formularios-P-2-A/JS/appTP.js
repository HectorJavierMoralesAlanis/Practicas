const tabla= document.querySelector("#tabla");

const proveedores = [
    {
        id:1,
        nombre:"Ron",
        apaterno:"Swanson",
        amaterno:"",
        email:"verygood@hotmail.com",
        direccion:"Pawnee, indiana",
        rfc:"SWR870612H02",
        categoria:"Industrial"
    },
    {
        id:2,
        nombre:"Francisco",
        apaterno:"Rosales",
        amaterno:"Hevia",
        email:"franlobofud@hotmail.com",
        direccion:"Ciudad de Mexico",
        rfc:"ROHF31265F64",
        categoria:"Utileria",
    },
    {
        id:3,
        nombre:"Alexander",
        apaterno:"Pierce",
        amaterno:"",
        email:"apierce@hotmail.com",
        direccion:"AP #370-4647 Dis Av.",
        rfc:"PIA89152F0",
        categoria:"Electronicos"
    },
    {
        id:4,
        nombre:"Ezra",
        apaterno:"Tillman",
        amaterno:"Hess",
        email:"tillezrhess@hotmail.com",
        direccion:"P.O. Box 738,7583 Quisque St.",
        rfc:"TIHE94056G6",
        categoria:"Mecanica"
    },
    {
        id:5,
        nombre:"Xena",
        apaterno:"Johns",
        amaterno:"Atkins",
        email:"xenmaAJ@hotmail.com",
        direccion:"AP #303-=6974 Proin Street",
        rfc:"JOAX95129F6",
        categoria:"Utileria"
    },
    {
        id:6,
        nombre:"Lilah",
        apaterno:"Shepard",
        amaterno:"Silva",
        email:"shpardliva@hotmail.com",
        direccion:"622-8602 Gravida Ave",
        rfc:"SHSL89057B2",
        categoria:"Industrial"
    },
    {
        id:7,
        nombre:"Hunter",
        apaterno:"Pate",
        amaterno:"Roach",
        email:"hunterroach@hotmail.com",
        direccion:"P.O. Box 771,7599 Ante,Road",
        rfc:"PARH870416Y7",
        categoria:"Mecanica",
    },
    {
        id:8,
        nombre:"Otto",
        apaterno:"Clay",
        amaterno:"Johnston",
        email:"clayotto@hotmail.com",
        direccion:"Ap #897-1459 Quam Avenue",
        rfc:"CLJO79091T5",
        categoria:"Electronicos"
    },
    {
        id:9,
        nombre:"Ruby",
        apaterno:"Rocha",
        amaterno:"Hardin",
        email:"rrhard@hotmail.com",
        direccion:"5212 Sagittis Ave",
        rfc:"ROHR911008",
        categoria:"Oficinista"
    },
    {
        id:10,
        nombre:"Michael",
        apaterno:"Keaton",
        amterno:"Oconnor",
        email:"imbatman@hotmail.com",
        direccion:"Ap #657-1093 Nec,Street",
        rfc:"KEOM88209R5",
        categoria:"Oficinista"
    }

];

window.addEventListener("DOMContentLoaded", function () {
    mostrarTabla(proveedores);
})

function mostrarTabla(objTabla){
    let despliegueTabla = objTabla.map(function (item){
        return `
        <tbody>
        <tr>
        <td>${item.id}</td>
        <td>${item.nombre}</td>
        <td>${item.apaterno}</td>
        <td>${item.amaterno}</td>
        <td>${item.email}</td>
        <td>${item.direccion}</td>
        <td>${item.rfc}</td>
        <td>${item.categoria}</td>
        </tr>
        </tbody>
        `;

    });
    despliegueTabla = despliegueTabla.join("");
    tabla.innerHTML = despliegueTabla;
}
