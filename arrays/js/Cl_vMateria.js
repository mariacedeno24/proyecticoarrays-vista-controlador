export default class Cl_vMateria {
    constructor() {
      this.controlador = null;
      this.vista = document.getElementById("materiaForm");
      this.vista.hidden = true;
  
      this.inCodigo = document.getElementById("materiaForm_inCodigo");
      this.inSemestre = document.getElementById("materiaForm_inSemestre");
      this.inNombre = document.getElementById("materiaForm_inNombre");
  
      this.btAceptar = document.getElementById("materiaForm_btAceptar");
      this.btAceptar.onclick = () => {
        this.controlador.activarVista("main");
        this.controlador.agregarMateria();
      };
  
      this.btCancelar = document.getElementById("materiaForm_btCancelar");
      this.btCancelar.onclick = () => {
        this.controlador.activarVista("main");
      };
    }
    get codigo() {
      return this.inCodigo.value;
    }
    get semestre() {
      return this.inSemestre.value;
    }
    get nombre() {
      return this.inNombre.value;
    }
    iniciar(controlador) {
      this.controlador = controlador;
    }
  }