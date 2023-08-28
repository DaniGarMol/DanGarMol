import { Component, OnInit } from '@angular/core';
import { alumnosBD } from 'src/app/Modelos/alumnosBD';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent 
implements OnInit {
  public Nota: number
  
  public alumnosAll: Array<alumnosBD>
  

  constructor (){
    this.Nota=0
    this.alumnosAll=[
      new alumnosBD('Daniel', 'García Molina', 47, 'adeg@gmail.com', '622900500', 'https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg', true, 8)
    ]
  }

ngOnInit(): void {
  console.log("OnInit Ejecutando")
  console.log(this.alumnosAll)
}
}
