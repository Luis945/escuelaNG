import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as url from '../Clases/url';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private http: HttpClient) { }

  getAlertasMaestro(id){
    return this.http.get(url.url_http+'alertas/ver/maestro/'+id);
  }

  sendAlerta(info){
    return this.http.post(url.url_http+'alertas/guardar/',info);
  }
  deleteAlerta(id,maestro){
    return this.http.delete(url.url_http+'alertas/remover/'+id+'/'+maestro);
  }

}
