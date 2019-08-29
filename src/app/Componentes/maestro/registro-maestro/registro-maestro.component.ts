import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MaestroService } from 'src/app/Servicios/maestro.service';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-registro-maestro',
  templateUrl: './registro-maestro.component.html',
  styleUrls: ['./registro-maestro.component.css']
})
export class RegistroMaestroComponent implements OnInit {

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
    Rfc: new FormControl('',[
      Validators.required
    ]),
    Telefono: new FormControl('',[
      Validators.required
    ]),
  });

  constructor(private _MaestroService:MaestroService,private rutas :Router,private alertService: AlertService) { }

  ngOnInit() {
  }

  GuardarMaestro(){
    var {Nombre,Apellido_paterno,Apellido_materno,
      Fecha_nacimiento,Rfc,Direccion,Telefono}=this.form.value;

    var Maestro={
      Nombre:Nombre,
      Apellido_paterno:Apellido_paterno,
      Apellido_materno:Apellido_materno,
      Fecha_nacimiento:Fecha_nacimiento,
      Rfc:Rfc,
      Direccion:Direccion,
      Telefono:Telefono
    };

    this._MaestroService.RegistroMaestro(Maestro).subscribe(data=>{
      console.log(data);
      this.alertService.success('Maestro agregado correctamente')
      this.rutas.navigate(['VerMaestros'])
    });

  }

}
