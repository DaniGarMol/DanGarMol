import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//ImportaR componentes

import { AppComponent } from './app.component';
import { AccesoComponent } from './acceso/acceso.component';
import { RegistroComponent } from './registro/registro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CursoComponent } from './curso/curso.component';
import { CursosComponent } from './cursos/cursos.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { ProfesoresComponent } from './profesores/profesores.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'acceso',component: AccesoComponent},
  {path:'registro',component: RegistroComponent},
  {path:'contacto',component: ContactoComponent},
  {path:'alumno',component: AlumnoComponent},
  {path:'alumnos',component: AlumnosComponent},
  {path:'curso',component: CursoComponent},
  {path:'cursos',component: CursosComponent},
  {path:'profesor',component: ProfesorComponent},
  {path:'profesores',component: ProfesoresComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
