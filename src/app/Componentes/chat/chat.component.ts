import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/Servicios/chat.service';

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
  /*Arreglo: Array<Mensaje>;
  mensaje: string = '';
  Usuario:User;
  mensajito: Observable<any>;
  grupos: any;
  grupo: number = null;
  mensajes: Array<Mensaje>;
  typing: String = "";
  tipogrupo:any;

  MensajeTitulo: string;


  //VALIDACIÓN PARA MOSTRAR CONTACTOS O CONVERSACIONES
  ValidaContactos:boolean */

  constructor(private Chat_Service: ChatService) { }

  ngOnInit() {
    this.nick = localStorage.getItem('tutor');

    this.Chat_Service.GetHistorial(localStorage.getItem('salon')).subscribe(res => {
      this.Arreglo = res.mensajes.map(msj => {
        return new Object({
          emisor: msj.Emisor,
          msj: msj.Mensaje
        });
      });
    });
  }


  agregar() {
    console.log('mensaje enviado', this.mensaje);
  }

}
