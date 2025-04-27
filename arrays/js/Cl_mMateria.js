import Cl_mEstudiante from "./Cl_mEstudiante.js";
export default class Cl_mMateria extends Cl_mEstudiante{
constructor (codigo, semestre,nombre){
    super(nombre);
    this.semestre = semestre;
    this.codigo = codigo;
}
    set codigo(codigo){
        this._codigo = codigo;
    }
    get codigo(){
        return this._codigo;
    }
    set semestre(semestre){
        this._semestre = semestre;
    }
    get semestre(){
        return this._semestre;
    }
}