import { Injectable } from '@angular/core';
import { Materia } from '../Clases/materia';
import { HttpClient } from '@angular/common/http';
import * as url from '../Clases/url';
import { Grupo } from '../Clases/grupo';
@Injectable({
  providedIn: 'root'
})
export class SalonService {

  constructor(private http: HttpClient) { }

  getmaterias(){
    return this.http.get<any>(url.url_http+'materia/getMaterias/nombre');
  }
  getalumnos(){
    return this.http.get<any>(url.url_http+'VerAlumnos');
  }
  creargrupo(grupo:Grupo){
   
    console.log('entro');
    return this.http.post<any>(url.url_http+'creargrupo',grupo);
  }
}
