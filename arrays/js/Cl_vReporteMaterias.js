export default class Cl_vReporteMaterias {
    constructor() {
      this.controlador = null;
      this.vista = document.getElementById("reporteMateriasForm");
      this.vista.hidden = true;
  
      this.tabla = document.getElementById("reporteMateriasForm_tabla");
      this.btVolver = document.getElementById("reporteMateriasForm_btVolver");
      this.btVolver.onclick = () => this.controlador.activarVista("main");
    }
    iniciar(controlador) {
      this.controlador = controlador;
    }
    reportar({ info }) {
      this.controlador.activarVista("reporteMaterias");
      this.tabla.innerHTML = "";
      info.map((materia) => {
        this.tabla.innerHTML += `<tr>
        <td>${materia.codigo}</td>
        <td>${materia.semestre}</td>
        <td>${materia.nombre}</td>
      </tr>`;
      });
    }
  }