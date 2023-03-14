function Subir()
{
    var clave=document.form1.clave.value;
    var nombre=document.form1.nombre.value;
    const contenido = document.getElementById("cuerpo3");

    if (clave=="" || nombre=="" )
    {
        alert("Los campos con asterisco son obligatorios!!!");
        return false;
    }
    
    contenido.innerHTML="<h7>Clave: "+clave+"</h7>"+"<br>"+"<h7>Nombre: "+nombre+"</h7>"+"<br>";
}