import { Alumno } from '../Modelos/alumno';
import { Materia } from './materia';

export class Grupo {
    id: String;
    Grado: String;
    Seccion: String;
    Ciclo:String;
    Maestro:String;
    Alumnos:Array<Alumno>;
    Materias:Array<Materia>;


    
    constructor(grado: String, seccion: String,ciclo: String,maestro:String) {
        this.Grado = grado;
        this.Seccion =seccion;
        this.Ciclo=ciclo;
        this.Maestro=maestro;
        this.Alumnos= new Array<Alumno>();
        this.Materias= new  Array<Materia>();
    }
    setMateria(materias:Array<Materia>){
        this.Materias = materias
        return this.Materias;
      }
      getMateria(){
        return this.Materias;
      }

      setAlumno(alumnos:Array<Alumno>){
        this.Alumnos= alumnos;
        return this.Alumnos;
      }
      getAlumno(){
        return this.Alumnos;
      }
}