import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {
  root: string = 'http://127.0.0.1:3333/';

  constructor(private http: HttpClient) { }

  calificarAlumnos(calificaciones: any) {

    var data = {
      calificaciones: calificaciones
    };

    return this.http.post(this.root + 'calificar', data);
  }


}
