import { Component, OnInit } from '@angular/core';  
import { AlumnoService } from 'src/app/Servicios/alumno.service';
import { Alumno } from 'src/app/Modelos/alumno';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-ver-alumnos',
  templateUrl: './ver-alumnos.component.html',
  styleUrls: ['./ver-alumnos.component.css']
})
export class VerAlumnosComponent implements OnInit {

  $:any;

  //Reactive forms
  form = new FormGroup({

    Nombre: new FormControl('',
    [
      Validators.required,
      Validators.minLength(3),
    ]),
    Apellido_paterno: new FormControl('',
    [
      Validators.required,
      Validators.minLength(3),
    ]),
    Apellido_materno: new FormControl('',
    [
      Validators.required,
      Validators.minLength(3),
    ]),
    Direccion: new FormControl('',[
      Validators.required
    ]),
    Curp: new FormControl('',
    [
      Validators.required,
      Validators.pattern("[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}" +
      "(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])" +
      "[HM]{1}" +
      "(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)" +
      "[B-DF-HJ-NP-TV-Z]{3}" +
      "[0-9A-Z]{1}[0-9]{1}$"),
    ]),
    nombre_padre_tutor: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    telefono_padre_tutor: new FormControl('',[
      Validators.required
    ]),
  });

  constructor(private _AlumnoService:AlumnoService) {}

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
    this.alumnosel2=item['Datos_secundarios']
  }

  _id:string;
  ActualizaAlumno(){

    this._id=this.alumnosel.Matricula;

    var {Nombre,
      Apellido_paterno,
      Apellido_materno,
      Direccion,
      Curp,
      nombre_padre_tutor,
      telefono_padre_tutor}=this.form.value;

    var alumno={
      _id:this._id,
      Nombre:Nombre,
      Apellido_paterno:Apellido_paterno,
      Apellido_materno:Apellido_materno,
      Direccion:Direccion,
      Curp:Curp,
      nombre_padre_tutor:nombre_padre_tutor,
      telefono_padre_tutor:telefono_padre_tutor
    };

    console.log(alumno);

    this._AlumnoService.ActualizaAlumno(alumno).subscribe(data=>{
      console.log(data);
    });

  }

}
