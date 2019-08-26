import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/app/Servicios/materia.service';
import { Materia } from 'src/app/Clases/materia';
import { Unidad } from 'src/app/Clases/unidad';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-materia-ver',
  templateUrl: './materia-ver.component.html',
  styleUrls: ['./materia-ver.component.css']
})
export class MateriaVerComponent implements OnInit {

  materias:Array<any>;
  unidades:Array<Unidad>;
  obtener_editar:Materia;
  unidad_seleccionada:Unidad;

  /**
   * para editar
   */
    nombreMateria_editar:string;
    idMateria_editar:string;

    NombreUnidad_editar:string;
    IdUnidad_editar:string;
    NumUnidad_editar:string;
    HorasDeUnidad_editar:string;

  constructor(private servicio:MateriaService) {

    this.servicio.ver().subscribe((data)=>{
      this.materias=data['materias'];

    });

  }

  ngOnInit() {
    $(function () {
    });
  }

  public editar(obtenido:Materia,id){
    this.obtener_editar= obtenido;
    this.obtener_editar.id= id;
    console.log(this.obtener_editar);
  }

  public eliminar(materia:Materia){
    if (confirm("¿está seguro de borrar ?")) {
       this.servicio.eliminar(materia).subscribe((data)=>{
       this.materias=data['materias'];
     });

    } else {

    }
  }

  public editarUnidad(unidad:Unidad,id){
    $('#btn-unidad').html('Editar');

    this.unidad_seleccionada=unidad;
    this.unidad_seleccionada.id=id;
  }
  public guardarMateria(form:NgForm){
    console.log(form.value)



  }
  public nuevaUnidad(){
    $('#btn-unidad').html('Agregar');

    this.unidad_seleccionada= new Unidad();
  }
  public guardarUnidad(form:NgForm){


  }

}
