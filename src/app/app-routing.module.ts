import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { PruebaComponent } from './prueba/prueba.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { MateriaComponent } from './Componentes/materia/materia.component';
import { CrearSalonComponent } from './Componentes/crear-salon/crear-salon.component';
import { RegistroAlumnoComponent } from './Componentes/alumno/registro-alumno/registro-alumno.component';
const routes: Routes = [
  { path:'login', component: LoginComponent },
  // { path:'login', component: RegistroComponent },
  { path:'prueba', component: PruebaComponent },  
  { path:'RegistroAlumno',component:RegistroAlumnoComponent },
  { path:'RegistroMateria', component:MateriaComponent},
  {path:'crear-salon', component:CrearSalonComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
