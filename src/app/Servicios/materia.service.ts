import { Injectable } from '@angular/core';
import { Materia } from '../Clases/materia';
import { HttpClient } from '@angular/common/http';
import * as url from '../Clases/url';
@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(private http: HttpClient) { }

  mandar(materia:Materia){
    return this.http.post(url.url_http+'materia/setMateria/',materia);
  }
  ver(){
    return this.http.get(url.url_http+'materia/materias/');
  }
  // EDITAR Y ELIMINAR

  eliminar(materia:Materia){
    return this.http.delete(url.url_http+'materia/eliminar/'+materia['_id']);
  }
  editar(materia:Materia){
    return this.http.post(url.url_http+'materia/editar/',materia)
  }
}
