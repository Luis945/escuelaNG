import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { PruebaComponent } from './prueba/prueba.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { MaestroComponent } from './Componentes/maestro/maestro.component';
import { MateriaComponent } from './Componentes/materia/materia.component';

const routes: Routes = [
  { path:'login', component: LoginComponent },
  // { path:'login', component: RegistroComponent },
  { path:'prueba', component: PruebaComponent },
  { path:'RegistroMaestro',component:MaestroComponent},
  { path:'RegistroMateria', component:MateriaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
