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
    this.Imagen="https://thecatapi.com/api/images/getÇ?format=src&type=gif?results_per-page"
  }
}