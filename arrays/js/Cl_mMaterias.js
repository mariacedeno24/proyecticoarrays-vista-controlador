export default class Cl_mMaterias {
constructor (){
    this.array = [];
}
agregar(materia){
this.array.push(materia);
}
listado(){
    return this.array;
}
}
