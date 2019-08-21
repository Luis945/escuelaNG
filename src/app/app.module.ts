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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PruebaComponent,
    RegistroComponent,
    MaestroComponent,
    MateriaComponent,
    MenuComponent,
    CrearSalonComponent
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
