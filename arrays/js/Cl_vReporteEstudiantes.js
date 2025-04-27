export default class Cl_vReporteEstudiantes {
    constructor() {
      this.controlador = null;
      this.vista = document.getElementById("reporteEstudiantesForm");
      this.vista.hidden = true;
  
      this.tabla = document.getElementById("reporteEstudiantesForm_tabla");
      this.btVolver = document.getElementById("reporteEstudiantesForm_btVolver");
      this.btVolver.onclick = () => this.controlador.activarVista("main");
    }
    iniciar(controlador) {
      this.controlador = controlador;
    }
    reportar({ info }) {
      this.controlador.activarVista("reporteEstudiantes");
      this.tabla.innerHTML = "";
      info.map((estudiante) => {
        this.tabla.innerHTML += `<tr>
        <td>${estudiante.cedula}</td>
        <td>${estudiante.apellido}</td>
        <td>${estudiante.nombre}</td>
      </tr>`;
      });
    }
  }