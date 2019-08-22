import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SalonService } from '../../Servicios/salon.service';

@Component({
  selector: 'app-agregar-salon',
  templateUrl: './agregar-salon.component.html',
  styleUrls: ['./agregar-salon.component.css']
})
export class AgregarSalonComponent implements OnInit {
//reactive forms
materias=[]
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
  constructor(private _Servicio:SalonService) {
   
   }

  ngOnInit() {
   this.getMaterias();
  }

  getMaterias(){
    this._Servicio.getmaterias().subscribe(response=>{
      console.log(response);
      this.materias=response.materias;
    },
    error=>{
      console.log(JSON.stringify(error));
    })
  }

}
