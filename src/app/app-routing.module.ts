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
import { ChatComponent } from './Componentes/chat/chat.component';
import { AlertasComponent } from './Componentes/maestro/alertas/alertas.component';
import { PrincipalComponent } from './Componentes/maestro/principal/principal.component';
import { AdminGuard } from './Guards/admin.guard';
import { ProfesorGuard } from './Guards/profesor.guard.';
import { AlumnoGuard } from './Guards/alumno.guard';
import { PadreGuard } from './Guards/padre.guard';
import { SockeComponent } from './socke/socke.component';
import { ChatGuard } from './Guards/chat.guard';
import { DashboardComponent } from './Componentes/alumno/dashboard/dashboard.component';
const routes: Routes = [

  {path:'login', component: LoginComponent },
  // { path:'login', component: RegistroComponent },
  {path:'prueba', component: PruebaComponent },
  {path:'RegistroMateria', component:MateriaComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'VerMaterias', component:MateriaVerComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'crear-salon', component:CrearSalonComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'menu-salones', component:CrearSalonComponent,canActivate:[AuthGuard,AdminGuard]},
  {path: 'agregar-salones',component:AgregarSalonComponent,canActivate:[AuthGuard,AdminGuard]},
  {path: 'vermaterias',component:MateriasPorsalonComponent,canActivate:[AuthGuard]},
  /**-------------------------- Alertas   */
  {path:'alertaprofe',component:AlertasComponent},
  {path:'maestro',component:PrincipalComponent},

  /*---------Alumnos--------*/
  {path:'RegistroAlumno',component:RegistroAlumnoComponent,canActivate:[AuthGuard,AdminGuard] },
  {path:'VerAlumnos',component:VerAlumnosComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'alertaalumno',component:DashboardComponent},
  /*--------Maestro--------*/
  {path:'RegistroMaestro',component:RegistroMaestroComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'calificar', component: CalificacionesComponent ,canActivate:[AuthGuard,ProfesorGuard]},
  {path:'calificaciones', component: VerCalificacionesComponent ,canActivate:[AuthGuard,AlumnoGuard]},
  {path:'VerMaestros',component:VerMaestrosComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'', component:MenuComponent},
  {path:'chat', component: ChatComponent,canActivate:[AuthGuard,ProfesorGuard,PadreGuard]},
  {path:'socket',component:SockeComponent},
  {path:'chat', component: ChatComponent,canActivate:[AuthGuard,ChatGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
