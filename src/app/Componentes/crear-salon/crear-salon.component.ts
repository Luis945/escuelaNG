import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grupo } from 'src/app/Clases/grupo';
import { SalonService } from 'src/app/Servicios/salon.service';

@Component({
  selector: 'app-crear-salon',
  templateUrl: './crear-salon.component.html',
  styleUrls: ['./crear-salon.component.css']
})
export class CrearSalonComponent implements OnInit {
  grupos:Array<Grupo>= new Array();

  constructor(private rutas :Router,private _Servicio:SalonService) { }

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
      console.log(this.grupos);

    })

  }

}
