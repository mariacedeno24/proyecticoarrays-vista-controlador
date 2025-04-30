export default class Cl_mMateria{
constructor (codigo, semestre,nombre){
    this.nombre =nombre;
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
