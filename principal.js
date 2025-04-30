import Cl_vAplicacion from "./Cl_vAplicacion.js";
import Cl_mMaterias from "./Cl_mMaterias.js";
import Cl_mEstudiantes from "./Cl_mEstudiantes.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_principal {
  constructor() {
    let vistaApp = new Cl_vAplicacion();
    let mMaterias = new Cl_mMaterias();
    let mEstudiantes = new Cl_mEstudiantes();
    let controlador = new Cl_controlador({
      mEstudiantes: mEstudiantes,
      mMaterias: mMaterias,
      vistaApp: vistaApp,
    });
    vistaApp.controlador = controlador;
    controlador.activarVista("main");
  }
}
