import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as url from '../Clases/url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  root: string = 'http://127.0.0.1:3333/';
  flag: boolean = false;

  login(matricula: String, curp: String) {
    let alumno = {
      matricula: matricula,
      curp: curp
    }
    return this.http.post<any>(url.url_http + 'login', alumno);
  }

  buscar(matricula: String) {
    return this.http.get<any>(url.url_http + 'alumno/' + matricula);
  }
}
