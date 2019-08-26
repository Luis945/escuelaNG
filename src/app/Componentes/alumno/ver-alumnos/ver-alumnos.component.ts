import { Component, OnInit } from '@angular/core';  
import { AlumnoService } from 'src/app/Servicios/alumno.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'ngx-alerts';


@Component({
  selector: 'app-ver-alumnos',
  templateUrl: './ver-alumnos.component.html',
  styleUrls: ['./ver-alumnos.component.css']
})
export class VerAlumnosComponent implements OnInit {

  $:any;
  form;

  constructor(private _AlumnoService:AlumnoService, private alertService:AlertService) {}

  ngOnInit() {
    this.ConsultarAlumnos();
  }

  alumnos:any;
  ConsultarAlumnos(){
    this._AlumnoService.VerAlumnos().subscribe(data=>{ 
      this.alumnos=data;
    })
  }

  alumnosel:any;     ////Alumno Seleccionado es igual al ruco que agarré
  alumnosel2:any;     ///Alumno Seleccionado 2 es el mismo ruco solo que estoy usando mongoDb
                      ////y uso otra variable para poder obtener el arreglo dentro del objeto
  Seleccionado(item){
    this.alumnosel=item;  //Item es igual 
    this.alumnosel2=item['Datos_secundarios'];
    this.AñadirValidaciones(this.alumnosel,this.alumnosel2);
  }

  AñadirValidaciones(item1,item2){

    var itemm2=item2[0];

    //Reactive forms
  this.form = new FormGroup({

    Nombre: new FormControl(item1.Nombre,
    [
      Validators.required,
      Validators.minLength(3),
    ]),
    Apellido_paterno: new FormControl(item1.Apellido_paterno,
    [
      Validators.required,
      Validators.minLength(3),
    ]),
    Apellido_materno: new FormControl(item1.Apellido_materno,
    [
      Validators.required,
      Validators.minLength(3),
    ]),
    Direccion: new FormControl(item1.Direccion,
    [
      Validators.required
    ]),
    Curp: new FormControl({value:itemm2.Curp,disabled:true},
    [
      Validators.required,
      Validators.pattern("[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}" +
      "(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])" +
      "[HM]{1}" +
      "(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)" +
      "[B-DF-HJ-NP-TV-Z]{3}" +
      "[0-9A-Z]{1}[0-9]{1}$"),
    ]),
    nombre_padre_tutor: new FormControl(itemm2.nombre_padre_tutor,
    [
      Validators.required,
      Validators.minLength(3),
    ]),
    telefono_padre_tutor: new FormControl(itemm2.telefono_padre_tutor,
    [
      Validators.required
    ]),
  });
  }

  _id:string;
  ActualizaAlumno(){

    this._id=this.alumnosel._id;

    var {Nombre,
      Apellido_paterno,
      Apellido_materno,
      Direccion,
      nombre_padre_tutor,
      telefono_padre_tutor}=this.form.value;

    var alumno={
      _id:this._id,
      Nombre:Nombre,
      Apellido_paterno:Apellido_paterno,
      Apellido_materno:Apellido_materno,
      Direccion:Direccion,
      nombre_padre_tutor:nombre_padre_tutor,
      telefono_padre_tutor:telefono_padre_tutor
    };

    this._AlumnoService.ActualizaAlumno(alumno).subscribe(data=>{
      console.log(data)
    });

    this.alertService.success('Registro Actualizado con Exito');
    this.ConsultarAlumnos();

  }

}
