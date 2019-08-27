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
  token:string
  ngOnInit() {
    this.iniciado= this.verificaSesion();

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

}
