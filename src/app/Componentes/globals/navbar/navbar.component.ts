import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private alertService: AlertService,private rutas:Router) { }
  iniciado:Boolean;
  token:string;
  alumno_iniciado:Boolean;
  profesor_iniciado:Boolean;
  padre_iniciado:Boolean;
  admin_iniciado:Boolean;
  tipo:string;
  ngOnInit() {
    this.iniciado= this.verificaSesion();
    this.alumno_iniciado= this.verificarAlumno();
    this.profesor_iniciado=this.verificarprofespr();
    this.padre_iniciado = this.verificarpapa();
    this.admin_iniciado=this.verificarAdmin();
  }

  cerrarSesion(){
    localStorage.removeItem('token');
    this.alertService.info('Has cerrado sesión');
    this.rutas.navigate(['/login']);
  }
  iniciarSesion(){
    this.rutas.navigate(['/login']);
  }
  verificaSesion(){
 this.token= localStorage.getItem('token');
    if(this.token){ return true }
    else{ return false }
  }

  verificarAlumno(){
    this.tipo= localStorage.getItem('tipo');
       if(this.tipo=="alumno"){ return true }
       else{ return false }
     }
     verificarprofespr(){
      this.tipo= localStorage.getItem('tipo');
         if(this.tipo=="profe"){ return true }
         else{ return false }
       }
       verificarpapa(){
        this.tipo= localStorage.getItem('tipo');
           if(this.tipo=="jefesito"){ return true }
           else{ return false }
         }
         verificarAdmin(){
          this.tipo= localStorage.getItem('tipo');
             if(this.tipo=="admin"){ return true }
             else{ return false }
           }
    

}
