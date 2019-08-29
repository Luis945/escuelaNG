import { Component, OnInit } from '@angular/core';
import Ws from '@adonisjs/websocket-client';
import * as url from '../Clases/url';

@Component({
  selector: 'app-socke',
  templateUrl: './socke.component.html',
  styleUrls: ['./socke.component.css']
})
export class SockeComponent implements OnInit {

  //Conexión WebSocket
  socket = Ws(url.url_websocket);
  constructor() { }

  ngOnInit() {

     //Conectar y Subscribir
this.socket = this.socket.connect();
this.socket.subscribe('Prueba');


  }

  ngOnDestroy(): void {
    this.socket.close();
  }

  mandar(){

    //Canal de contactos
    const Contactos = this.socket.getSubscription('Prueba');
    Contactos.emit('message', {'data':"Holaa desde Angular"});

    //Listener para nuevos Contactos
      Contactos.on('message', (data) => {
      console.log(data) 
      });
      
  }

}
