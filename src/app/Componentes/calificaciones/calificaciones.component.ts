import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { DataTableDirective } from 'angular-datatables/index';
import * as $ from 'jquery';
import { CalificacionesService } from 'src/app/Servicios/calificaciones.service';
import { Subject } from 'rxjs';

import 'datatables.net';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {

  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  dt: any;
  dtOptions: any = {};
  indexes: any = [];
  // dtTrigger: Subject<any> = new Subject();
  busco: Boolean = false;

  constructor(public service: CalificacionesService) { }

  ngOnInit() {
    // $('#datat').DataTable().destroy();
  }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      var calificaciones = [];
      
      this.indexes.forEach(element => {
        $(dtInstance.column(element).nodes()).find('input').each(function () {
            var renglon = dtInstance.row($(this).parents('tr')).index();
            var rowData = dtInstance.row($(this).parents('tr')).data();
            //@ts-ignore

            var calificacion = dtInstance.cell(renglon, element).nodes().to$().find('input').val();
            var alumno = {
              Matricula: rowData[0],
              id_materia: $("#materia :selected").val(),
              unidad: element - 1,
              calificacion: parseFloat(calificacion)
            };

            calificaciones.push(alumno);
        });
      });

      this.service.calificarAlumnos(calificaciones).subscribe((res) => {
        debugger;
      });
    });
  }

  calificar() {

  }

  buscar() {
    var grado = $("#grado :selected").val();
    var seccion = $("#seccion :selected").val();
    var ciclo = $("#ciclo_escolar :selected").val();
    var materia = $("#materia :selected").val();

    this.service.buscarSalon(grado, seccion, ciclo, materia).subscribe(res => {
      
      var dataToSend = [];

      res.salon.Alumnos.forEach(alumno => {
        dataToSend.push({
          Matricula: alumno.Matricula,
          Nombre: alumno.Nombre,
          Apellido_paterno: alumno.Apellido_paterno,
          Apellido_materno: alumno.Apellido_materno,
          calificaciones: alumno.calificaciones
        })
      });
      this.displayTable(dataToSend)
    });
  }

  displayTable(datos) {
    // $('#datat').DataTable().destroy();
    datos.forEach((el) => {
      el.calificaciones.forEach((cal) => {
        el['U' + cal.unidad] = cal.calificacion; //de la propiedad calificaciones (Arreglo) se saca la unidad y agregan como propiedad a cada alumno
      });

      el['Nombre'] = el.Nombre + ' ' + el.Apellido_paterno + ' ' + el.Apellido_materno;
      //borrar las propiedas para que no haya problema con el datatable
      delete el.Apellido_paterno;
      delete el.Apellido_materno;
      delete el.calificaciones;
    });

    //se obtienen las llaves de cualquier objeto
    var llaves = Object.keys(datos[0]);
    //las columnas serán dinámicas (pueden incrementar o disminuir)
    var columns = [];

    llaves.forEach((key) => {
      columns.push({"title" : key}); //para definir las columnas, dt acepta un arreglo. obligatoriamente la llave debe llamarse title
    });

    //la data igualmente debe ser dinámica y acorde a las columnas. Object.values retorna un arreglo con las propiedades
    var datat = [];

    datos.forEach((alumno) => {
      datat.push(Object.values(alumno));
    });

    /*
      se desea que una celda sea editable. 
      se obtienen las llaves (son digitos) y a partir de la posición 2, se toman los valores posteriores; retorna un arreglo el cual se recorre
      e inserta en otro, el cual dinámicamente contendrá las posiciones de las columnas pertenecientes a las unidades:
      a cada celda en esa columna se le aplicará el input editable
    */

   var colIndexes = [];    
   Object.keys(columns).slice(2).forEach((el) => {  colIndexes.push(parseInt(el))});
   this.indexes = colIndexes;
   //3>4-X

   this.dtOptions = {
    dom: 'Bfrtip',
    // Configure the buttons
    buttons: [
      'copy',
      'print',
      'excel',
      'pdf',
    ],
    pagingType: 'full_numbers',
    // language: "/otros_scripts/Spanish.json",
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
    data: datat,
    columns: columns,
      columnDefs: [
        {
          render: function (data, type, row, meta) {
            //columndefs permite editar la data para display.
            //se obtiene la propiedad dicha por el objeto meta.col = la calificación de la unidad
            var cal = row[meta.col];
            return '<input class="calcular form-control text-box single-line" style="text-align:right" value="' + cal +'">';
          },
          targets: colIndexes //[1, 2, 3, 4, 5........]]
        }
      ]
    };
    this.busco = true;
    $("#grado").attr('disabled', "true");
    $("#seccion").attr('disabled', "true");
    $("#ciclo_escolar").attr('disabled', "true");
    $("#materia").attr('disabled', "true");
    $("#btnSearch").attr('disabled', "true");
  }

  // ngAfterViewInit(): void {
  //   this.dtTrigger.next();
  // }

  // ngOnDestroy(): void {
  //   // Do not forget to unsubscribe the event
  //   this.dtTrigger.unsubscribe();
  // }

  // rerender(): void {
  //   this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //     // Call the dtTrigger to rerender again
  //     dtInstance.optio
  //     this.dtTrigger.next();
  //   });
  // }

}
