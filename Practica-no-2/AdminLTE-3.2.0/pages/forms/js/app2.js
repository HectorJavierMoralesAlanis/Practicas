function Subir()
{
    var codigo=document.form1.codigo.value;
    var nombre=document.form1.nombre.value;
    var categoria=document.form1.categoria.value;
    var pventa=document.form1.pventa.value;
    var pcompra=document.form1.pcompra.value;
    const contenido = document.getElementById("cuerpo2");
    
    if (codigo=="" || nombre=="" || categoria=="" || pventa=="" || pcompra=="")
    {
        alert("Los campos con asterisco son obligatorios!!!");
        return false;
    }
   
    contenido.innerHTML="<h7>Codigo: "+codigo+"</h7>"+"<br>"+"<h7>Nombre: "+nombre+"</h7>"+"<br>"+"<h7>Categoria: "+categoria+"</h7>"+"<br>"+"<h7>Precio de venta: "+pventa+"</h7>"+"<br>"+"<h7>Precio de compra: "+pcompra+"</h7>";
}