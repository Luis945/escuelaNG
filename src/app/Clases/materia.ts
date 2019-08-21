import { Unidad } from './unidad';

export class Materia {
  id:string;
  materia_Nombre:string;
  unidades:Array<Unidad>;
  constructor(materia_Nombre: string){
    this.materia_Nombre=materia_Nombre;
  };
}
