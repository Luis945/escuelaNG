import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CalificacionesService } from 'src/app/Servicios/calificaciones.service';
import 'datatables.net';
import 'datatables.net-buttons';
import 'datatables.net-buttons-dt';
import 'datatables.net-dt';

@Component({
  selector: 'app-ver-calificaciones',
  templateUrl: './ver-calificaciones.component.html',
  styleUrls: ['./ver-calificaciones.component.css']
})
export class VerCalificacionesComponent implements OnInit {

  constructor(private service: CalificacionesService) { }

  ciclos: any;

  ngOnInit() {
    this.service.getSalones().subscribe(res => {
      this.ciclos = res.ciclos;
    });

    var d = new Date();
    var currentYr = d.getFullYear().toString();

    $("#ciclo_escolar").val(currentYr).change();

    this.service.getCalificaciones(localStorage.getItem('idAlumno'), currentYr).subscribe(res => {
      debugger;
    });

  }

}
