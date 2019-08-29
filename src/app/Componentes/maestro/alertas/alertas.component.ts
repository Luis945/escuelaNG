import { Component, OnInit } from '@angular/core';
import { SalonService } from 'src/app/Servicios/salon.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { AlertasService } from 'src/app/Servicios/alertas.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  constructor(private salon:SalonService,private alerta:AlertasService, private show:AlertService) {
    console.log(localStorage.idAlumno)
    this.maestro_id=localStorage.idAlumno
    this.salon.salonprofe(localStorage.idAlumno).subscribe((data)=>{
      this.obtenido= data['salones'];
    });
    this.alerta.getAlertasMaestro(localStorage.idAlumno).subscribe(data=>{
      console.log(data);
      this.mostrar_alertas=data['data'];
    });
  }
  obtenido:Array<any>;
  mostrar_alertas:Array<any>;
  ngOnInit() {
    this.validar();
  }
  alumnos:Array<any>;
  public selecionarSalon(valor){
   var index =this.obtenido.findIndex(v=>v._id==valor);
   this.alumnos = this.obtenido[index].Alumnos;

  }
  maestro_id:string;
  alumno_id:string;
  public seleccionarAlumno(valor){
    this.alumno_id=valor;
  }
  mensajeform;
  public validar(){
    this.mensajeform= new FormGroup({
      Titulo: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      Mensaje: new FormControl('',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(140)
      ])
    });
  }
  public mandarMensaje(formulario){

    this.show.success('se ha agregado correctamente el mensaje');

    var empaquetado={
      alumno:this.alumno_id,
      maestro:this.maestro_id,
      Titulo:formulario.value.Titulo,
      Descripcion:formulario.value.Mensaje,
      Estado:'Activo'}
      console.log(empaquetado);

    this.alerta.sendAlerta(empaquetado).subscribe(data=>{
      this.mostrar_alertas=data['data']
      console.log(this.mostrar_alertas);
    });
  }

  public eliminar(mensaje){
    if (confirm("¿está seguro de borrar ?")) {
      this.alerta.deleteAlerta(mensaje,this.maestro_id).subscribe(data=>{
        this.mostrar_alertas=data['alertas']
      });

   } else {

   }
  }
}

