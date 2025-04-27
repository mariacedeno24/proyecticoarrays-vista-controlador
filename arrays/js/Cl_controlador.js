export default class Cl_controlador {
    constructor({ mEstudiantes, mMaterias, vistaApp }) {
      this.mEstudiantes = mEstudiantes;
      this.mMaterias = mMaterias;
      this.vistaApp = vistaApp;
    }
    activarVista(vista) {
      this.vistaApp.vista.hidden = vista !== "main";
      this.vistaApp.vEstudiante.vista.hidden = vista !== "estudiante";
      this.vistaApp.vMateria.vista.hidden = vista !== "materia";
      this.vistaApp.vReporteEstudiantes.vista.hidden =
        vista !== "reporteEstudiantes";
      this.vistaApp.vReporteMaterias.vista.hidden = vista !== "reporteMaterias";
    }
    agregarEstudiante() {
      this.mEstudiantes.agregar(this.vistaApp.agregarEstudiante());
    }
    agregarMateria() {
      this.mMaterias.agregar(this.vistaApp.agregarMateria());
    }
    reportarEstudiantes() {
      this.vistaApp.reportarEstudiantes({
        info: this.mEstudiantes.listado(),
      });
    }
    reportarMaterias() {
      this.vistaApp.reportarMaterias({
        info: this.mMaterias.listado(),
      });
    }
  }