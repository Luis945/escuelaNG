import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { PruebaComponent } from './prueba/prueba.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { MaestroComponent } from './Componentes/maestro/maestro.component';

const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'registro', component: RegistroComponent },
  { path:'prueba', component: PruebaComponent },
  { path:'RegistroMaestro',component:MaestroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
