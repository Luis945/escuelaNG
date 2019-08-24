import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as url from '../Clases/url';

@Injectable({
  providedIn: 'root'
})
export class MaestroService {

  constructor(private http:HttpClient) { }

  RegistroMaestro(maestro){
    return this.http.post(url.url_http+'RegistroMaestro',maestro);
  }

  VerMaestros(){
    return this.http.get<any>(url.url_http+'VerMaestros');
  }

}
