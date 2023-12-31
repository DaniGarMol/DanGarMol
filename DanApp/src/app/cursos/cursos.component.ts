import { Component } from '@angular/core';
import { cursosBD } from 'src/app/Modelos/cursosBD';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  public cursosAll: Array<cursosBD>

  constructor(){
    this.cursosAll=[
      new cursosBD('Ilustración', 'Con un 6 y un 4 haremos nuestro retrato', '780 horas'),
      new cursosBD('Diseño', 'Aprenderemos Teoría de la forma y el uso de Adobe Illustrator', '680 horas'),
      new cursosBD('Teoría del Color', 'Aprenderemos todo lo referente al circulo cromático y sus distintas sintesis', '530 horas')
    ]
  }
}
