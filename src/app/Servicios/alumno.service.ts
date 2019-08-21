import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http:HttpClient) {}

  GuardarAlumno(alumno){
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post('localhost:3333/'+'GuardarAlumno',{headers:headers});
  }

}
