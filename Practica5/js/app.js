function subir(){
    //Variables Solicitud de Empleo
    let solicitudEmpl = document.form1.solicitudEmp.value;
    let fecha = document.form1.fecha.value;
    let sueldoMensualDe = document.form1.sueldoMensualD.value;
    let sueldoMensualAu = document.form1.sueldoMensualA.value;
    let fechaContra = document.form1.fechaContratacion.value;
    
    //Variables Datos Personales
    var APaterno = document.getElementById("APaterno").value;
    var Amaterno = document.getElementById("Amaterno").value;
	var nombres = document.getElementById("nombres").value;
    var edad = document.getElementById("edad").value;
    var Domicilio = document.getElementById("Domicilio").value;
    var Colonia = document.getElementById("Colonia").value;
    var CodPostal = document.getElementById("CodPostal").value;

    //Variables Documentacion
    var curp = document.getElementById("curp").value;
    var afore = document.getElementById("afore").value;
    var rfc = document.getElementById("rfc").value;
    var licencia = document.getElementById("licencia").value;
    var cartilla = document.getElementById("cartilla").value;
    var pasaporte = document.getElementById("pasaporte").value;
    var numeroSS = document.getElementById("numeroSS").value;
    var numLicencia = document.getElementById("numLicencia").value;
    var docsExtranjero = document.getElementById("docsExtranjero").value;

    //Variables Estado De Salud Y Habitos Personales
    var SaludActual = document.getElementById("SaludActual").value;
    var EnferCronica = document.getElementById("EnferCronica").value;
    var Deporte = document.getElementById("Deporte").value;
    var PerteneAclub = document.getElementById("PerteneAclub").value;
    var TiempoLibre = document.getElementById("TiempoLibre").value;
    var MetaVida = document.getElementById("MetaVida").value;
    
    //Variables Datos Familiares
    var nombreP = document.getElementById("nombreP").value;
    var viveP = document.getElementById("viveP").value;
	var finadoP = document.getElementById("finadoP").value;
    var domicilioP = document.getElementById("domicilioP").value;
    var ocupacionP = document.getElementById("ocupacionP").value;
    var nombreM = document.getElementById("nombreM").value;
    var viveM = document.getElementById("viveM").value;
    var finadoM = document.getElementById("finadoM").value;
    var domicilioM = document.getElementById("domicilioM").value;
    var ocupacionM = document.getElementById("ocupacionM").value;
    var nombreEs = document.getElementById("nombreEs").value;
    var viveEs = document.getElementById("viveEs").value;
    var finadoEs = document.getElementById("finadoEs").value;
    var domicilioEs = document.getElementById("domicilioEs").value;
    var ocupacionEs = document.getElementById("ocupacionEs").value;
    var hijos = document.getElementById("hijos").value;
    
    //Variables Escolaridad
    var primaria = document.getElementById("primaria").value;
    var DomicilioPrim = document.getElementById("DomicilioPrim").value;
    var fechaPrimaria = document.getElementById("fechaPrimaria").value;
    var fechaPrimaria2 = document.getElementById("fechaPrimaria2").value;
    var anios1 = document.getElementById("anios1").value;
    var TituloPrimaria = document.getElementById("TituloPrimaria").value;
    var Secundaria = document.getElementById("Secundaria").value;
    var DomicilioSec = document.getElementById("DomicilioSec").value;
    var fechaSecundaria = document.getElementById("fechaSecundaria").value;
    var fechaSecundaria2 = document.getElementById("fechaSecundaria2").value;
    var anios2 = document.getElementById("anios2").value;
    var TituloSecundaria = document.getElementById("TituloSecundaria").value;
    var Preparatoria = document.getElementById("Preparatoria").value;
    var Domiciliobachi = document.getElementById("Domiciliobachi").value;
    var fechaPrepa = document.getElementById("fechaPrepa").value;
    var fechaPrepa2 = document.getElementById("fechaPrepa2").value;
    var anios3 = document.getElementById("anios3").value;
    var TituloPrepa = document.getElementById("TituloPrepa").value;
    var Profesional = document.getElementById("Profesional").value;
    var DomicilioProfe = document.getElementById("DomicilioProfe").value;
    var fechaProfec = document.getElementById("fechaProfec").value;
    var fechaProfec2 = document.getElementById("fechaProfec2").value;
    var anios4 = document.getElementById("anios4").value;
    var TituloProfecional = document.getElementById("TituloProfecional").value;
    var Comercial = document.getElementById("Comercial").value;
    var DomicilioComercia = document.getElementById("DomicilioComercia").value;
    var fechaComer = document.getElementById("fechaComer").value;
    var fechaComer2 = document.getElementById("fechaComer2").value;
    var anios5 = document.getElementById("anios5").value;
    var TituloComercial = document.getElementById("TituloComercial").value;
    var EscuelaActual = document.getElementById("EscuelaActual").value;
    var Horario = document.getElementById("Horario").value;
    var CursoCarrera = document.getElementById("CursoCarrera").value;
    var Grado = document.getElementById("Grado").value;

    //Variables Conocimientos Generales
    var idiomas = document.getElementById("idiomas").value;
    var funcionesO = document.getElementById("funcionesO").value;
	var maquinasO = document.getElementById("maquinasO").value;
    var otrosT = document.getElementById("otrosT").value;

    //Variables Empleo Acutal O Anterior
    var TimeService = document.getElementById("TimeService").value;
    var TimeServiceAnt = document.getElementById("TimeServiceAnt").value;
	var NomEmpresa = document.getElementById("NomEmpresa").value;
	var NomEmpresaAnt = document.getElementById("NomEmpresaAnt").value;
    var DomicilioEmpresa = document.getElementById("DomicilioEmpresa").value;
    var DomicilioEmpresaAnt = document.getElementById("DomicilioEmpresaAnt").value;
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
    
    //Referencias Personales
    var nombre1 = document.getElementById("nombre1").value;
    var domicilio1 = document.getElementById("domicilio1").value;
    var telefono1 = document.getElementById("telefono1").value;
    var ocupacion1 = document.getElementById("ocupacion1").value;
    var tiempo1 = document.getElementById("tiempo1").value;
    var nombre2 = document.getElementById("nombre2").value;
    var domicilio2 = document.getElementById("domicilio2").value;
    var telefono2 = document.getElementById("telefono2").value;
    var ocupacion2 = document.getElementById("ocupacion2").value;
    var tiempo2 = document.getElementById("tiempo2").value;
    var nombre3 = document.getElementById("nombre3").value;
    var domicilio3 = document.getElementById("domicilio3").value;
    var telefono3 = document.getElementById("telefono3").value;
    var ocupacion3 = document.getElementById("ocupacion3").value;
    var tiempo3 = document.getElementById("tiempo3").value;
    
    //Datos Generales
    var InformeSi1 = document.getElementById("InformeSi1").value;
    var InformeNo2 = document.getElementById("InformeNo2").value;
    var InformeSi3 = document.getElementById("InformeSi3").value;
    var InformeNo4 = document.getElementById("InformeNo4").value;
	var InformeSi5 = document.getElementById("InformeSi5").value;
	var domicilio2 = document.getElementById("domicilio2").value;
    var InformeNo6 = document.getElementById("InformeNo6").value;
	var InformeSi7 = document.getElementById("InformeSi7").value;
	var InformeNo8 = document.getElementById("InformeNo8").value;
    var InformeSi9 = document.getElementById("InformeSi9").value;
    var InformeNo10 = document.getElementById("InformeNo10").value;
	var InformeSi11 = document.getElementById("InformeSi11").value;
	var InformeNo12 = document.getElementById("InformeNo12").value;
	var InformeNo14 = document.getElementById("InformeNo14").value;
    var FechaTrabajar = document.getElementById("FechaTrabajar").value;

    //Datos Economicos
    var ingresosOpcNo = document.getElementById("ingresosOpcNo").value;
    var ingresoOpcSi = document.getElementById("ingresoOpcSi").value;
    var otrosIngresos = document.getElementById("otrosIngresos").value;
    var importeM = document.getElementById("importeM").value;
	var conyugeTraNo = document.getElementById("conyugeTraNo").value;
	var conyugeTraSi = document.getElementById("conyugeTraSi").value;
    var trabajoConyuge = document.getElementById("trabajoConyuge").value;
	var percepcionM = document.getElementById("percepcionM").value;
	var casaPNo = document.getElementById("casaPNo").value;
    var casaPSi = document.getElementById("casaPSi").value;
    var importeMensual = document.getElementById("importeMensual").value;
	var rentaN = document.getElementById("rentaN").value;
	var rentaS = document.getElementById("rentaS").value;
	var rentaM = document.getElementById("rentaM").value;
    var autoN = document.getElementById("autoN").value;
	var placasA = document.getElementById("placasA").value;
    var marcaA = document.getElementById("marcaA").value;
    var modeloA = document.getElementById("modeloA").value;
	var deudasN = document.getElementById("deudasN").value;
	var dudasS = document.getElementById("rentaS").value;
	var claseA = document.getElementById("claseA").value;
    var importeD = document.getElementById("importeD").value;
    var ingreso = document.getElementById("ingreso").value;
	var ahorro = document.getElementById("ahorro").value;
	var abonoM = document.getElementById("abonoM").value;
	var egresos = document.getElementById("egresos").value;
    var totalGastos = document.getElementById("totalGastos").value;
    
    //
    var observaciones = document.getElementById("observaciones").value;
    var firma = document.getElementById("firma").value;

    //Item Solicitud de Empleo
    localStorage.setItem("solicitudEmp",solicitudEmpl);
    localStorage.setItem("fecha",fecha);
    localStorage.setItem("sueldoMensualD", sueldoMensualDe);
    localStorage.setItem("sueldoMensualA", sueldoMensualAu);
	localStorage.setItem("fechaContratacion", fechaContra);

    //Item Datos Personales
    localStorage.setItem("APaterno", APaterno);
	localStorage.setItem("Amaterno", Amaterno);
	localStorage.setItem("nombres", nombres);
    localStorage.setItem("edad", edad);
	localStorage.setItem("Domicilio", Domicilio);
    localStorage.setItem("Colonia", Colonia);
	localStorage.setItem("CodPostal", CodPostal);

    //Item Documentacion
    localStorage.setItem("curp", curp);
	localStorage.setItem("afore", afore);
	localStorage.setItem("rfc", rfc);
    localStorage.setItem("licencia", licencia);
	localStorage.setItem("cartilla", cartilla);
    localStorage.setItem("pasaporte", pasaporte);
	localStorage.setItem("numeroSS", numeroSS);
    localStorage.setItem("numLicencia", numLicencia);
	localStorage.setItem("docsExtranjero", docsExtranjero);

    //Item Estado de salud y habitos
    localStorage.setItem("SaludActual", SaludActual);
	localStorage.setItem("EnferCronica", EnferCronica);
	localStorage.setItem("Deporte", Deporte);
    localStorage.setItem("PerteneAclub", PerteneAclub);
	localStorage.setItem("TiempoLibre", TiempoLibre);
    localStorage.setItem("MetaVida", MetaVida);

    //Item Datos Familiares
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

    //Item Escolaridad
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

    //Item Conocimientos Generales
    localStorage.setItem("idiomas", idiomas);
	localStorage.setItem("funcionesO", funcionesO);
	localStorage.setItem("maquinasO", maquinasO);
    localStorage.setItem("otrosT", otrosT)

    //Item Empleo Actual O Anterior
    localStorage.setItem("TimeService", TimeService);
	localStorage.setItem("TimeServiceAnt", TimeServiceAnt);
	localStorage.setItem("NomEmpresa", NomEmpresa);
    localStorage.setItem("NomEmpresaAnt", NomEmpresaAnt);
	localStorage.setItem("DomicilioEmpresa", DomicilioEmpresa);
    localStorage.setItem("DomicilioEmpresaAnt", DomicilioEmpresaAnt);
    localStorage.setItem("TelEmpresa", TelEmpresa);
    localStorage.setItem("TelEmpresaAnt", TelEmpresaAnt);
	localStorage.setItem("PuestoInicial1", PuestoInicial1);
	localStorage.setItem("PuestoFinal2", PuestoFinal2);
    localStorage.setItem("PuestoInicialAnt1", PuestoInicialAnt1);
	localStorage.setItem("PuestoFinalAnt2", PuestoFinalAnt2);
    localStorage.setItem("SueldoInicial1", SueldoInicial1);
	localStorage.setItem("SueldoFinal2", SueldoFinal2);
    localStorage.setItem("SueldoInicialAnt1", SueldoInicialAnt1);
    localStorage.setItem("SueldoFinalAnt2", SueldoFinalAnt2);
    localStorage.setItem("MotivoSeparacion", MotivoSeparacion);
	localStorage.setItem("MotivoSeparacionAnt", MotivoSeparacionAnt);
	localStorage.setItem("ActDesempenadas", ActDesempenadas);
    localStorage.setItem("ActDesempenadasAnt", ActDesempenadasAnt);
	localStorage.setItem("InformeSi", InformeSi);
	localStorage.setItem("InformeNo", InformeNo);

    //Item Referencias Personales
    localStorage.setItem("nombre1", nombre1);
	localStorage.setItem("domicilio1", domicilio1);
	localStorage.setItem("telefono1", telefono1);
    localStorage.setItem("ocupacion1", ocupacion1);
	localStorage.setItem("tiempo1", tiempo1);
    localStorage.setItem("nombre2", nombre2);
    localStorage.setItem("domicilio2", domicilio2);
    localStorage.setItem("telefono2", telefono2);
	localStorage.setItem("ocupacion2", ocupacion2);
    localStorage.setItem("tiempo2", tiempo2);
	localStorage.setItem("nombre3", nombre3);
    localStorage.setItem("domicilio3", domicilio3);
	localStorage.setItem("telefono3", telefono3);
    localStorage.setItem("ocupacion3", ocupacion3);
	localStorage.setItem("tiempo3", tiempo3);

    //Item Datos Generales
    localStorage.setItem("InformeSi1", InformeSi1);
	localStorage.setItem("InformeNo2", InformeNo2);
	localStorage.setItem("InformeSi3", InformeSi3);
    localStorage.setItem("InformeNo4", InformeNo4);
	localStorage.setItem("InformeSi5", InformeSi5);
    localStorage.setItem("InformeNo6", InformeNo6);
    localStorage.setItem("InformeSi7", InformeSi7);
	localStorage.setItem("InformeNo8", InformeNo8);
    localStorage.setItem("InformeSi9", InformeSi9);
	localStorage.setItem("InformeNo10", InformeNo10);
    localStorage.setItem("InformeSi11", InformeSi11);
	localStorage.setItem("InformeNo12", InformeNo12);
    localStorage.setItem("InformeSi13", InformeSi13);
    localStorage.setItem("InformeNo14", InformeNo14);
    localStorage.setItem("FechaTrabajar", FechaTrabajar);

    //Item Datos Economicos
    localStorage.setItem("ingresosOpcNo", ingresosOpcNo);
	localStorage.setItem("ingresoOpcSi", ingresoOpcSi);
	localStorage.setItem("importeM", importeM);
    localStorage.setItem("otrosIngresos", otrosIngresos);
	localStorage.setItem("conyugeTraNo", conyugeTraNo);
    localStorage.setItem("conyugeTraSi", conyugeTraSi);
    localStorage.setItem("percepcionM", percepcionM);
	localStorage.setItem("casaPNo", casaPNo);
    localStorage.setItem("casaPSi", casaPSi);
	localStorage.setItem("importeMensual", importeMensual);
    localStorage.setItem("rentaM", rentaM);
	localStorage.setItem("rentaN", rentaN);
    localStorage.setItem("autoN", autoN);
    localStorage.setItem("placasA", placasA);
    localStorage.setItem("marcaA", marcaA);
    localStorage.setItem("modeloA", modeloA);
	localStorage.setItem("deudasN", deudasN);
    localStorage.setItem("dudasS", dudasS);
	localStorage.setItem("rentaN", rentaN);
    localStorage.setItem("claseA", claseA);
    localStorage.setItem("importeD", importeD);
    localStorage.setItem("placasA", placasA);
    localStorage.setItem("ingreso", ingreso);
	localStorage.setItem("ahorro", ahorro);
    localStorage.setItem("abonoM", abonoM);
    localStorage.setItem("egresos", egresos);
    localStorage.setItem("totalGastos", totalGastos);

    //
    localStorage.setItem("observaciones", observaciones);
	localStorage.setItem("firma", firma);


   // window.location.href="index2.html";

    
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

//----------------------------DATOS DE SOLICITUD DE EMPLEO----------------------------

document.getElementById("solicitudEmp").innerHTML = localStorage.getItem("solicitudEmp");
document.getElementById("fecha").innerHTML = localStorage.getItem("fecha");
document.getElementById("sueldoMensualD").innerHTML = localStorage.getItem("sueldoMensualD");
document.getElementById("sueldoMensualA").innerHTML = localStorage.getItem("sueldoMensualA");
document.getElementById("fechaContratacion").innerHTML = localStorage.getItem("fechaContratacion");
const datosDeEmpleo = {
    solicitudDeEmpleo: localStorage.getItem("solicitudEmp"),
    fecha: localStorage.getItem("fecha"),
    sueldoMensualD: localStorage.getItem("sueldoMensualD"),
    sueldoMensualA: localStorage.getItem("sueldoMensualA"),
    fechaContratacion: localStorage.getItem("fechaContratacion")
}
const nuevosdeEmpleo = JSON.stringify(datosDeEmpleo,null,2);

//----------------------------DATOS DE SOLISITUD DE EMPLEO----------------------------

//----------------------------DATOS PERSONALES-------------------------------------------------
document.getElementById("APaterno").innerHTML = localStorage.getItem("APaterno");
document.getElementById("Amaterno").innerHTML = localStorage.getItem("Amaterno");
document.getElementById("nombres").innerHTML = localStorage.getItem("nombres");
document.getElementById("edad").innerHTML = localStorage.getItem("edad");
document.getElementById("Domicilio").innerHTML = localStorage.getItem("Domicilio");
document.getElementById("Colonia").innerHTML = localStorage.getItem("Colonia");
document.getElementById("CodPostal").innerHTML = localStorage.getItem("CodPostal");

const datosP = {
    apellidoP: localStorage.getItem("APaterno"),
    apellidoM: localStorage.getItem("Amaterno"),
    nombreP: localStorage.getItem("nombres"),
    edadP: localStorage.getItem("edad"),
    domicilioP: localStorage.getItem("Domicilio"),
    colonia: localStorage.getItem("Colonia"),
    codPostal: localStorage.getItem("CodPostal")
}

const nuevoDatosP = JSON.stringify(datosP,null,2);
//----------------------------DATOS PERSONALES-------------------------------------------------

//----------------------------DOCUMENTACION-------------------------------------------------
document.getElementById("curp").innerHTML = localStorage.getItem("curp");
document.getElementById("afore").innerHTML = localStorage.getItem("afore");
document.getElementById("rfc").innerHTML = localStorage.getItem("rfc");
document.getElementById("licencia").innerHTML = localStorage.getItem("licencia");
document.getElementById("cartilla").innerHTML = localStorage.getItem("cartilla");
document.getElementById("pasaporte").innerHTML = localStorage.getItem("pasaporte");
document.getElementById("numeroSS").innerHTML = localStorage.getItem("numeroSS");
document.getElementById("numLicencia").innerHTML = localStorage.getItem("numLicencia");
document.getElementById("docsExtranjero").innerHTML = localStorage.getItem("docsExtranjero");

const documentacionCampo = {
    curp: localStorage.getItem("curp"),
    afore: localStorage.getItem("afore"),
    rfc: localStorage.getItem("rfc"),
    licencia: localStorage.getItem("licencia"),
    cartilla: localStorage.getItem("cartilla"),
    pasaporte: localStorage.getItem("pasaporte"),
    numeroSS: localStorage.getItem("numeroSS"),
    numLicencia: localStorage.getItem("numLicencia"),
    docsExtranjero: localStorage.getItem("docsExtranjero")
}

const nuevaDocumentacion = JSON.stringify(documentacionCampo,null,2);
//----------------------------DOCUMENTACION-------------------------------------------------


//----------------------------ESTADO DE SALUD Y HABITOS PERSONALES-------------------------------------------------
document.getElementById("SaludActual").innerHTML = localStorage.getItem("SaludActual");
document.getElementById("EnferCronica").innerHTML = localStorage.getItem("EnferCronica");
document.getElementById("Deporte").innerHTML = localStorage.getItem("Deporte");
document.getElementById("PerteneAclub").innerHTML = localStorage.getItem("PerteneAclub");
document.getElementById("TiempoLibre").innerHTML = localStorage.getItem("TiempoLibre");
document.getElementById("MetaVida").innerHTML = localStorage.getItem("MetaVida");

const estadoYHabitos = {
    saludActual: localStorage.getItem("SaludActual"),
    enferCronica: localStorage.getItem("EnferCronica"),
    deporte: localStorage.getItem("Deporte"),
    perteneceAclub: localStorage.getItem("PerteneAclub"),
    tiempoLibre: localStorage.getItem("TiempoLibre"),
    metaVida: localStorage.getItem("MetaVida")
}

const nuevoestadoYHabitos = JSON.stringify(estadoYHabitos,null,2);
//----------------------------ESTADO DE SALUD Y HABITOS PERSONALES-------------------------------------------------


//----------------------------DATOS FAMILIARES-------------------------------------------------

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

const datosFamiliares = {
    nombrePadre: localStorage.getItem("nombreP"),
    vivePadre: localStorage.getItem("viveP"),
    finadoPadre: localStorage.getItem("finadoP"),
    domicilioPadre: localStorage.getItem("domicilioP"),
    ocupacionPadre: localStorage.getItem("ocupacionP"),
    nombreMadre: localStorage.getItem("nombreM"),
    viveMadre: localStorage.getItem("viveM"),
    finadoMadre: localStorage.getItem("finadoM"),
    domicilioMadre: localStorage.getItem("domicilioM"),
    ocupacionMadre: localStorage.getItem("ocupacionM"),
    nombreEs: localStorage.getItem("nombreEs"),
    viveEs: localStorage.getItem("viveEs"),
    finadoEs: localStorage.getItem("finadoEs"),
    domicilioEs: localStorage.getItem("domicilioEs"),
    ocupacionEs: localStorage.getItem("ocupacionEs"),
    hijos: localStorage.getItem("hijos")
}

const nuevoDatosFamiliares = JSON.stringify(datosFamiliares,null,2);
//----------------------------DATOS FAMILIARES-------------------------------------------------


//----------------------------ESCOLARIDAD-------------------------------------------------

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
document.getElementById("fechaPrepa2").innerHTML = localStorage.getItem("fechaPrepa2");


document.getElementById("anios3").innerHTML = localStorage.getItem("anios3");
document.getElementById("TituloPrepa").innerHTML = localStorage.getItem("TituloPrepa");
document.getElementById("Profesional").innerHTML = localStorage.getItem("Profesional");
document.getElementById("DomicilioProfe").innerHTML = localStorage.getItem("DomicilioProfe");
document.getElementById("fechaProfec").innerHTML = localStorage.getItem("fechaProfec");
document.getElementById("fechaProfec2").innerHTML = localStorage.getItem("fechaProfec2");
document.getElementById("anios4").innerHTML = localStorage.getItem("anios4");
document.getElementById("TituloProfecional").innerHTML = localStorage.getItem("TituloProfecional");
document.getElementById("Comercial").innerHTML = localStorage.getItem("Comercial");
document.getElementById("DomicilioComercia").innerHTML = localStorage.getItem("DomicilioComercia");
document.getElementById("fechaComer").innerHTML = localStorage.getItem("fechaComer");
document.getElementById("fechaComer2").innerHTML = localStorage.getItem("fechaComer2");
document.getElementById("anios5").innerHTML = localStorage.getItem("anios5");
document.getElementById("TituloComercial").innerHTML = localStorage.getItem("TituloComercial");
document.getElementById("EscuelaActual").innerHTML = localStorage.getItem("EscuelaActual");
document.getElementById("Horario").innerHTML = localStorage.getItem("Horario");
document.getElementById("CursoCarrera").innerHTML = localStorage.getItem("CursoCarrera");
document.getElementById("Grado").innerHTML = localStorage.getItem("Grado");

const datosEscolares = {
    primaria: localStorage.getItem("primaria"),
    domicilioPrimaria: localStorage.getItem("DomicilioPrim"),
    fechaPrimaria: localStorage.getItem("fechaPrimaria"),
    fechaPrimaria2: localStorage.getItem("fechaPrimaria2"),
    anios1: localStorage.getItem("anios1"),
    tituloPrimaria: localStorage.getItem("TituloPrimaria"),
    secundaria: localStorage.getItem("Secundaria"),
    domicilioSecundaria: localStorage.getItem("DomicilioSec"),
    fechaSecundaria: localStorage.getItem("fechaSecundaria"),
    fechaSecundaria2: localStorage.getItem("fechaSecundaria2"),
    anios2: localStorage.getItem("anios2"),
    tituloSecundaria: localStorage.getItem("TituloSecundaria"),
    preparatoria: localStorage.getItem("Preparatoria"),
    domicilioBachillerato: localStorage.getItem("Domiciliobachi"),
    fechaPrepa: localStorage.getItem("fechaPrepa"),
    fechaPrepa2: localStorage.getItem("fechaPrepa2"),
    anio3: localStorage.getItem("anios3"),
    tituloPrepa: localStorage.getItem("TituloPrepa"),
    profesional: localStorage.getItem("Profesional"),
    domicilioProfe: localStorage.getItem("DomicilioProfe"),
    fechaProfec: localStorage.getItem("fechaProfec"),
    fechaProfec2: localStorage.getItem("fechaProfec2"),
    anio4: localStorage.getItem("anios4"),
    tituloProfesional: localStorage.getItem("TituloProfecional"),
    comercial: localStorage.getItem("Comercial"),
    domicilioComercial: localStorage.getItem("DomicilioComercia"),
    fechaComercial: localStorage.getItem("fechaComer"),
    fechaComercial2: localStorage.getItem("fechaComer2"),
    anios5: localStorage.getItem("anios5"),
    tituloComercial: localStorage.getItem("TituloComercial"),
    escuelaActual: localStorage.getItem("EscuelaActual"),
    horario: localStorage.getItem("Horario"),
    cursoCarrera: localStorage.getItem("CursoCarrera"),
    grado: localStorage.getItem("Grado")
}

const nuevoDatosEscolaridad = JSON.stringify(datosEscolares,null,2);
//----------------------------DATOS FAMILIARES-------------------------------------------------

//----------------------------CONOCIMIENTOS GENERALES-------------------------------------------------
document.getElementById("idiomas").innerHTML = localStorage.getItem("idiomas");
document.getElementById("funcionesO").innerHTML = localStorage.getItem("funcionesO");
document.getElementById("maquinasO").innerHTML = localStorage.getItem("maquinasO");
document.getElementById("otrosT").innerHTML = localStorage.getItem("otrosT");

const datosConocimientosGenerales = {
    idiomas: localStorage.getItem("idiomas"),
    funcionesO: localStorage.getItem("funcionesO"),
    maquinasO: localStorage.getItem("maquinasO"),
    otrosT: localStorage.getItem("otrosT"),
}

const nuevoConocimientosGenerales = JSON.stringify(datosConocimientosGenerales,null,2);
//----------------------------CONOCIMIENTOS GENERALES-------------------------------------------------


//----------------------------EMPLEO ACTUAL O ANTERIOR-------------------------------------------------

document.getElementById("TimeService").innerHTML = localStorage.getItem("TimeService");
document.getElementById("TimeServiceAnt").innerHTML = localStorage.getItem("TimeServiceAnt");
document.getElementById("NomEmpresa").innerHTML = localStorage.getItem("NomEmpresa");
document.getElementById("NomEmpresaAnt").innerHTML = localStorage.getItem("NomEmpresaAnt");


document.getElementById("DomicilioEmpresa").innerHTML = localStorage.getItem("DomicilioEmpresa");
document.getElementById("DomicilioEmpresaAnt").innerHTML = localStorage.getItem("DomicilioEmpresaAnt");
document.getElementById("TelEmpresa").innerHTML = localStorage.getItem("TelEmpresa");
document.getElementById("TelEmpresaAnt").innerHTML = localStorage.getItem("TelEmpresaAnt");
document.getElementById("PuestoInicial1").innerHTML = localStorage.getItem("PuestoInicial1");
document.getElementById("PuestoFinal2").innerHTML = localStorage.getItem("PuestoFinal2");
document.getElementById("PuestoInicialAnt1").innerHTML = localStorage.getItem("PuestoInicialAnt");
document.getElementById("PuestoFinalAnt2").innerHTML = localStorage.getItem("PuestoFinalAnt");
document.getElementById("SueldoInicial1").innerHTML = localStorage.getItem("SueldoInicial1");
document.getElementById("SueldoFinal2").innerHTML = localStorage.getItem("SueldoFinal2");
document.getElementById("SueldoInicialAnt1").innerHTML = localStorage.getItem("SueldoInicialAnt1");
document.getElementById("SueldoFinalAnt2").innerHTML = localStorage.getItem("SueldoFinalAnt2");
document.getElementById("MotivoSeparacion").innerHTML = localStorage.getItem("MotivoSeparacion");
document.getElementById("MotivoSeparacionAnt").innerHTML = localStorage.getItem("MotivoSeparacionAnt");
document.getElementById("ActDesempenadas").innerHTML = localStorage.getItem("ActDesempenadas");
document.getElementById("ActDesempenadasAnt").innerHTML = localStorage.getItem("ActDesempenadasAnt");
document.getElementById("InformeSi").innerHTML = localStorage.getItem("InformeSi");
document.getElementById("InformeNo").innerHTML = localStorage.getItem("InformeNo");

const datosEmpleosActualOAnterior = {
    TimeService: localStorage.getItem("TimeService"),
    TimeServiceAnt: localStorage.getItem("TimeServiceAnt"),
    NomEmpresa: localStorage.getItem("NomEmpresa"),
    NomEmpresaAnt:localStorage.getItem("NomEmpresaAnt"),

        
    DomicilioEmpresa:localStorage.getItem("DomicilioEmpresa"),
    DomicilioEmpresaAnt:localStorage.getItem("DomicilioEmpresaAnt"),
    TelEmpresa:localStorage.getItem("TelEmpresa"),
    TelEmpresaAnt:localStorage.getItem("TelEmpresaAnt"),
    PuestoInicial1:localStorage.getItem("PuestoInicial1"),
    PuestoFinal2:localStorage.getItem("PuestoFinal2"),
    PuestoInicialAnt1:localStorage.getItem("PuestoInicialAnt"),
    PuestoFinalAnt2:localStorage.getItem("PuestoFinalAnt"),
    SueldoInicial1:localStorage.getItem("SueldoInicial1"),
    SueldoFinal2:localStorage.getItem("SueldoFinal2"),
    SueldoInicialAnt1:localStorage.getItem("SueldoInicialAnt1"),
    SueldoFinalAnt2:localStorage.getItem("SueldoFinalAnt2"),
    MotivoSeparacion:localStorage.getItem("MotivoSeparacion"),
    MotivoSeparacionAnt:localStorage.getItem("MotivoSeparacionAnt"),
    ActDesempenadas:localStorage.getItem("ActDesempemnadas"),
    ActDesempenadasAnt:localStorage.getItem("ActDesempenadasAnt"),
    InformeSi:localStorage.getItem("InformeSi"),
    InformeNo:localStorage.getItem("InformeNo"),
}

const nuevoDatosEmpleosActualOAnterior = JSON.stringify(datosEmpleosActualOAnterior,null,2);

//----------------------------EMPLEO ACTUAL O ANTERIOR-------------------------------------------------


//----------------------------REFERENCIAS PERSONALEA-------------------------------------------------
document.getElementById("nombre1").innerHTML = localStorage.getItem("nombre1");
document.getElementById("domicilio1").innerHTML = localStorage.getItem("domicilio1");
document.getElementById("telefono1").innerHTML = localStorage.getItem("telefono1");
document.getElementById("ocupacion1").innerHTML = localStorage.getItem("ocupacion1");
document.getElementById("tiempo1").innerHTML = localStorage.getItem("tiempo1");
document.getElementById("nombre2").innerHTML = localStorage.getItem("nombre2");
document.getElementById("domicilio2").innerHTML = localStorage.getItem("domicilio2");
document.getElementById("telefono2").innerHTML = localStorage.getItem("telefono2");
document.getElementById("ocupacion2").innerHTML = localStorage.getItem("ocupacion2");
document.getElementById("tiempo2").innerHTML = localStorage.getItem("tiempo2");
document.getElementById("nombre3").innerHTML = localStorage.getItem("nombre3");
document.getElementById("domicilio3").innerHTML = localStorage.getItem("domicilio3");
document.getElementById("telefono3").innerHTML = localStorage.getItem("telefono3");
document.getElementById("ocupacion3").innerHTML = localStorage.getItem("ocupacion3");
document.getElementById("tiempo3").innerHTML = localStorage.getItem("tiempo3");

const datosReferenciaPersonal = {
    nombre1: localStorage.getItem("nombre1"),
    domicilio1: localStorage.getItem("domicilio1"),
    telefono1: localStorage.getItem("telefono1"),
    ocupacion1: localStorage.getItem("ocupacion1"),
    tiempo1: localStorage.getItem("tiempo1"),
    nombre2: localStorage.getItem("nombre2"),
    domicilio2: localStorage.getItem("domicilio2"),
    telefono2: localStorage.getItem("telefono2"),
    ocupacion2: localStorage.getItem("ocupacion2"),
    tiempo2: localStorage.getItem("tiempo2"),
    nombre3: localStorage.getItem("nombre3"),
    domicilio3: localStorage.getItem("domicilio3"),
    telefono3: localStorage.getItem("telefono3"),
    ocupacion3: localStorage.getItem("ocupacion3"),
    tiempo3: localStorage.getItem("tiempo3"),
}

const nuevaReferenciaPersonal = JSON.stringify(datosReferenciaPersonal,null,2);

//----------------------------REFERENCIAS PERSONALEA-------------------------------------------------

//----------------------------REFERENCIAS PERSONALEA-------------------------------------------------

document.getElementById("InformeSi1").innerHTML = localStorage.getItem("InformeSi1");
document.getElementById("InformeNo2").innerHTML = localStorage.getItem("InformeNo2");
document.getElementById("InformeSi3").innerHTML = localStorage.getItem("InformeSi3");
document.getElementById("InformeNo4").innerHTML = localStorage.getItem("InformeNo4");
document.getElementById("InformeSi5").innerHTML = localStorage.getItem("InformeSi5");
document.getElementById("InformeNo6").innerHTML = localStorage.getItem("InformeNo6");
document.getElementById("InformeSi7").innerHTML = localStorage.getItem("InformeSi7");
document.getElementById("InformeNo8").innerHTML = localStorage.getItem("InformeNo8");
document.getElementById("InformeSi9").innerHTML = localStorage.getItem("InformeSi9");
document.getElementById("InformeNo10").innerHTML = localStorage.getItem("InformeNo10");
document.getElementById("InformeSi11").innerHTML = localStorage.getItem("InformeSi11");
document.getElementById("InformeNo12").innerHTML = localStorage.getItem("InformeNo12");
document.getElementById("InformeSi13").innerHTML = localStorage.getItem("InformeSi13");
document.getElementById("InformeNo14").innerHTML = localStorage.getItem("InformeNo14");
document.getElementById("FechaTrabajar").innerHTML = localStorage.getItem("FechaTrabajar");

const datosReferenciaPersonal2 = {
    InformeSi1:localStorage.getItem("InformeSi1"),
    InformeNo2:localStorage.getItem("InformeNo2"),
    InformeSi3:localStorage.getItem("InformeSi3"),
    InformeNo4:localStorage.getItem("InformeNo4"),
    InformeSi5:localStorage.getItem("InformeSi5"),
    InformeNo6:localStorage.getItem("InformeNo6"),
    InformeSi7:localStorage.getItem("InformeSi7"),
    InformeNo8:localStorage.getItem("InformeNo8"),
    InformeSi9:localStorage.getItem("InformeSi9"),
    InformeNo10:localStorage.getItem("InformeNo10"),
    InformeSi11:localStorage.getItem("InformeSi11"),
    InformeNo12:localStorage.getItem("InformeNo12"),
    InformeSi13:localStorage.getItem("InformeSi13"),
    InformeNo14:localStorage.getItem("InformeNo14"),
    FechaTrabajar:localStorage.getItem("FechaTrabajar"),
}

const nuevaReferenciaPersonal2 = JSON.stringify(datosReferenciaPersonal2,null,2);


//----------------------------REFERENCIAS PERSONALEA-------------------------------------------------

//----------------------------DATOS ECONOMICOS-------------------------------------------------

document.getElementById("ingresosOpcNo").innerHTML = localStorage.getItem("ingresosOpcNo");
document.getElementById("ingresoOpcSi").innerHTML = localStorage.getItem("ingresoOpcSi");
document.getElementById("otrosIngresos").innerHTML = localStorage.getItem("otrosIngresos");
document.getElementById("importeM").innerHTML = localStorage.getItem("importeM");
document.getElementById("conyugeTraNo").innerHTML = localStorage.getItem("conyugeTraNo");
document.getElementById("conyugeTraSi").innerHTML = localStorage.getItem("conyugeTraSi");
document.getElementById("trabajoConyuge").innerHTML = localStorage.getItem("trabajoConyuge");
document.getElementById("percepcionM").innerHTML = localStorage.getItem("percepcionM");
document.getElementById("casaPNo").innerHTML = localStorage.getItem("casaPNo");
document.getElementById("rentaS").innerHTML = localStorage.getItem("rentaS");


document.getElementById("rentaM").innerHTML = localStorage.getItem("rentaM");
document.getElementById("autoN").innerHTML = localStorage.getItem("autoN");
document.getElementById("placasA").innerHTML = localStorage.getItem("placasA");
document.getElementById("modeloA").innerHTML = localStorage.getItem("modeloA");
document.getElementById("deudasN").innerHTML = localStorage.getItem("deudasN");
document.getElementById("dudasS").innerHTML = localStorage.getItem("dudasS");
document.getElementById("claseA").innerHTML = localStorage.getItem("claseA");
document.getElementById("importeD").innerHTML = localStorage.getItem("importeD");
document.getElementById("ingreso").innerHTML = localStorage.getItem("ingreso");
document.getElementById("ahorro").innerHTML = localStorage.getItem("ahorro");
document.getElementById("abonoM").innerHTML = localStorage.getItem("abonoM");
document.getElementById("egresos").innerHTML = localStorage.getItem("egresos");
document.getElementById("totalGastos").innerHTML = localStorage.getItem("totalGastos");

const datosEconomicos = {
    ingresosOpcNo:localStorage.getItem("ingresosOpcNo"),
    ingresoOpcSi:localStorage.getItem("ingresoOpcSi"),
    otrosIngresos:localStorage.getItem("otrosIngresos"),
    importeM:localStorage.getItem("importeM"),
    conyugeTraNo:localStorage.getItem("conyugeTraNo"),
    conyugeTraSi:localStorage.getItem("conyugeTraSi"),
    trabajoConyuge:localStorage.getItem("trabajoConyuge"),
    percepcionM:localStorage.getItem("percepcionM"),
    casaPNo:localStorage.getItem("casaPNo"),
    rentaS:localStorage.getItem("rentaS"),

    
    rentaM:localStorage.getItem("rentaM"),
    autoN:localStorage.getItem("autoN"),
    placasA:localStorage.getItem("placasA"),
    modeloA:localStorage.getItem("modeloA"),
    deudasN:localStorage.getItem("deudasN"),
    dudasS:localStorage.getItem("dudasS"),
    claseA:localStorage.getItem("claseA"),
    importeD:localStorage.getItem("importeD"),
    ingreso:localStorage.getItem("ingreso"),
    ahorro:localStorage.getItem("ahorro"),
    abonoM:localStorage.getItem("abonoM"),
    egresos:localStorage.getItem("egresos"),
    totalGastos:localStorage.getItem("totalGastos"),
}

const nuevaDatosEconomicos = JSON.stringify(datosEconomicos,null,2);

//----------------------------DATOS ECONOMICOS-------------------------------------------------


document.getElementById("observaciones").innerHTML = localStorage.getItem("observaciones");
document.getElementById("firma").innerHTML = localStorage.getItem("firma");
