import { subir } from "./app";
console.log(subir(localStorage.getItem("solicitudEmp")))
document.getElementById("fecha").innerHTML = localStorage.getItem("fecha");
