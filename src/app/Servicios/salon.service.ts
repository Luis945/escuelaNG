import { Injectable } from '@angular/core';
import { Materia } from '../Clases/materia';
import { HttpClient } from '@angular/common/http';
import * as url from '../Clases/url';
@Injectable({
  providedIn: 'root'
})
export class SalonService {

  constructor(private http: HttpClient) { }

  getmaterias(){
    return this.http.get<any>(url.url_http+'materia/getMaterias/nombre');
  }
}
