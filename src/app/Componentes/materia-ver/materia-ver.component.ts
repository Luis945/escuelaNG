import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/app/Servicios/materia.service';
import { Materia } from 'src/app/Clases/materia';

@Component({
  selector: 'app-materia-ver',
  templateUrl: './materia-ver.component.html',
  styleUrls: ['./materia-ver.component.css']
})
export class MateriaVerComponent implements OnInit {

  materias:Array<any>;
  constructor(private materia:MateriaService) {

    this.materia.ver().subscribe((data)=>{
      this.materias=data['materias'];
    });

   }

  ngOnInit() {
  }

}
