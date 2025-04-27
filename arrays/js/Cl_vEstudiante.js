export default class Cl_vEstudiante {
    constructor() {
      this.controlador = null;
      this.vista = document.getElementById("estudianteForm");
      this.vista.hidden = true;
  
      this.inCedula = document.getElementById("estudianteForm_inCedula");
      this.inApellido = document.getElementById("estudianteForm_inApellido");
      this.inNombre = document.getElementById("estudianteForm_inNombre");
  
      this.btAceptar = document.getElementById("estudianteForm_btAceptar");
      this.btAceptar.onclick = () => {
        this.controlador.activarVista("main");
        this.controlador.agregarEstudiante();
      };
  
      this.btCancelar = document.getElementById("estudianteForm_btCancelar");
      this.btCancelar.onclick = () => {
        this.controlador.activarVista("main");
      };
    }
    get cedula() {
      return this.inCedula.value;
    }
    get nombre() {
      return this.inNombre.value;
    }
    get apellido() {
      return this.inApellido.value;
    }
    iniciar(controlador) {
      this.controlador = controlador;
    }
  }