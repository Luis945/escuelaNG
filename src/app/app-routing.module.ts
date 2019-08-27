import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { PruebaComponent } from './prueba/prueba.component';
import { CalificacionesComponent } from './Componentes/calificaciones/calificaciones.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { MateriaComponent } from './Componentes/materia/materia.component';
import { CrearSalonComponent } from './Componentes/crear-salon/crear-salon.component';
import { RegistroAlumnoComponent } from './Componentes/alumno/registro-alumno/registro-alumno.component';
import { VerAlumnosComponent } from './Componentes/Alumno/ver-alumnos/ver-alumnos.component';
import { AgregarSalonComponent } from './Componentes/agregar-salon/agregar-salon.component';
import { MateriasPorsalonComponent } from './Componentes/materias-porsalon/materias-porsalon.component';
import { AlumnosPorsalonComponent } from './Componentes/alumnos-porsalon/alumnos-porsalon.component';
import { MateriaVerComponent } from './Componentes/materia-ver/materia-ver.component';
import { RegistroMaestroComponent } from './Componentes/maestro/registro-maestro/registro-maestro.component';
import { VerMaestrosComponent } from './Componentes/maestro/ver-maestros/ver-maestros.component';
import { VerCalificacionesComponent } from './Componentes/ver-calificaciones/ver-calificaciones.component';

import { MenuComponent } from './Componentes/globals/menu/menu.component';
const routes: Routes = [
  { path:'login', component: LoginComponent },
  // { path:'login', component: RegistroComponent },
  { path:'prueba', component: PruebaComponent },
  { path:'RegistroMateria', component:MateriaComponent},
  { path:'VerMaterias', component:MateriaVerComponent},
  {path:'crear-salon', component:CrearSalonComponent},
  {path:'menu-salones', component:CrearSalonComponent},
  {path: 'agregar-salones',component:AgregarSalonComponent},
  {path: 'vermaterias',component:MateriasPorsalonComponent},
  {path: 'veralumnos',component:AlumnosPorsalonComponent},
  /*---------Alumnos--------*/
  {path:'RegistroAlumno',component:RegistroAlumnoComponent },
  {path:'VerAlumnos',component:VerAlumnosComponent},
  /*--------Maestro--------*/
  {path:'RegistroMaestro',component:RegistroMaestroComponent},
  { path:'calificar', component: CalificacionesComponent },
  { path:'calificaciones', component: VerCalificacionesComponent },
  {path:'VerMaestros',component:VerMaestrosComponent},
  {path:'', component:MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
