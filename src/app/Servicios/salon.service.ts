import { Injectable } from '@angular/core';
import { Materia } from '../Clases/materia';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.http.get<any>(url.url_http+'VerAlumnos_octa');
  }
  creargrupo(grupo:Grupo){
   
    console.log('entro');
    return this.http.post<any>(url.url_http+'creargrupo',grupo);
  }

  getsalones(){
    return this.http.get<any>(url.url_http+'versalones');
  }
  getMaestros(){
    return this.http.get<any>(url.url_http+'vermaestros');
  }

  eliminarSalon(id:String){
    return this.http.delete<any>(url.url_http+'eliminargrupo/'+id);
  }
  eliminaralumnosalon(id:string,grupo:Grupo){
    return this.http.post<any>(url.url_http+'eliminaralumnosalon/'+id,grupo);
  }
}
