import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/app/Servicios/materia.service';
import { Materia } from 'src/app/Clases/materia';
import { Unidad } from 'src/app/Clases/unidad';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-materia-ver',
  templateUrl: './materia-ver.component.html',
  styleUrls: ['./materia-ver.component.css']
})
export class MateriaVerComponent implements OnInit {

  materias:Array<any>;
  unidades:Array<Unidad>;
  obtener_editar:Materia;
  unidad_seleccionada:Unidad;

  /**
   * para editar
   */
    nombreMateria_editar:string;
    idMateria_editar:string;

    NombreUnidad_editar:string;
    IdUnidad_editar:string;
    NumUnidad_editar:string;
    HorasDeUnidad_editar:string;

  constructor(private servicio:MateriaService) {

  }

  ngOnInit() {
    $(function () {
    });


    this.servicio.ver().subscribe((data)=>{
      this.materias=data['materias'];

    });
  }

  public editar(obtenido:Materia,id){
    this.obtener_editar= obtenido;
    this.obtener_editar.id= id;
    console.log(this.obtener_editar);
    this.validar(this.obtener_editar);
  }
  formunidad;
  public eliminar(materia:Materia){
    if (confirm("¿está seguro de borrar ?")) {
       this.servicio.eliminar(materia).subscribe((data)=>{
       this.materias=data['materias'];
     });

    } else {

    }
    this.validacionUnidad(materia);
  }
  public validacionUnidad(data){
    this.formunidad= new FormGroup({

      Unidad: new FormControl(data.Nombre_unidad,[
        Validators.required
      ]),
      Numero: new FormControl(data.Num_unidad,[
        Validators.required
      ]),
      Hora:new FormControl(data.Horas_de_unidad,[
        Validators.required
      ]),
    }); 
  }
  valor;
  public editarUnidad(unidad){
    
    // this.unidad_seleccionada=unidad;

      if(unidad==="nuevo"){
        $('#agregar-unidad').html('Agregar');

        this.unidad_seleccionada= new Unidad();
        this.valor=undefined;

      }else{
        this.valor= this.obtener_editar.unidades.findIndex(k=>k.Nombre_unidad==unidad);
        this.unidad_seleccionada= this.obtener_editar.unidades[this.valor];
        $('#agregar-unidad').html('Editar');

      }
      this.validacionUnidad(this.unidad_seleccionada);
  }
  public guardarMateria(formulario){
    
    console.log(formulario.value)


  }
  public nuevaUnidad(){
    $('#btn-unidad').html('Agregar');

    this.unidad_seleccionada= new Unidad();
  }
  public guardarUnidad(formulario){
   
    //this.obtener_editar.unidades[this.valor]
    if(this.valor== undefined){
  
      var nuevo= new Unidad();
        nuevo.Nombre_unidad=formulario.value.Unidad;
        nuevo.Num_unidad=formulario.value.Numero;
        nuevo.Horas_de_unidad=formulario.value.Hora;
      this.obtener_editar.unidades.push(nuevo);
      
    }else{
      this.obtener_editar.unidades[this.valor].Nombre_unidad=formulario.value.Unidad;
      this.obtener_editar.unidades[this.valor].Num_unidad=formulario.value.Numero;
      this.obtener_editar.unidades[this.valor].Horas_de_unidad=formulario.value.Hora;
    }
    this.servicio.editar(this.obtener_editar).subscribe(data=>{
        this.materias= data['materias'];
    });
  }

  formulario;
  public validar(data){
    this.formulario= new FormGroup({

      Nombre: new FormControl(data.materia_Nombre,[
        Validators.required,
        Validators.minLength(3)
      ]),
      id: new FormControl(data.id,[
        Validators.required,
        Validators.minLength(3)
      ]),
      Unidades:new FormControl(data.unidades),
    });
  }
}
