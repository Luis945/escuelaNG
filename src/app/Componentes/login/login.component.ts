import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Servicios/auth.service';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  informacion: any;

  //reactive forms
  form = new FormGroup({
    matricula: new FormControl('XAXX010101000',
    [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern("^[a-zA-Z0-9_]*$")
    ]),
    curp: new FormControl('XEXX010101HNEXXXA4 ',
    [
      Validators.required,
      Validators.minLength(6)
    ])
  });
  
  constructor(private router: Router, private service: AuthService) { }

  ngOnInit() {



    setTimeout(() => {
      this.buscando();
    }, 1000)

  }

  login() {
    var { matricula, curp } = this.form.value;

    this.service.login(matricula, curp).subscribe(res => {

      debugger;
      localStorage.setItem('token', res.token);
      this.router.navigate(['/']);
    }, error => {
        //this.alerta.setMessage('Usuario o contraseña invalidos','error');
    });
  }

  logout() {
    localStorage.clear();
  }

  buscando() {
    var input = document.querySelector("#matricula");
    var obs = fromEvent(input, 'input');

    obs.pipe(
      debounceTime(800))
    .subscribe((x) => {
      var matricula = x.target['value'];
      
      this.service.buscar(matricula).subscribe(res => {

        if (res.hasOwnProperty('alumno')) {
          $('#nombre_alumno').text(res.alumno.nombre).removeClass('hidden');
          $('#matricula_alumno').text(res.alumno.matricula).removeClass('hidden');
          $('#avatar_alumno').attr('src', res.alumno.foto);
        } else {
          $('#nombre_alumno').text(res.error).addClass('hidden');
          $('#matricula_alumno').text('').addClass('hidden');
          $('#avatar_alumno').attr('src', 'https://www.w3schools.com/howto/img_avatar.png');
        }
      });
    });
  }

}
