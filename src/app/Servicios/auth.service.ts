import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  crearUser(nickname: string,  password: string) {

    var data = {
      nickname:nickname,
      password: password
    };

    return this.http.post(this.root + 'registro', data);
  }

  root: string = 'http://127.0.0.1:3333/';
  flag: boolean = false;

  login(nickname: string, password: string) {
    let jugador = {
      nickname: nickname,
      password: password
    }
    return this.http.post<any>(this.root + 'login', jugador);
  }
}
