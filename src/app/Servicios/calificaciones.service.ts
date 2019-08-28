import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as url from '../Clases/url';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {
  root: string = url.url_http;

  constructor(private http: HttpClient) { }

  buscarSalon(grado, seccion, ciclo, materia) {
    debugger;
    return this.http.get<any>(this.root + 'salon/' + grado + '/' + seccion + '/'+ ciclo + '/'+ materia);
  }

  calificarAlumnos(calificaciones: any) {
    var data = {
      calificaciones: calificaciones
    };

    return this.http.post(this.root + 'calificar', data);
  }

  getSalones() {
    return this.http.get<any>(this.root + 'calificar/info');
  }

  getCalificaciones(_id: String, ciclo: any) {
    return this.http.get<any>(this.root + 'calificaciones/' + _id + '/' + ciclo);
  }


}
