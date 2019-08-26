import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SalonService } from '../../Servicios/salon.service';
import { Materia } from 'src/app/Clases/materia';
import { Alumno } from 'src/app/Modelos/alumno';
import { Grupo } from 'src/app/Clases/grupo';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

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
maestros:Array<any>=new Array();
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
  ),
  maestro: new FormControl('',
  [
    Validators.required
  ]
  )


});
  constructor(private _Servicio:SalonService,private rutas :Router,private alertService: AlertService) {
   
   }
   guardar(){

    this.Gruponuevo = new Grupo(this.form.value.grado,this.form.value.seccion,this.form.value.ciclo,this.form.value.maestro);
    this.Gruponuevo.setMateria(this.arraymaterias);
    this.Gruponuevo.setAlumno(this.arrayalumnos);

    //this.Grupo = [this.form.value.grado,this.form.value.seccion,this.form.value.ciclo,this.arrayalumnos,this.arraymaterias]
    console.log(this.Gruponuevo);
    this._Servicio.creargrupo(this.Gruponuevo).subscribe(response=>{
      console.log(response);
      this.form.reset();
      this.rutas.navigate(['menu-salones']);
      
    

      
    },
    error=>{
      console.log(JSON.stringify(error));
    })

  
   }

  ngOnInit() {
   this.getMaterias();
   this.getAlumnos();
   this.getMaestros();
   this.alertService.info('Ingresa la información que se te pide');
  }
  clicktablamaterias(indice){
    this.arraymaterias.splice(indice, 1);
    this.alertService.danger('Selección eliminada');
  }
  clicktablaalumnos(indice){
    this.arrayalumnos.splice(indice, 1);
    this.alertService.danger('Selección eliminada');
  }
  clickopcionalumno(alumno:Alumno){
    if ( this.arrayalumnos.includes( alumno ) ) {
     // alert('Ya has seleccionado este alumno')
     this.alertService.warning('Ya has seleccionado a este alumno');
  }
    else{
      //alert('Has agregado a este alumno a tu selección')
      if(this.arrayalumnos.length==20){
        this.alertService.warning('Unicamente se permiten 20 alumnos por salon');
      }
      else{
        this.arrayalumnos.push(alumno);
        this.alertService.success('Has agregado a este alumno a tu selección');
      }
    }
  }
  clickopcionmateria(materia:Materia){
    if ( this.arraymaterias.includes( materia ) ) {
      this.alertService.warning('Ya has seleccionado esta materia');
      
      console.log(this.arraymaterias)

  }
    else{
      if(this.arraymaterias.length==9){
        this.alertService.warning('Unicamente se permiten 9 materias por salon');
      }
      else{
        this.arraymaterias.push(materia);
        this.alertService.success('Has agregado a esta materia a tu selección');
      }
      
     
    }
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
  getMaestros(){
    this._Servicio.getMaestros().subscribe(response=>{
      console.log(response)
      this.maestros=response;
    });
  }

}
