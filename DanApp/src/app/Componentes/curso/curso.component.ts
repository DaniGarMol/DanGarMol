import { Component } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {
  public NombreCurso: string
  public InfoCurso: string
  public Imagen: string

  constructor(){
    this.NombreCurso="Ilustración"
    this.InfoCurso="Aprende a ilustrar"
    this.Imagen="https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page="
  }
}
