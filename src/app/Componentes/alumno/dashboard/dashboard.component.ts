import { Component, OnInit } from '@angular/core';
import { AlertasService } from 'src/app/Servicios/alertas.service';
import Ws from '@adonisjs/websocket-client';
import * as url from '../../../Clases/url';
import { SalonService } from 'src/app/Servicios/salon.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private alertas:AlertasService, private salon:SalonService) { }

  socket= Ws(url.url_websocket);
  channel: any;
  mostrarAlertas:Array<any>;

  ngOnInit() {
    this.socket.connect();

    this.alertas.getAlertasAlumnos(localStorage.idAlumno).subscribe(data=>{
      this.mostrarAlertas=data['data'];
    });
    this.salon.salonalumno(localStorage.idAlumno).subscribe(data=>{
      localStorage.idSalon= data['data'][0]._id
      this.suscribirse(localStorage.idSalon);
    });

  }
  private suscribirse(salon){
    this.channel = this.socket.getSubscription('alerta:' + localStorage.getItem('idSalon'));
    if (!this.channel) {
      this.channel = this.socket.subscribe('alerta:' + localStorage.getItem('idSalon'));
    }
    this.channel.on('message',(info)=>{
      console.log(info);
      this.alertas.getAlertasAlumnos(localStorage.idAlumno).subscribe(data=>{
        this.mostrarAlertas=data['data'];
      });
    });
  }

}
