import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SalonService } from '../../Servicios/salon.service';
import { Materia } from 'src/app/Clases/materia';
import { Alumno } from 'src/app/Modelos/alumno';
import { Grupo } from 'src/app/Clases/grupo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-salon',
  templateUrl: './agregar-salon.component.html',
  styleUrls: ['./agregar-salon.component.css']
})
export class AgregarSalonComponent implements OnInit {

materias:Array<Materia>= new Array();
alumnos:Array<Alumno>= new Array();
arraymaterias:Array<Materia>= new Array();
arrayalumnos:Array<Alumno>= new Array();
Gruponuevo:Grupo;
form = new FormGroup({
  grado: new FormControl('',
  [
    Validators.required
    
  ]),
  seccion: new FormControl('',
  [
    Validators.required
  ]),
  ciclo: new FormControl('',
  [
    Validators.required
  ]
  )

});
  constructor(private _Servicio:SalonService,private rutas :Router) {
   
   }
   guardar(){

    this.Gruponuevo = new Grupo(this.form.value.grado,this.form.value.seccion,this.form.value.ciclo);
    this.Gruponuevo.setMateria(this.arraymaterias);
    this.Gruponuevo.setAlumno(this.arrayalumnos);

    //this.Grupo = [this.form.value.grado,this.form.value.seccion,this.form.value.ciclo,this.arrayalumnos,this.arraymaterias]
    console.log(this.Gruponuevo);
    this._Servicio.creargrupo(this.Gruponuevo).subscribe(response=>{
      console.log(response);
      // this.form.reset();
      // this.rutas.navigate(['menu-salones']);
    

      
    },
    error=>{
      console.log(JSON.stringify(error));
    })

  
   }

  ngOnInit() {
   this.getMaterias();
   this.getAlumnos();
  }

  onChange(deviceValue){
    this.arraymaterias.push(deviceValue)
    console.log(this.arraymaterias);

  }
  onChangeAl(deviceValue){
    this.arrayalumnos.push(deviceValue)
    console.log(this.arrayalumnos);

  }

  getMaterias(){
    this._Servicio.getmaterias().subscribe(response=>{
      console.log(response);
      this.materias=response.materias;
    },
    error=>{
      console.log(JSON.stringify(error));
    })
  }
  getAlumnos(){
    this._Servicio.getalumnos().subscribe(response=>{
      console.log(response);
      this.alumnos=response;
    },
    error=>{
      console.log(JSON.stringify(error));
    })
  }

}
