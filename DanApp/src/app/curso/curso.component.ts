import { Component } from '@angular/core';
import { cursoBD } from 'src/app/Modelos/cursoBD';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {
  
  public NombreCurso: string
  // public InfoCurso: string
  // public Imagen: string
  public cursoAll: Array<cursoBD>

  constructor(){
    
    this.NombreCurso="Ilustración"
    // this.InfoCurso="Aprende a ilustrar"
    // this.Imagen="https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page="
    this.cursoAll=[
      new cursoBD('Ilustración', 'Con un 6 y un 4 haremos nuestro retrato', '780 horas', '1.Introducción a la Ilustración 2.La línea, el punto, la forma. 3.La Luz y el claroscuro')
    ]
  }
}
