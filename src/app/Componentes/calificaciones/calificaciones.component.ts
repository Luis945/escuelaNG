import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables/index';
import * as $ from 'jquery';
import { CalificacionesService } from 'src/app/Servicios/calificaciones.service';
// import 'datatables.net';

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

  constructor(public service: CalificacionesService) { }

  ngOnInit() {

    var datos = [
      {
        "Matricula":16090011,
        "Nombre":"Erick Miguel",
        "Apellido_paterno":"Escobar",
        "Apellido_materno":"Vázquez",
        "calificaciones": [{
          "id_materia": 666,
          "unidad": 1,
          "calificacion": 666
        }, {
          "id_materia": 666,
          "unidad": 2,
          "calificacion": 69
        }, {
          "id_materia": 666,
          "unidad": 3,
          "calificacion": 420
        },        
        // {
        //   "id_materia": 666,
        //   "unidad": 4,
        //   "calificacion": 777
        // }
      ]
      },
      {
        "Matricula":16090021,
        "Nombre":"Luis Ángel",
        "Apellido_paterno":"García",
        "Apellido_materno":"",
        "calificaciones": [{
          "id_materia": 666,
          "unidad": 1,
          "calificacion": 61
        }, {
          "id_materia": 666,
          "unidad": 2,
          "calificacion": 15
        }, {
          "id_materia": 666,
          "unidad": 3,
          "calificacion": 20
        },        
        // {
        //   "id_materia": 666,
        //   "unidad": 4,
        //   "calificacion": 777
        // }
      ]
      },
      // {
      //   "Matricula":16090031,
      //   "Nombre":"Ángel Octavio",
      //   "Apellido_paterno":"García",
      //   "Apellido_materno":"García",
      //   "calificaciones": [{
      //     "id_materia": 666,
      //     "unidad": 1,
      //     "calificacion": 6
      //   }, {
      //     "id_materia": 666,
      //     "unidad": 2,
      //     "calificacion": 9
      //   }, {
      //     "id_materia": 66,
      //     "unidad": 3,
      //     "calificacion": 40
      //   },        
      //   // {
      //   //   "id_materia": 666,
      //   //   "unidad": 4,
      //   //   "calificacion": 777
      //   // }
      // ]
      // },
      // {
      //   "Matricula":16090041,
      //   "Nombre":"Jaime Emmanuel",
      //   "Apellido_paterno":"Burciaga",
      //   "Apellido_materno":"Medina",
      //   "calificaciones": [{
      //     "id_materia": 666,
      //     "unidad": 1,
      //     "calificacion": 66
      //   }, {
      //     "id_materia": 666,
      //     "unidad": 2,
      //     "calificacion": 6
      //   }, {
      //     "id_materia": 666,
      //     "unidad": 3,
      //     "calificacion": 42
      //   }, 
      //   // {
      //   //   "id_materia": 666,
      //   //   "unidad": 4,
      //   //   "calificacion": 777
      //   // }
      // ]
      // }
    ];

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

}
