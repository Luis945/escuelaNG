import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/app/Servicios/materia.service';
import { Materia } from 'src/app/Clases/materia';
import { Unidad } from 'src/app/Clases/unidad';

@Component({
  selector: 'app-materia-ver',
  templateUrl: './materia-ver.component.html',
  styleUrls: ['./materia-ver.component.css']
})
export class MateriaVerComponent implements OnInit {

  materias:Array<any>;
  obtener_editar:Materia;
  constructor(private servicio:MateriaService) {

    this.servicio.ver().subscribe((data)=>{
      this.materias=data['materias'];
      
    });

   }

  ngOnInit() {
  }
  
  public editar(obtenido:Materia){
    this.obtener_editar= obtenido;
    
  }
  public eliminar(materia:Materia){ 
    if (confirm("¿está seguro de borrar ?")) {
       this.servicio.eliminar(materia).subscribe((data)=>{
       this.materias=data['materias'];
     });

    } else {

    }
  
  }
}
