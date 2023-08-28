import { Injectable } from '@angular/core';
import { cursosBD } from '../Modelos/cursosBD';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  public cursosAll: Array<cursosBD>

  constructor() { 
    this.cursosAll=[
      new cursosBD('Ilustración', 'Con un 6 y un 4 haremos nuestro retrato', '780 horas'),
      new cursosBD('Diseño', 'Aprenderemos Teoría de la forma y el uso de Adobe Illustrator', '680 horas'),
      new cursosBD('Teoría del Color', 'Aprenderemos todo lo referente al circulo cromático y sus distintas sintesis', '530 horas')
    ]
  }

  getTexto(){
    return "Texto desde un servicio"
}

getAlumnos(): Array<cursosBD>{
    return this.cursosAll
}

}
