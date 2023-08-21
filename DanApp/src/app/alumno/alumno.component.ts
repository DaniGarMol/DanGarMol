import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {
  public Nombre: string
  public Apellidos: string
  public Edad: number
  public Correo_Electronico: string
  public Imagen: string

  constructor(){
    this.Nombre="nombre"
    this.Apellidos="apellidos"
    this.Edad=47
    this.Correo_Electronico="adg@h.com"
    this.Imagen="https://thecatapi.com/api/images/getÇ?format=src&type=gif?results_per-page"
  }
}
