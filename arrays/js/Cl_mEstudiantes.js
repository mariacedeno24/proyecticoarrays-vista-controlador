export default class Cl_mEstudiantes {
    constructor(){
    this.array = [];
    }   
    agregar(estudiante){
        this.array.push(estudiante);
    }
    listado(){
        return this.array;
    }
}
