import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as url from '../Clases/url';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  root: string = url.url_http;
  constructor(private http: HttpClient) { }

  GetHistorial(salon: String) {
    return this.http.get<any>(this.root + 'chat/' + salon);
  }

}
