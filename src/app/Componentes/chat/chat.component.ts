import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/Servicios/chat.service';
import * as url from '../../Clases/url';
import Ws from '@adonisjs/websocket-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  mensaje: String = "";
  typing: String = "";
  mensajeTitulo: String = "";
  Arreglo: Array<any>;
  grupos: any;
  grupo: number = null;
  ValidaContactos:boolean = false;
  nick: String;

  socket= Ws(url.url_websocket);
  channel: any;
  channel2:any;

  constructor(private Chat_Service: ChatService) { }

  ngOnInit() {
    debugger;
    this.nick = localStorage.getItem('tutor');
    this.mensajeTitulo = localStorage.getItem('salonNom');

    this.Chat_Service.GetHistorial(localStorage.getItem('salon')).subscribe(res => {
      //Conexión y subscripción de Contactos
      this.socket = this.socket.connect();

      this.Arreglo = res.mensajes.map(msj => {
        return new Object({
          emisor: msj.Emisor,
          msj: msj.Mensaje
        });
      });


      this.Subscribir(localStorage.getItem('salon'));

    });
  }

  enviar() {
    console.log('mensaje enviado', this.mensaje);

    this.Chat_Service.SendMessage(this.mensaje, localStorage.getItem('tutor')).subscribe(res => {
      debugger;
      this.mensaje = "";
    });
  }

  Subscribir(grupo_id: string) {
    this.channel = this.socket.getSubscription('salon:' + localStorage.getItem('salon'));

    if (!this.channel) {
      this.channel = this.socket.subscribe('salon:' + localStorage.getItem('salon'));
    }

    this.channel.on('error', data => {

    });

    this.channel.on('mensaje', data => {
      debugger;
      this.Arreglo.push(
        new Object({
          emisor: data.emisor,
          msj: data.mensaje
        })
      );
    });

    this.channel.on('entrar', data => {
      console.log('acaba de entrar un usuario')
    });

    this.channel.on('close', data => {

    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.socket.close();
  }
}
