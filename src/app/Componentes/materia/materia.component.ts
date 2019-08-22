import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/Clases/materia';
import { Unidad } from 'src/app/Clases/unidad';
import { MateriaService } from 'src/app/Servicios/materia.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  constructor(private servicio:MateriaService) {

  }
  materiaNueva:Materia;
  unidades:Array<Unidad>;
  materia_Nombre:string;
  Nombre_unidad:string;
  Num_unidad:number=1;
  Hora_de_unidad:number;

  ngOnInit() {
    if(this.materiaNueva.unidades){
      this.Num_unidad= this.materiaNueva.unidades.length+1;
    }
  }

  // Set new materia, for save it
  agregarNombre($event){
    if($event.keyCode==13){
     if (this.materia_Nombre){
          alert('Materia Agregada correctamente ');
        this.materiaNueva= new Materia(this.materia_Nombre);
      
      }
    }
  }
  
  // set unidad to save on materias
  agregarUnidades(){
     if( this.Nombre_unidad && this.Num_unidad  && this.Hora_de_unidad ){
      alert('Unidad Agregada');
      var nuevo = new Unidad();
      nuevo.Nombre_unidad= this.Nombre_unidad;
      nuevo.Num_unidad= this.Num_unidad;
      nuevo.Hora_de_unidad= this.Hora_de_unidad;
      
      this.materiaNueva.setUnidad(nuevo);

     }
    this.Nombre_unidad="";
    this.Num_unidad= this.materiaNueva.unidades.length+1;
    this.Hora_de_unidad= 1;
  }
  borrarUnidad(unidad){
    //delete this.materiaNueva.unidades[numero-1]
    const index = this.materiaNueva.unidades.indexOf(unidad, 0);
    if (index > -1) {
    this.materiaNueva.unidades.splice(index, 1);
    }
  }
  mandarMateria(){
    this.servicio.mandar(this.materiaNueva);
  }

}
