function Subir()
{
    var formulario="";
    var usuario=document.form1.usuario.value;
    var nombre=document.form1.nombre.value;
    var apellido=document.form1.apellido.value;
    var email=document.form1.email.value;
    var clave1=document.form1.clave1.value;
    var clave2=document.form1.clave2.value;
    var hobbies="";
    var b=document.form1.hobby.length;
    const contenido = document.getElementById("cuerpo");
    for(a=0;a<b;a++)
    {
    if (document.form1.hobby[a].checked)
        hobbies+=document.form1.hobby[a].value + ", ";
    }
   
    if (usuario=="" || nombre=="" || apellido=="" )
    {
        alert("Los campos con asterisco son obligatorios!!!");
        return false;
    }
    if (hobbies.length==0)
    {
        alert("Debes seleccionar al menos un hobby!!");
        return false;
    }
    if ((clave1!=clave2) || (clave1==""))
    {
        alert("Las claves deben ser iguales y no pueden ser en blanco!!!");
        return false;
    }
    if (email=="") email="Email inválido";
   
    contenido.innerHTML="<h7>Usuario: "+usuario+"</h7>"+"<br>"+"<h7>Nombre: "+nombre+"</h7>"+"<br>"+"<h7>Apellido: "+apellido+"</h7>"+"<br>"+"<h7>E-mail: "+email+"</h7>"+"<br>"+"<h7>Clave: "+clave1+"</h7>"+"<br>"+"<h7>Hobbies: "+hobbies+"</h7>"+"<br>";
}