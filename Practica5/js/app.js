function subir(){
    //Variables Solicitud de Empleo
    let solicitudEmpl = document.form1.solicitudEmp.value;
    let fecha = document.form1.fecha.value;
    let sueldoMensualDe = document.form1.sueldoMensualD.value;
    let sueldoMensualAu = document.form1.sueldoMensualA.value;
    let fechaContra = document.form1.fechaContratacion.value;
    let apaterno = document.form1.APaterno.value;
    let amaterno = document.form1.Amaterno.value;
    let nombreS = document.form1.Nombres.value;
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
    var TimeService = document.form1.TimeService.value;
    var TimeServiceAnt = document.form1.TimeServiceAnt.value;
	var NomEmpresa = document.form1.NomEmpresa.value;
	var NomEmpresaAnt = document.form1.NomEmpresaAnt.value;
    var DomicilioEmpresa = document.form1.DomicilioEmpresa.value;
    var DomicilioEmpresaAnt = document.form1.DomicilioEmpresaAnt.value;
	var TelEmpresa = document.form1.TelEmpresa.value;
	var TelEmpresaAnt = document.form1.TelEmpresaAnt.value;
	var PuestoInicial1 = document.form1.PuestoInicial1.value;
	var PuestoFinal2 = document.form1.PuestoFinal2.value;
    var PuestoInicialAnt1 = document.form1.PuestoInicialAnt1.value;
    var PuestoFinalAnt2 = document.form1.PuestoFinalAnt2.value;
	var SueldoInicial1 = document.form1.SueldoInicial1.value;
	var SueldoFinal2 = document.form1.SueldoFinal2.value;
    var SueldoInicialAnt1 = document.form1.SueldoInicialAnt1.value;
	var SueldoFinalAnt2 = document.form1.SueldoFinalAnt2.value;
	var MotivoSeparacion = document.form1.MotivoSeparacion.value;
    var MotivoSeparacionAnt = document.form1.MotivoSeparacionAnt.value;
    var ActDesempenadas = document.form1.ActDesempenadas.value;
	var ActDesempenadasAnt = document.form1.ActDesempenadasAnt.value;
	var InformeSi = document.form1.InformeSi.value;
	var InformeNo = document.form1.InformeNo.value;
    var nombre1 = document.form1.nombre1.value;
    var domicilio1 = document.form1.domicilio1.value;
    var telefono1 = document.form1.telefono1.value;
    var ocupacion1 = document.form1.ocupacion1.value;
    var tiempo1 = document.form1.tiempo1.value;
    var nombre2 = document.form1.nombre2.value;
    var domicilio2 = document.form1.domicilio2.value;
    var telefono2 = document.form1.telefono2.value;
    var ocupacion2 = document.form1.ocupacion2.value;
    var tiempo2 = document.form1.tiempo2.value;
    var nombre3 = document.form1.nombre3.value;
    var domicilio3 = document.form1.domicilio3.value;
    var telefono3 = document.form1.telefono3.value;
    var ocupacion3 = document.form1.ocupacion3.value;
    var tiempo3 = document.form1.tiempo3.value;
    var InformeSi1 = document.form1.InformeSi1.value;
    var InformeNo2 = document.form1.InformeNo2.value;
    var InformeSi3 = document.form1.InformeSi3.value;
    var InformeNo4 = document.form1.InformeNo4.value;
	var InformeSi5 = document.form1.InformeSi5.value;
    var InformeNo6 = document.form1.InformeNo6.value;
	var InformeSi7 = document.form1.InformeSi7.value;
	var InformeNo8 = document.form1.InformeNo8.value;
    var InformeSi9 = document.form1.InformeSi9.value;
    var InformeNo10 = document.form1.InformeNo10.value;
	var InformeSi11 = document.form1.InformeSi11.value;
	var InformeNo12 = document.form1.InformeNo12.value;
    var InformeSi13 = document.form1.InformeSi13.value;
	var InformeNo14 = document.form1.InformeNo14.value;
    var FechaTrabajar = document.form1.FechaTrabajar.value;
    var ingresosOpcNo = document.form1.ingresosOpcNo.value;
    var ingresoOpcSi = document.form1.ingresoOpcSi.value;
    var otrosIngresos = document.form1.otrosIngresos.value;
    var importeM = document.form1.importeM.value;
	var conyugeTraNo = document.form1.conyugeTraNo.value;
	var conyugeTraSi = document.form1.conyugeTraSi.value;
    var trabajoConyuge = document.form1.trabajoConyuge.value;
	var percepcionM = document.form1.percepcionM.value;
	var casaPNo = document.form1.casaPNo.value;
    var casaPSi = document.form1.casaPSi.value;
    var importeMensual = document.form1.importeMensual.value;
	var rentaN = document.form1.rentaN.value;
	var rentaS = document.form1.rentaS.value;
	var rentaM = document.form1.rentaM.value;
    var autoN = document.form1.autoN.value;/*
	var placasA = document.form1.placasA.value;
    var marcaA = document.form1.marcaA.value;
    var modeloA = document.form1.modeloA.value;
	var deudasN = document.form1.deudasN.value;
	var dudasS = document.form1.dudasS.value;
	var claseA = document.form1.claseA.value;
    var importeD = document.form1.importeD.value;
    var ingreso = document.form1.ingreso.value;
	var ahorro = document.form1.ahorro.value;
	var abonoM = document.form1.abonoM.value;
	var egresos = document.form1.egresos.value;
    var totalGastos = document.form1.totalGastos.value;/*
    
    //
    var observaciones = document.form1.observaciones.value;
    var firma = document.form1.firma.value;*/


    //Item Solicitud de Empleo
    localStorage.setItem("solicitudEmpleo",solicitudEmpl);
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
    localStorage.setItem("otrosT", otrosT);
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
    localStorage.setItem("ingresosOpcNo", ingresosOpcNo);
	localStorage.setItem("ingresoOpcSi", ingresoOpcSi);
	localStorage.setItem("importeM", importeM);
    localStorage.setItem("otrosIngresos", otrosIngresos);
	localStorage.setItem("conyugeTraNo", conyugeTraNo);
    localStorage.setItem("conyugeTraSi", conyugeTraSi);
    localStorage.setItem("trabajoConyuge", trabajoConyuge);
    localStorage.setItem("percepcionM", percepcionM);
	localStorage.setItem("casaPNo", casaPNo);
    localStorage.setItem("casaPSi", casaPSi);
	localStorage.setItem("importeMensual", importeMensual);
    localStorage.setItem("rentaM", rentaM);
    localStorage.setItem("rentaS", rentaS);
	localStorage.setItem("rentaN", rentaN);
    localStorage.setItem("autoN", autoN);/*
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
    localStorage.setItem("totalGastos", totalGastos);/*

    //
    localStorage.setItem("observaciones", observaciones);
	localStorage.setItem("firma", firma);*/


}




document.getElementById("solicitudEmp").innerHTML = localStorage.getItem("solicitudEmpleo");
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
document.getElementById("PerteneAclub").innerHTML = localStorage.getItem("perteneAclub");
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
document.getElementById("PuestoInicialAnt1").innerHTML = localStorage.getItem("PuestoInicialAnt1");
document.getElementById("PuestoFinalAnt2").innerHTML = localStorage.getItem("PuestoFinalAnt2");
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

document.getElementById("ingresosOpcNo").innerHTML = localStorage.getItem("ingresosOpcNo");
document.getElementById("ingresoOpcSi").innerHTML = localStorage.getItem("ingresoOpcSi");
document.getElementById("otrosIngresos").innerHTML = localStorage.getItem("otrosIngresos");
document.getElementById("importeM").innerHTML = localStorage.getItem("importeM");
document.getElementById("conyugeTraNo").innerHTML = localStorage.getItem("conyugeTraNo");
document.getElementById("conyugeTraSi").innerHTML = localStorage.getItem("conyugeTraSi");
document.getElementById("trabajoConyuge").innerHTML = localStorage.getItem("trabajoConyuge");
document.getElementById("percepcionM").innerHTML = localStorage.getItem("percepcionM");
document.getElementById("casaPNo").innerHTML = localStorage.getItem("casaPNo");
document.getElementById("importeMensual").innerHTML = localStorage.getItem("importeMensual");
document.getElementById("rentaN").innerHTML = localStorage.getItem("rentaN");
document.getElementById("rentaM").innerHTML = localStorage.getItem("rentaM");
document.getElementById("autoN").innerHTML = localStorage.getItem("autoN");/*
document.getElementById("placasA").innerHTML = localStorage.getItem("placasA");
document.getElementById("marcaA").innerHTML = localStorage.getItem("marcaA");
document.getElementById("modeloA").innerHTML = localStorage.getItem("modeloA");
document.getElementById("deudasN").innerHTML = localStorage.getItem("deudasN");
document.getElementById("dudasS").innerHTML = localStorage.getItem("dudasS");
document.getElementById("claseA").innerHTML = localStorage.getItem("claseA");
document.getElementById("importeD").innerHTML = localStorage.getItem("importeD");
document.getElementById("ingreso").innerHTML = localStorage.getItem("ingreso");
document.getElementById("ahorro").innerHTML = localStorage.getItem("ahorro");
document.getElementById("abonoM").innerHTML = localStorage.getItem("abonoM");
document.getElementById("egresos").innerHTML = localStorage.getItem("egresos");
document.getElementById("totalGastos").innerHTML = localStorage.getItem("totalGastos");/*

document.getElementById("observaciones").innerHTML = localStorage.getItem("observaciones");
document.getElementById("firma").innerHTML = localStorage.getItem("firma");*/


const datosdeEmpleo = {
    solicitudDeEmpleo: localStorage.getItem("solicitudEmp"),
    fecha: localStorage.getItem("fecha"),
    sueldoMensualD: localStorage.getItem("sueldoMensualD"),
    sueldoMensualA: localStorage.getItem("sueldoMensualA"),
    fechaContratacion: localStorage.getItem("fechaContratacion"),

    apellidoP: localStorage.getItem("APaterno"),
    apellidoM: localStorage.getItem("Amaterno"),
    nombreP: localStorage.getItem("nombres"),
    edadP: localStorage.getItem("edad"),
    domicilioP: localStorage.getItem("Domicilio"),
    colonia: localStorage.getItem("Colonia"),
    codPostal: localStorage.getItem("CodPostal"),

    curp: localStorage.getItem("curp"),
    afore: localStorage.getItem("afore"),
    rfc: localStorage.getItem("rfc"),
    licencia: localStorage.getItem("licencia"),
    cartilla: localStorage.getItem("cartilla"),
    pasaporte: localStorage.getItem("pasaporte"),
    numeroSS: localStorage.getItem("numeroSS"),
    numLicencia: localStorage.getItem("numLicencia"),
    docsExtranjero: localStorage.getItem("docsExtranjero"),

    saludActual: localStorage.getItem("SaludActual"),
    enferCronica: localStorage.getItem("EnferCronica"),
    deporte: localStorage.getItem("Deporte"),
    perteneceAclub: localStorage.getItem("PerteneAclub"),
    tiempoLibre: localStorage.getItem("TiempoLibre"),
    metaVida: localStorage.getItem("MetaVida"),

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
    hijos: localStorage.getItem("hijos"),

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
    grado: localStorage.getItem("Grado"),

    idiomas: localStorage.getItem("idiomas"),
    funcionesO: localStorage.getItem("funcionesO"),
    maquinasO: localStorage.getItem("maquinasO"),
    otrosT: localStorage.getItem("otrosT"),

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
const nuevosdeEmpleo = JSON.stringify(datosdeEmpleo,null,2);

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
    guardarArchivoDeTexto(nuevosdeEmpleo, "archivo.txt");
}