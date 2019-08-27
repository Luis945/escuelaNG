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
import { MateriaVerComponent } from './Componentes/materia-ver/materia-ver.component';
import { RegistroMaestroComponent } from './Componentes/maestro/registro-maestro/registro-maestro.component';
import { VerMaestrosComponent } from './Componentes/maestro/ver-maestros/ver-maestros.component';
import { VerCalificacionesComponent } from './Componentes/ver-calificaciones/ver-calificaciones.component';
import { AuthGuard } from './Guards/auth.guard';
import { MenuComponent } from './Componentes/globals/menu/menu.component';
import { AlertasComponent } from './Componentes/maestro/alertas/alertas.component';
import { PrincipalComponent } from './Componentes/maestro/principal/principal.component';
const routes: Routes = [

  {path:'login', component: LoginComponent },
  // { path:'login', component: RegistroComponent },
  {path:'prueba', component: PruebaComponent },
  {path:'RegistroMateria', component:MateriaComponent,canActivate:[AuthGuard]},
  {path:'VerMaterias', component:MateriaVerComponent,canActivate:[AuthGuard]},
  {path:'crear-salon', component:CrearSalonComponent,canActivate:[AuthGuard]},
  {path:'menu-salones', component:CrearSalonComponent,canActivate:[AuthGuard]},
  {path: 'agregar-salones',component:AgregarSalonComponent,canActivate:[AuthGuard]},
  {path: 'vermaterias',component:MateriasPorsalonComponent,canActivate:[AuthGuard]},
  /**-------------------------- Alertas   */
  {path:'maestro/alertas',component:AlertasComponent},
  {path:'maestro',component:PrincipalComponent},

  /*---------Alumnos--------*/
  {path:'RegistroAlumno',component:RegistroAlumnoComponent,canActivate:[AuthGuard] },
  {path:'VerAlumnos',component:VerAlumnosComponent,canActivate:[AuthGuard]},
  /*--------Maestro--------*/
  {path:'RegistroMaestro',component:RegistroMaestroComponent,canActivate:[AuthGuard]},
  {path:'calificar', component: CalificacionesComponent ,canActivate:[AuthGuard]},
  {path:'calificaciones', component: VerCalificacionesComponent ,canActivate:[AuthGuard]},
  {path:'VerMaestros',component:VerMaestrosComponent,canActivate:[AuthGuard]},
  {path:'', component:MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
