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
  busco: Boolean = false;
  dtOptions: any = {}

  ngOnInit() {
    this.service.getSalones().subscribe(res => {
      this.ciclos = res.ciclos;
    });

    var d = new Date();
    var currentYr = d.getFullYear().toString();

    $("#ciclo_escolar").val(currentYr).change();

    this.service.getCalificaciones(localStorage.getItem('idAlumno'), currentYr).subscribe(res => {

      var title = new String('CALIFICACIONES_CICLO_' + currentYr + '_' + localStorage.getItem('alumno').replace(/ /g,"_").toUpperCase());

      this.dtOptions = {
        dom: 'Bfrtip',
        // Configure the buttons
        buttons: [
          'copy',
          'print',
          {
            extend: 'excel',
            title: title,
            // text:'<i class="fa fa-file-text-o"></i> Excel',
          },
          // 'excel',
          {
            extend: 'pdf',
            title: title
          },
        ],
        pagingType: "full_numbers",
        language: {
          "sProcessing":     "Procesando...",
          "sLengthMenu":     "Mostrar _MENU_ registros",
          "sZeroRecords":    "No se encontraron resultados",
          "sEmptyTable":     "Ningún dato disponible en esta tabla",
          "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
          "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
          "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
          "sInfoPostFix":    "",
          "sSearch":         "Buscar:",
          "sUrl":            "",
          "sInfoThousands":  ",",
          "sLoadingRecords": "Cargando...",
          "oPaginate": {
            "sFirst":    "Primero",
            "sLast":     "Último",
            "sNext":     "Siguiente",
            "sPrevious": "Anterior"
          }
        },
        data: res.calificaciones,
        columns: [
          { title: 'Materia', data: 'materia' },
          { title: 'Unidad', data: 'unidad' },
          { title: 'Calificacion', data: 'calificacion' },
        ]
      };

      this.busco = true;
    });

  }

}
