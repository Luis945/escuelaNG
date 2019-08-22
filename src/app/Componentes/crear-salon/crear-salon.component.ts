import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-salon',
  templateUrl: './crear-salon.component.html',
  styleUrls: ['./crear-salon.component.css']
})
export class CrearSalonComponent implements OnInit {

  constructor(private rutas :Router) { }

  ngOnInit() {
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

}
