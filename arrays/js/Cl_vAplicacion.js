import Cl_mEstudiante from "./Cl_mEstudiante.js";
import Cl_mMateria from "./Cl_mMateria.js";
import Cl_vEstudiante from "./Cl_vEstudiante.js";
import Cl_vMateria from "./Cl_vMateria.js";
import Cl_vReporteEstudiantes from "./Cl_vReporteEstudiantes.js";
import Cl_vReporteMaterias from "./Cl_vReporteMaterias.js";
export default class Cl_vAplicacion {
  constructor() {
    this.controlador = null;
    this.vista = document.getElementById("appForm");

    this.vEstudiante = new Cl_vEstudiante();
    this.vReporteEstudiantes = new Cl_vReporteEstudiantes();

    this.vMateria = new Cl_vMateria();
    this.vReporteMaterias = new Cl_vReporteMaterias();

    this.btAgregarEstudiante = document.getElementById(
      "appForm_btAgregarEstudiante"
    );
    this.btAgregarEstudiante.onclick = () =>
      this.controlador.activarVista("estudiante");

    this.btReportarEstudiantes = document.getElementById(
      "appForm_btReportarEstudiantes"
    );
    this.btReportarEstudiantes.onclick = () =>
      this.controlador.reportarEstudiantes();

    this.btAgregarMateria = document.getElementById(
      "appForm_btAgregarMateria"
    );
    this.btAgregarMateria.onclick = () =>
      this.controlador.activarVista("materia");

    this.btReportarMaterias = document.getElementById(
      "appForm_btReportarMaterias"
    );
    this.btReportarMaterias.onclick = () => this.controlador.reportarMaterias();
  }
  set controlador(controlador) {
    this._controlador = controlador;
    if (controlador) {
      this.vEstudiante.iniciar(controlador);
      this.vReporteEstudiantes.iniciar(controlador);
      this.vMateria.iniciar(controlador);
      this.vReporteMaterias.iniciar(controlador);
    }
  }
  get controlador() {
    return this._controlador;
  }
  agregarEstudiante() {
    return new Cl_mEstudiante({
      cedula: this.vEstudiante.cedula,
      apellido: this.vEstudiante.apellido,
      nombre: this.vEstudiante.nombre,
    });
  }
  agregarMateria() {
    return new Cl_mMateria({
      codigo: this.vMateria.codigo,
      semestre: this.vMateria.semestre,
      nombre: this.vMateria.nombre,
    });
  }
  reportarEstudiantes({ info }) {
    this.vReporteEstudiantes.reportar({ info });
  }
  reportarMaterias({ info }) {
    this.vReporteMaterias.reportar({ info });
  }
}