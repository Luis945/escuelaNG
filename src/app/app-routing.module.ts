import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { PruebaComponent } from './prueba/prueba.component';
import { CalificacionesComponent } from './Componentes/calificaciones/calificaciones.component';

const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'calificaciones', component: CalificacionesComponent },
  { path:'prueba', component: PruebaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
