import { Component } from '@angular/core';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent {
  public Profesor1: string
  public Profesor2: string
  public Profesor3: string

  constructor(){
    this.Profesor1="Joaquin Meco Medina"
    this.Profesor2="Cristobal Montesdeoca Suárez"
    this.Profesor3="María Martínez Mora"
  }
}