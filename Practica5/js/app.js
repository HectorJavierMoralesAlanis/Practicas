function subir(){
    //Variables Solicitud de Empleo
    let solicitudEmpl = document.form1.solicitudEmp.value;
    let fecha = document.form1.fecha.value;
    let sueldoMensualDe = document.form1.sueldoMensualD.value;
    let sueldoMensualAu = document.form1.sueldoMensualA.value;
    let fechaContra = document.form1.fechaContratacion.value;
    let apaterno = document.form1.APaterno.value;
    let amaterno = document.form1.Amaterno.value;
    let nombreS = document.form1.nombres.value;
    let edad = document.form1.edad.value;
    let domicilio = document.form1.Domicilio.value;
    let colonia = document.form1.Colonia.value;
    let codPostal = document.form1.CodPostal.value;
    var curp = document.form1.curp.value;
    var afore = document.form1.afore.value;
    var rfc = document.form1.rfc.value;
    var licencia = document.form1.licencia.value;
    var cartilla = document.form1.cartilla.value;
    var pasaporte = document.form1.pasaporte.value;
    var numeroSS = document.form1.numeroSS.value;
    var numLicencia = document.form1.numLicencia.value;
    var docsExtranjero = document.form1.docsExtranjero.value;
    var SaludActual = document.form1.SaludActual.value;
    var EnferCronica = document.form1.EnferCronica.value;
    var Deporte = document.form1.Deporte.value;
    var PerteneAclub = document.form1.PerteneAclub.value;
    var TiempoLibre = document.form1.TiempoLibre.value;
    var MetaVida = document.form1.MetaVida.value;
    var nombreP = document.form1.nombreP.value;
    var viveP = document.form1.viveP.value;
	var finadoP = document.form1.finadoP.value;
    var domicilioP = document.form1.domicilioP.value;
    var ocupacionP = document.form1.ocupacionP.value;
    var nombreM = document.form1.nombreM.value;
    var viveM = document.form1.viveM.value;
    var finadoM = document.form1.finadoM.value;
    var domicilioM = document.form1.domicilioM.value;
    var ocupacionM = document.form1.ocupacionM.value;
    var nombreEs = document.form1.nombreEs.value;
    var viveEs = document.form1.viveEs.value;
    var finadoEs = document.form1.finadoEs.value;
    var domicilioEs = document.form1.domicilioEs.value;
    var ocupacionEs = document.form1.ocupacionEs.value;
    var hijos = document.form1.hijos.value;
    
    var primaria = document.form1.primaria.value;
    var DomicilioPrim = document.form1.DomicilioPrim.value;
    var fechaPrimaria = document.form1.fechaPrimaria.value;
    var fechaPrimaria2 = document.form1.fechaPrimaria2.value;
    var anios1 = document.form1.anios1.value;
    var TituloPrimaria = document.form1.TituloPrimaria.value;
    var Secundaria = document.form1.Secundaria.value;
    var DomicilioSec = document.form1.DomicilioSec.value;
    var fechaSecundaria = document.form1.fechaSecundaria.value;
    var fechaSecundaria2 = document.form1.fechaSecundaria2.value;
    var anios2 = document.form1.anios2.value;
    var TituloSecundaria = document.form1.TituloSecundaria.value;
    var Preparatoria = document.form1.Preparatoria.value;
    var Domiciliobachi = document.form1.Domiciliobachi.value;
    var fechaPrepa = document.form1.fechaPrepa.value;
    var fechaPrepa2 = document.form1.fechaPrepa2.value;
    var anios3 = document.form1.anios3.value;
    var TituloPrepa = document.form1.TituloPrepa.value;
    var Profesional = document.form1.Profesional.value;
    var DomicilioProfe = document.form1.DomicilioProfe.value;
    var fechaProfec = document.form1.fechaProfec.value;
    var fechaProfec2 = document.form1.fechaProfec2.value;
    var anios4 = document.form1.anios4.value;
    var TituloProfecional = document.form1.TituloProfecional.value;
    var Comercial = document.form1.Comercial.value;
    var DomicilioComercia = document.form1.DomicilioComercia.value;
    var fechaComer = document.form1.fechaComer.value;
    var fechaComer2 = document.form1.fechaComer2.value;
    var anios5 = document.form1.anios5.value;
    var TituloComercial = document.form1.TituloComercial.value;
    var EscuelaActual = document.form1.EscuelaActual.value;
    var Horario = document.form1.Horario.value;
    var CursoCarrera = document.form1.CursoCarrera.value;
    var Grado = document.form1.Grado.value;
    var idiomas = document.form1.idiomas.value;
    var funcionesO = document.form1.funcionesO.value;
	var maquinasO = document.form1.maquinasO.value;
    var otrosT = document.form1.otrosT.value;
    var TimeService = document.form1.imeService.value;
    var TimeServiceAnt = document.form1.TimeServiceAnt.value;
	var NomEmpresa = document.form1.NomEmpresa.value;
	var NomEmpresaAnt = document.form1.NomEmpresaAnt.value;
    var DomicilioEmpresa = document.form1.DomicilioEmpresa.value;
    var DomicilioEmpresaAnt = document.form1.DomicilioEmpresaAnt.value;
	var TelEmpresa = document.getElementById("TelEmpresa").value;
	var TelEmpresaAnt = document.getElementById("TelEmpresaAnt").value;
	var PuestoInicial1 = document.getElementById("PuestoInicial1").value;
	var PuestoFinal2 = document.getElementById("PuestoFinal2").value;
    var PuestoInicialAnt1 = document.getElementById("PuestoInicialAnt1").value;
    var PuestoFinalAnt2 = document.getElementById("PuestoFinalAnt2").value;
	var SueldoInicial1 = document.getElementById("SueldoInicial1").value;
	var SueldoFinal2 = document.getElementById("SueldoFinal2").value;
    var SueldoInicialAnt1 = document.getElementById("SueldoInicialAnt1").value;
	var SueldoFinalAnt2 = document.getElementById("SueldoFinalAnt2").value;
	var MotivoSeparacion = document.getElementById("MotivoSeparacion").value;
    var MotivoSeparacionAnt = document.getElementById("MotivoSeparacionAnt").value;
    var ActDesempenadas = document.getElementById("ActDesempenadas").value;
	var ActDesempenadasAnt = document.getElementById("ActDesempenadasAnt").value;
	var InformeSi = document.getElementById("InformeSi").value;
	var InformeNo = document.getElementById("InformeNo").value;
    
    //Item Solicitud de Empleo
    localStorage.setItem("solicitudEmp",solicitudEmpl);
    localStorage.setItem("fecha",fecha);
    localStorage.setItem("sueldoMensualD", sueldoMensualDe);
    localStorage.setItem("sueldoMensualA", sueldoMensualAu);
	localStorage.setItem("fechaContratacion", fechaContra);
    localStorage.setItem("apellidoP",apaterno);
    localStorage.setItem("apellidoM",amaterno);
    localStorage.setItem("nombre",nombreS);
    localStorage.setItem("edad",edad);
    localStorage.setItem("domicilio",domicilio);
    localStorage.setItem("colonia",colonia);
    localStorage.setItem("codigoP",codPostal);
    localStorage.setItem("curp", curp);
	localStorage.setItem("afore", afore);
	localStorage.setItem("rfc", rfc);
    localStorage.setItem("licencia", licencia);
	localStorage.setItem("cartilla", cartilla);
    localStorage.setItem("pasaporte", pasaporte);
	localStorage.setItem("numeroSS", numeroSS);
    localStorage.setItem("numLicencia", numLicencia);
	localStorage.setItem("docsExtranjero", docsExtranjero);
    localStorage.setItem("SaludActual", SaludActual);
	localStorage.setItem("EnferCronica", EnferCronica);
	localStorage.setItem("Deporte", Deporte);
    localStorage.setItem("perteneAclub", PerteneAclub);
	localStorage.setItem("tiempoLibre", TiempoLibre);
    localStorage.setItem("metaVida", MetaVida);
    localStorage.setItem("nombreP", nombreP);
	localStorage.setItem("viveP", viveP);
	localStorage.setItem("finadoP", finadoP);
    localStorage.setItem("domicilioP", domicilioP);
	localStorage.setItem("ocupacionP", ocupacionP);
    localStorage.setItem("nombreM", nombreM);
    localStorage.setItem("viveM", viveM);
	localStorage.setItem("finadoM", finadoM);
	localStorage.setItem("domicilioM", domicilioM);
    localStorage.setItem("ocupacionM", ocupacionM);
	localStorage.setItem("nombreEs", nombreEs);
    localStorage.setItem("viveEs", viveEs);
    localStorage.setItem("finadoEs", finadoEs);
    localStorage.setItem("domicilioEs", domicilioEs);
	localStorage.setItem("ocupacionEs", ocupacionEs);
	localStorage.setItem("hijos", hijos);
    localStorage.setItem("primaria", primaria);
	localStorage.setItem("DomicilioPrim", DomicilioPrim);
	localStorage.setItem("fechaPrimaria", fechaPrimaria);
    localStorage.setItem("fechaPrimaria2", fechaPrimaria2);
	localStorage.setItem("anios1", anios1);
    localStorage.setItem("TituloPrimaria", TituloPrimaria);
    localStorage.setItem("Secundaria", Secundaria);
	localStorage.setItem("DomicilioSec", DomicilioSec);
	localStorage.setItem("fechaSecundaria", fechaSecundaria);
    localStorage.setItem("fechaSecundaria2", fechaSecundaria2);
	localStorage.setItem("anios2", anios2);
    localStorage.setItem("TituloSecundaria", TituloSecundaria);
    localStorage.setItem("Preparatoria", Preparatoria);
    localStorage.setItem("Domiciliobachi", Domiciliobachi);
	localStorage.setItem("fechaPrepa", fechaPrepa);
	localStorage.setItem("fechaPrepa2", fechaPrepa2);
    localStorage.setItem("anios3", anios3);
	localStorage.setItem("TituloPrepa", TituloPrepa);
	localStorage.setItem("Profesional", Profesional);
    localStorage.setItem("DomicilioProfe", DomicilioProfe);
	localStorage.setItem("fechaProfec", fechaProfec);
    localStorage.setItem("fechaProfec2", fechaProfec2);
    localStorage.setItem("anios4", anios4);
	localStorage.setItem("TituloProfecional", TituloProfecional);
	localStorage.setItem("Comercial", Comercial);
    localStorage.setItem("DomicilioComercia", DomicilioComercia);
    localStorage.setItem("fechaComer", fechaComer);
	localStorage.setItem("fechaComer2", fechaComer2);
    localStorage.setItem("anios5", anios5);
    localStorage.setItem("TituloComercial", TituloComercial);
    localStorage.setItem("EscuelaActual", EscuelaActual);
	localStorage.setItem("Horario", Horario);
	localStorage.setItem("CursoCarrera", CursoCarrera);
    localStorage.setItem("Grado", Grado);
    localStorage.setItem("idiomas", idiomas);
	localStorage.setItem("funcionesO", funcionesO);
	localStorage.setItem("maquinasO", maquinasO);
    localStorage.setItem("otrosT", otrosT)

}


const guardarArchivoDeTexto = (contenido, nombre) => {
    const a = document.createElement("a");
    const archivo = new Blob([contenido], { type: 'text/plain' });
    const url = URL.createObjectURL(archivo);
    a.href = url;
    a.download = nombre;
    a.click();
    URL.revokeObjectURL(url);
}

const $botonDescargar = document.querySelector("#descargar");
$botonDescargar.onclick = () => {
    guardarArchivoDeTexto(nuevosdeEmpleo+nuevoDatosP+nuevaDocumentacion+nuevoestadoYHabitos+nuevoDatosFamiliares+nuevoDatosEscolaridad+nuevoConocimientosGenerales+nuevoDatosEmpleosActualOAnterior+nuevaReferenciaPersonal+nuevaReferenciaPersonal2+nuevaDatosEconomicos, "archivo.txt");
}

//----------------------------DATOS DE SOLICITUD DE EMPLEO--------------------------

const aux = document.querySelector("#solicitudEmp")
aux.innerHTML = localStorage.getItem("solicitudEmp");
document.getElementById("fecha").innerHTML = localStorage.getItem("fecha");
document.getElementById("sueldoMensualD").innerHTML = localStorage.getItem("sueldoMensualD");
document.getElementById("sueldoMensualA").innerHTML = localStorage.getItem("sueldoMensualA");
document.getElementById("fechaContratacion").innerHTML = localStorage.getItem("fechaContratacion");
document.getElementById("APaterno").innerHTML = localStorage.getItem("apellidoP");
document.getElementById("Amaterno").innerHTML = localStorage.getItem("apellidoM");
document.getElementById("Nombres").innerHTML = localStorage.getItem("nombre");
document.getElementById("Edad").innerHTML = localStorage.getItem("edad");
document.getElementById("Domicilio").innerHTML = localStorage.getItem("domicilio");
document.getElementById("ColoniA").innerHTML = localStorage.getItem("colonia");
document.getElementById("CodPostal").innerHTML = localStorage.getItem("codigoP"); 

document.getElementById("curp").innerHTML = localStorage.getItem("curp");
document.getElementById("afore").innerHTML = localStorage.getItem("afore");
document.getElementById("rfc").innerHTML = localStorage.getItem("rfc");
document.getElementById("licencia").innerHTML = localStorage.getItem("licencia");
document.getElementById("cartilla").innerHTML = localStorage.getItem("cartilla");
document.getElementById("pasaporte").innerHTML = localStorage.getItem("pasaporte");
document.getElementById("numeroSS").innerHTML = localStorage.getItem("numeroSS");
document.getElementById("numLicencia").innerHTML = localStorage.getItem("numLicencia");
document.getElementById("docsExtranjero").innerHTML = localStorage.getItem("docsExtranjero");

document.getElementById("SaludActual").innerHTML = localStorage.getItem("SaludActual");
document.getElementById("EnferCronica").innerHTML = localStorage.getItem("EnferCronica");
document.getElementById("Deporte").innerHTML = localStorage.getItem("Deporte");
document.getElementById("PerteneAclub").innerHTML = localStorage.getItem("PerteneAclub");
document.getElementById("TiempoLibre").innerHTML = localStorage.getItem("tiempoLibre");
document.getElementById("MetaVida").innerHTML = localStorage.getItem("metaVida");

document.getElementById("nombreP").innerHTML = localStorage.getItem("nombreP");
document.getElementById("viveP").innerHTML = localStorage.getItem("viveP");
document.getElementById("finadoP").innerHTML = localStorage.getItem("finadoP");
document.getElementById("domicilioP").innerHTML = localStorage.getItem("domicilioP");
document.getElementById("ocupacionP").innerHTML = localStorage.getItem("ocupacionP");
document.getElementById("nombreM").innerHTML = localStorage.getItem("nombreM");
document.getElementById("viveM").innerHTML = localStorage.getItem("viveM");
document.getElementById("finadoM").innerHTML = localStorage.getItem("finadoM");
document.getElementById("domicilioM").innerHTML = localStorage.getItem("domicilioM");
document.getElementById("ocupacionM").innerHTML = localStorage.getItem("ocupacionM");
document.getElementById("nombreEs").innerHTML = localStorage.getItem("nombreEs");
document.getElementById("viveEs").innerHTML = localStorage.getItem("viveEs");
document.getElementById("finadoEs").innerHTML = localStorage.getItem("finadoEs");
document.getElementById("domicilioEs").innerHTML = localStorage.getItem("domicilioEs");
document.getElementById("ocupacionEs").innerHTML = localStorage.getItem("ocupacionEs");
document.getElementById("hijos").innerHTML = localStorage.getItem("hijos");

document.getElementById("primaria").innerHTML = localStorage.getItem("primaria");
document.getElementById("DomicilioPrim").innerHTML = localStorage.getItem("DomicilioPrim");
document.getElementById("fechaPrimaria").innerHTML = localStorage.getItem("fechaPrimaria");
document.getElementById("fechaPrimaria2").innerHTML = localStorage.getItem("fechaPrimaria2");
document.getElementById("anios1").innerHTML = localStorage.getItem("anios1");
document.getElementById("TituloPrimaria").innerHTML = localStorage.getItem("TituloPrimaria");
document.getElementById("Secundaria").innerHTML = localStorage.getItem("Secundaria");
document.getElementById("DomicilioSec").innerHTML = localStorage.getItem("DomicilioSec");
document.getElementById("fechaSecundaria").innerHTML = localStorage.getItem("fechaSecundaria");
document.getElementById("fechaSecundaria2").innerHTML = localStorage.getItem("fechaSecundaria2");
document.getElementById("anios2").innerHTML = localStorage.getItem("anios2");
document.getElementById("TituloSecundaria").innerHTML = localStorage.getItem("TituloSecundaria");
document.getElementById("Preparatoria").innerHTML = localStorage.getItem("Preparatoria");
document.getElementById("Domiciliobachi").innerHTML = localStorage.getItem("Domiciliobachi");
document.getElementById("fechaPrepa").innerHTML = localStorage.getItem("fechaPrepa");
document.getElementById("fechaPrepa2").innerHTML = localStorage.getItem("fechaPrepa");
document.getElementById("anios3").innerHTML = localStorage.getItem("anios3");
document.getElementById("TituloPrepa").innerHTML = localStorage.getItem("TituloPrepa");
document.getElementById("Profesional").innerHTML = localStorage.getItem("Profesional");
document.getElementById("DomicilioProfe").innerHTML = localStorage.getItem("DomicilioProfe");
document.getElementById("fechaProfec").innerHTML = localStorage.getItem("fechaProfec");
document.getElementById("fechaProfec2").innerHTML = localStorage.getItem("fechaProfec2");
document.getElementById("anios4").innerHTML = localStorage.getItem("anios4");
document.getElementById("TituloProfecional").innerHTML = localStorage.getItem("TituloProfesional");
document.getElementById("Comercial").innerHTML = localStorage.getItem("Comercial");
document.getElementById("DomicilioComercia").innerHTML = localStorage.getItem("DomicilioComercia");
document.getElementById("fechaComer").innerHTML = localStorage.getItem("fechaComer1");
document.getElementById("fechaComer2").innerHTML = localStorage.getItem("fechaComer2");
document.getElementById("anios5").innerHTML = localStorage.getItem("anios5");
document.getElementById("TituloComercial").innerHTML = localStorage.getItem("TituloComercial");
document.getElementById("EscuelaActual").innerHTML = localStorage.getItem("EscuelaActual");
document.getElementById("Horario").innerHTML = localStorage.getItem("Horario");
document.getElementById("CursoCarrera").innerHTML = localStorage.getItem("CursoCarrera");
document.getElementById("Grado").innerHTML = localStorage.getItem("Grado");
document.getElementById("idiomas").innerHTML = localStorage.getItem("idiomas");
document.getElementById("funcionesO").innerHTML = localStorage.getItem("funcionesO");
document.getElementById("maquinasO").innerHTML = localStorage.getItem("maquinasO");
document.getElementById("otrosT").innerHTML = localStorage.getItem("otrosT");



const datosDeEmpleo = {
    solicitudDeEmpleo: localStorage.getItem("solicitudEmp"),
    fecha: localStorage.getItem("fecha"),
    sueldoMensualD: localStorage.getItem("sueldoMensualD"),
    sueldoMensualA: localStorage.getItem("sueldoMensualA"),
    fechaContratacion: localStorage.getItem("fechaContratacion")
}
const nuevosdeEmpleo = JSON.stringify(datosDeEmpleo,null,2);
