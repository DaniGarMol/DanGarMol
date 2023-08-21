import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  public Curso1: string
  public Curso2: string
  public Curso3: string

  constructor(){
    this.Curso1="Ilustración"
    this.Curso2="Diseño"
    this.Curso3="Teoría del Color"
  }
}
