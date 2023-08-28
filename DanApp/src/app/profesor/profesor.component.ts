import { Component } from '@angular/core';
import { profesoresBD } from 'src/app/Modelos/profesoresBD';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent {
  public profesoresAll: Array<profesoresBD>


  constructor(){
    this.profesoresAll=[
      new profesoresBD('Armiche', 'Hernández Guerra', 43, 'gaster@gmail.com', '622900500', 'https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg', true)
    ]
  }
}

