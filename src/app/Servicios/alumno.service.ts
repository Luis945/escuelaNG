import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alumno } from '../Modelos/alumno';
import * as url from '../Clases/url';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http:HttpClient) {}

  GuardarAlumno(alumno){
    console.log(alumno)
    return this.http.post(url.url_http+'GuardarAlumno',alumno);
  }

  VerAlumnos(){
    return this.http.get<any>(url.url_http+'VerAlumnos');
  }

  ActualizaAlumno(alumno){
    return this.http.post(url.url_http+'ActualizaAlumno',alumno);
  }

}
