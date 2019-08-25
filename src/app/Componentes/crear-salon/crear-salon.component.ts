import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grupo } from 'src/app/Clases/grupo';
import { SalonService } from 'src/app/Servicios/salon.service';
import { Materia } from 'src/app/Clases/materia';
import { Alumno } from 'src/app/Modelos/alumno';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-crear-salon',
  templateUrl: './crear-salon.component.html',
  styleUrls: ['./crear-salon.component.css']
})
export class CrearSalonComponent implements OnInit {
  grupos:Array<Grupo>= new Array();
  arraymaterias:Array<Materia>= new Array();
  arrayalumnos:Array<Alumno>= new Array();
  id_grupo:String

  constructor(private rutas :Router,private _Servicio:SalonService,private alertService: AlertService) { }

  ngOnInit() {
    this.versalones();
    
  }
  agregarsalon(){
    this.rutas.navigate(['agregar-salones']);
  }
  veralumnos(){
    this.rutas.navigate(['veralumnos']);
  }
  vermaterias(){
    this.rutas.navigate(['vermaterias']);
  }
  versalones(){
    this._Servicio.getsalones().subscribe(response=>{
      this.grupos=response.salones;

    })

  }

  seleccionado(materias:Array<Materia>){
   console.log(materias);
   this.arraymaterias=materias;
    }

    seleccionadoal(alumnos:Array<Alumno>){
      console.log(alumnos);
      this.arrayalumnos=alumnos;
       }

eliminado(grupo_id:string)
{
  console.log(grupo_id);
  this.id_grupo= grupo_id;
   }

   eliminar(){
  this._Servicio.eliminarSalon(this.id_grupo).subscribe(response=>{
    this.grupos=response.salones;
    this.versalones()

  })
     }

}
