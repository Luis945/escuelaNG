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
    return this.http.post<any>(url.url_http+'materia/setMateria/',materia);
  }
}
