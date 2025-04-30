import Cl_mEstudiantes from "./Cl_mEstudiantes.js";
import Cl_mMaterias from "./Cl_mMaterias.js";
export default class Cl_mSemestre{
    constructor (nombre){
        this.nombre = nombre;
    this.materias = new Cl_mMaterias;
    this.estudiantes =new Cl_mEstudiantes;
    }
}
