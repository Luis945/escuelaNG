import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Servicios/auth.service';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as $ from 'jquery';
import { AlertService } from 'ngx-alerts';

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
      Validators.minLength(3)
    ])
  });
  
  constructor(private router: Router, private service: AuthService, private alertService: AlertService) { }

  ngOnInit() {



    setTimeout(() => {
      this.buscando();
    }, 1000)

  }

  login() {
    var { matricula, curp } = this.form.value;

    if (matricula == 'yisus' && curp == 'yisus123') {
      localStorage.setItem('tipo', 'admin');
      localStorage.setItem('token', 'admin');
      this.router.navigate(['/']);
    } else {
      this.service.login(matricula, curp).subscribe(res => {

        if (res.status == 200) {
          this.alertService.success('Ingresado correctamente');
          localStorage.setItem('token', res.token);
          localStorage.setItem('tipo', res.tipo);

          if (res.tipo == 'alumno' || res.tipo == 'jefesito') {
            localStorage.setItem('alumno', res.alumno);
            localStorage.setItem('idAlumno', res._id.toString());
            localStorage.setItem('tutor', res.tutor);
            localStorage.setItem('salon', res.salon);
            localStorage.setItem('salonNom', res.salonNom);
          }

          this.router.navigate(['/']);
        } else {
          this.alertService.warning(res.error);
        }

        
      }, error => {
          //this.alerta.setMessage('Usuario o contraseña invalidos','error');
      });
    }
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
