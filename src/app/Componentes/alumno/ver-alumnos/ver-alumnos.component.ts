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

  alumnosel:any;
  alumnosel2:any;
  Seleccionado(item){
    this.form.reset();
    this.alumnosel=item;
    this.alumnosel2=item['Datos_secundarios']
  }

}
