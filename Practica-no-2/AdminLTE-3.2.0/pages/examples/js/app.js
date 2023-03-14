function mostrar(){
    var email=document.log.email2.value;
    var password=document.log.contra.value;
    

    /*
    if (email==""||password==""){
        alert("Falta campos por llenar");
        return false;
    }else 
    */
    if (email!="admin@hotmail.com"&&password!="admin1234567"){
        return false;
    }
    /*else if (email!="admin@hotmail.com"){
        alert("Correo incorrecto");
        return false;
    }else if (password!="admin1234567"){
        alert("Contraseña incorreto");
        return false;
    }
    */

}

