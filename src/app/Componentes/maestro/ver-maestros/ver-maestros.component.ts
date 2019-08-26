import { Component, OnInit } from '@angular/core';
import { MaestroService } from 'src/app/Servicios/maestro.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-ver-maestros',
  templateUrl: './ver-maestros.component.html',
  styleUrls: ['./ver-maestros.component.css']
})
export class VerMaestrosComponent implements OnInit {

  //Reactive forms
  form;

  constructor(private _MaestroService:MaestroService,private alertService:AlertService) { }

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
    this.AñadirValidaciones(item);
  }

  AñadirValidaciones(item){
    //Reactive forms
    this.form = new FormGroup({

      Nombre: new FormControl(item.Nombre,
      [
        Validators.required,
        Validators.minLength(3),
      ]),
      Apellido_paterno: new FormControl(item.Apellido_paterno,
      [
        Validators.required,
        Validators.minLength(3),
      ]),
      Apellido_materno: new FormControl(item.Apellido_materno,
      [
        Validators.required,
        Validators.minLength(3),
      ]),
      Direccion: new FormControl(item.Direccion,[
        Validators.required
      ]),
      Rfc: new FormControl({value:item.Rfc,disabled:true},[
        Validators.required
      ]),
      Telefono: new FormControl(item.Telefono,[
        Validators.required
      ]),
    });

  }

  MaestroActualizado:any;
  _id:any;
  ActualizaMaestro(){

    this._id= this.maestrosel._id;
    var {Nombre,Apellido_paterno,Apellido_materno,Direccion,Telefono}=this.form.value;

      this.MaestroActualizado={
        _id:this._id,
        Nombre:Nombre,
        Apellido_paterno:Apellido_paterno,
        Apellido_materno:Apellido_materno,
        Direccion:Direccion,
        Telefono:Telefono
      };

    this._MaestroService.ActualizaMaestro(this.MaestroActualizado).subscribe(data=>{

    });

    this.alertService.success('Registro Actualizado con Exito');
    this.VerMaestros();

  }
}
