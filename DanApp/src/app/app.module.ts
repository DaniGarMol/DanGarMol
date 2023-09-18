import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ToastrService } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms'; 


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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { EvalE2Component } from './eval-e2/eval-e2.component';

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
    FormularioConsultaComponent,
    HeaderComponent,
    FooterComponent,
    CrearCursoComponent,
    EvalE2Component
  ],
  imports: [
    ReactiveFormsModule, 
    ToastrService,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
