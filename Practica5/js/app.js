function subir(){
    let solicitudEmpl = document.form1.soli.value;
    let fecha = document.form1.fecha.value;
    let sueldoMensualDe = document.form1.sueldoMensualD.value;
    let sueldoMensualAu = document.form1.sueldoMensualA.value;
    let fechaContra = document.form1.fechaContratacion.value;

    localStorage.setItem("solicitudEmp",solicitudEmpl);
    localStorage.setItem("fecha",fecha);
    localStorage.setItem("sueldoMensualD", sueldoMensualDe);
    localStorage.setItem("sueldoMensualA", sueldoMensualAu);
	localStorage.setItem("fechaContratacion", fechaContra);
    
}