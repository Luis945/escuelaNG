import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { PruebaComponent } from './prueba/prueba.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { MateriaComponent } from './Componentes/materia/materia.component';
import { CrearSalonComponent } from './Componentes/crear-salon/crear-salon.component';
import { AgregarSalonComponent } from './Componentes/agregar-salon/agregar-salon.component';
import { MateriasPorsalonComponent } from './Componentes/materias-porsalon/materias-porsalon.component';
import { AlumnosPorsalonComponent } from './Componentes/alumnos-porsalon/alumnos-porsalon.component';
import { MateriaVerComponent } from './Componentes/materia-ver/materia-ver.component';
const routes: Routes = [
  { path:'login', component: LoginComponent },
  // { path:'login', component: RegistroComponent },
  { path:'prueba', component: PruebaComponent },  
  { path:'RegistroMateria', component:MateriaComponent},
  { path:'VerMaterias', component:MateriaVerComponent},
  {path:'menu-salones', component:CrearSalonComponent},
  {path: 'agregar-salones',component:AgregarSalonComponent},
  {path: 'vermaterias',component:MateriasPorsalonComponent},
  {path: 'veralumnos',component:AlumnosPorsalonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
