import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-alerts';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { PruebaComponent } from './prueba/prueba.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { CalificacionesComponent } from './Componentes/calificaciones/calificaciones.component';
import { MateriaComponent } from './Componentes/materia/materia.component';
import { MenuComponent } from './Componentes/globals/menu/menu.component';
import { CrearSalonComponent } from './Componentes/crear-salon/crear-salon.component';
import { AgregarSalonComponent } from './Componentes/agregar-salon/agregar-salon.component';
import { MateriasPorsalonComponent } from './Componentes/materias-porsalon/materias-porsalon.component';
import { AlumnosPorsalonComponent } from './Componentes/alumnos-porsalon/alumnos-porsalon.component';
import { RegistroAlumnoComponent } from './Componentes/alumno/registro-alumno/registro-alumno.component';
import { VerAlumnosComponent } from './Componentes/Alumno/ver-alumnos/ver-alumnos.component';
import { MateriaVerComponent } from './Componentes/materia-ver/materia-ver.component';
import { RegistroMaestroComponent } from './Componentes/maestro/registro-maestro/registro-maestro.component';
import { VerMaestrosComponent } from './Componentes/maestro/ver-maestros/ver-maestros.component';
import { NavbarComponent } from './Componentes/globals/navbar/navbar.component';
import { ChatComponent } from './Componentes/chat/chat.component';

import { VerCalificacionesComponent } from './Componentes/ver-calificaciones/ver-calificaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PruebaComponent,
    RegistroComponent,
    CalificacionesComponent,
    MateriaComponent,
    MenuComponent,
    CrearSalonComponent,
    AgregarSalonComponent,
    MateriasPorsalonComponent,
    AlumnosPorsalonComponent,
    RegistroAlumnoComponent,
    VerAlumnosComponent,
    MateriaVerComponent,
    RegistroMaestroComponent,
    VerMaestrosComponent,
    NavbarComponent,
    ChatComponent,
    VerCalificacionesComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 3000, position: 'left'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
