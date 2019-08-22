import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { PruebaComponent } from './prueba/prueba.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { MaestroComponent } from './Componentes/maestro/maestro.component';
import { MateriaComponent } from './Componentes/materia/materia.component';
import { MenuComponent } from './Componentes/globals/menu/menu.component';
import { CrearSalonComponent } from './Componentes/crear-salon/crear-salon.component';
import { AgregarSalonComponent } from './Componentes/agregar-salon/agregar-salon.component';
import { MateriasPorsalonComponent } from './Componentes/materias-porsalon/materias-porsalon.component';
import { AlumnosPorsalonComponent } from './Componentes/alumnos-porsalon/alumnos-porsalon.component';
import { RegistroAlumnoComponent } from './Componentes/alumno/registro-alumno/registro-alumno.component';
import { VerAlumnosComponent } from './Componentes/Alumno/ver-alumnos/ver-alumnos.component';
import { MateriaVerComponent } from './Componentes/materia-ver/materia-ver.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PruebaComponent,
    RegistroComponent,
    MaestroComponent,
    MateriaComponent,
    MenuComponent,
    CrearSalonComponent,
    AgregarSalonComponent,
    MateriasPorsalonComponent,
    AlumnosPorsalonComponent,
    RegistroAlumnoComponent,
    VerAlumnosComponent,
    MateriaVerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
