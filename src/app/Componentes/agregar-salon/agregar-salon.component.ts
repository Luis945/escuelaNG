import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar-salon',
  templateUrl: './agregar-salon.component.html',
  styleUrls: ['./agregar-salon.component.css']
})
export class AgregarSalonComponent implements OnInit {
//reactive forms
materias=[{id:1,name:'Geografia'},{id:2,name:'Español'},{id:3,name:'Programacion'}]
form = new FormGroup({
  grado: new FormControl('',
  [
    Validators.required
    
  ]),
  seccion: new FormControl('',
  [
    Validators.required
  ])

});
  constructor() { }

  ngOnInit() {
    console.log(this.materias)
  }

}
