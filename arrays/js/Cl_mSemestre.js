import Cl_mEstudiante from "./Cl_mEstudiante.js";
import Cl_mEstudiantes from "./Cl_mEstudiantes.js";
import Cl_mMaterias from "./Cl_mMaterias.js";
export default class Cl_mSemestre extends Cl_mEstudiantes{
    constructor (nombre){
        super (nombre);
    let materias = [Cl_mMaterias()];
    let estudiantes = [Cl_mEstudiante()];
    }

}
