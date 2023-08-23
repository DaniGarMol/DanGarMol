import { Component } from '@angular/core';
import { alumnosBD } from 'src/app/Modelos/alumnosBD';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  public alumnosAll: Array<alumnosBD>

  constructor(){
    this.alumnosAll=[
      new alumnosBD('Daniel', 'García Molina', 47, 'adeg@gmail.com', '622900500', 'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page', true),
      new alumnosBD('Jose', 'Lersundi Coco', 38, 'degcoco@gmail.com', '600300100', 'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page', true),
      new alumnosBD('Samuel', 'Alonso Hernández', 48, 'samles@gmail.com', '699633777', 'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page', false)
    ]
  }
}
