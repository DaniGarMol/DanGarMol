import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './Componentes/cursos/cursos.component';
import { CursoComponent } from './Componentes/curso/curso.component';
import { AlumnosComponent } from './Componentes/alumnos/alumnos.component';
import { AlumnoComponent } from './Componentes/alumno/alumno.component';
import { ProfesoresComponent } from './Componentes/profesores/profesores.component';
import { ProfesorComponent } from './Componentes/profesor/profesor.component';
import { FormularioAccesoComponent } from './Componentes/formulario-acceso/formulario-acceso.component';
import { FormularioRegistroComponent } from './Componentes/formulario-registro/formulario-registro.component';
import { FormularioConsultaComponent } from './Componentes/formulario-consulta/formulario-consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CursoComponent,
    AlumnosComponent,
    AlumnoComponent,
    ProfesoresComponent,
    ProfesorComponent,
    FormularioAccesoComponent,
    FormularioRegistroComponent,
    FormularioConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
