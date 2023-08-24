import { Component } from '@angular/core';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent {
  public Nombre: string
  public Apellidos: string
  public Edad: number
  public Mail: string
  public Imagen: string


  constructor(){
    this.Nombre="Armiche"
    this.Apellidos="Hernández Guerra"
    this.Edad=43
    this.Mail="Gaster@gmail.com"
    this.Imagen="https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg"
  }
}