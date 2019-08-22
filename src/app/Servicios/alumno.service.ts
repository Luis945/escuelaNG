import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alumno } from '../Modelos/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http:HttpClient) {}

  GuardarAlumno(alumno){
    console.log(alumno)
    return this.http.post('http://127.0.0.1:3333/'+'GuardarAlumno',alumno);
  }

}
