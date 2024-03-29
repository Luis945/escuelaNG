import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumnoService } from 'src/app/Servicios/alumno.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.component.html',
  styleUrls: ['./registro-alumno.component.css']
})
export class RegistroAlumnoComponent implements OnInit {

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
      Fecha_nacimiento: new FormControl('',
      [
        Validators.required,
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
  
    //Objeto Alumno
    matricula:string;

  constructor(private _AlumnoService:AlumnoService,private alertService: AlertService,private rutas :Router) { }

  ngOnInit() {
  }

  GuardarAlumno(){
    
    var {Nombre,
      Apellido_paterno,
      Apellido_materno,
      Fecha_nacimiento,
      Direccion,
      Curp,
      nombre_padre_tutor,
      telefono_padre_tutor}=this.form.value;

      var alumno={
        Nombre:Nombre,
        Apellido_paterno:Apellido_paterno,
        Apellido_materno:Apellido_materno,
        Fecha_nacimiento:Fecha_nacimiento,
        Direccion:Direccion,
        Curp:Curp,
        nombre_padre_tutor:nombre_padre_tutor,
        telefono_padre_tutor:telefono_padre_tutor
      };

      this._AlumnoService.GuardarAlumno(alumno).subscribe(data=>{
        console.log(alumno)
        this.alertService.success('Alumno agregado correctamente')
        this.rutas.navigate(['VerAlumnos']);
      })

  }

}
