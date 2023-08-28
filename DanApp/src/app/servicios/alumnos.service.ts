import { Injectable } from '@angular/core';
import { alumnosBD } from '../Modelos/alumnosBD';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  public alumnosAll: Array<alumnosBD>

  constructor() { 
    this.alumnosAll=[
      new alumnosBD('Daniel', 'García Molina', 47, 'adeg@gmail.com', '622900500', 'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page', true, 8),
      new alumnosBD('Jose', 'Lersundi Coco', 38, 'degcoco@gmail.com', '600300100', 'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page', true, 8),
      new alumnosBD('Samuel', 'Alonso Hernández', 48, 'samles@gmail.com', '699633777', 'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page', false, 6)
    ]
  }

  getTexto(){
    return "Texto desde un servicio"
}

getAlumnos(): Array<alumnosBD>{
    return this.alumnosAll
}

}
