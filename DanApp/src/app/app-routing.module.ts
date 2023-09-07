import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './curso/curso.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { FormularioAccesoComponent } from './formulario-acceso/formulario-acceso.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormularioConsultaComponent } from './formulario-consulta/formulario-consulta.component';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';

const routes: Routes = [
{path: '',component:AppComponent},
{path: 'cursos', component:CursosComponent},
{path: 'curso', component:CursoComponent},
{path: 'alumnos', component:AlumnosComponent},
{path: 'alumno', component:AlumnoComponent},
{path: 'profesores', component:ProfesoresComponent},
{path: 'profesor', component:ProfesorComponent},
{path: 'formulario-acceso', component:FormularioAccesoComponent},
{path: 'formulario-registro', component:FormularioRegistroComponent},
{path: 'formulario-consulta', component:FormularioConsultaComponent},
{path: 'crear_curso', component:CrearCursoComponent},
{path: '**', component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
