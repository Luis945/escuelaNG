import { Component, OnInit } from '@angular/core';
import { MaestroService } from 'src/app/Servicios/maestro.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ver-maestros',
  templateUrl: './ver-maestros.component.html',
  styleUrls: ['./ver-maestros.component.css']
})
export class VerMaestrosComponent implements OnInit {

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
      Fotografia: new FormControl('',
      [
        Validators.required
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

  constructor(private _MaestroService:MaestroService) { }

  ngOnInit() {
    this.VerMaestros();
  }

  maestros:any;
  VerMaestros(){
    this._MaestroService.VerMaestros().subscribe(data=>{
      this.maestros=data;
    })
  }

  maestrosel:any;
  Seleccionado(item){
    this.maestrosel=item;
  }

}
