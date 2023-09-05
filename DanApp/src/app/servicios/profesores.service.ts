import { Injectable } from '@angular/core';
import { profesoresBD } from '../Modelos/profesoresBD';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  public profesoresAll: Array<profesoresBD>


  constructor() { 

    this.profesoresAll=[
      new profesoresBD('Joaquin', 'Meco Medina', 48, 'meco@gmail.com', '630560807', 'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page', true),
      new profesoresBD('Cristobal', 'Montesdeoca Medina', 52, 'montesMC@gmail.com', '612234098', 'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page', true),
      new profesoresBD('María', 'Martín Mora', 33, 'Mmm@gmail.com', '679800953', 'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page', false)
    ]
  }

  getTexto(){
    return "Texto desde un servicio"
}

getAlumnos(): Array<profesoresBD>{
    return this.profesoresAll
}
}
