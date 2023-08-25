import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  public nombre: string
  public apellidos: string
  public correo: string
  public edad: number
  public pass: string
  public imagen: string

  constructor(){
  this.nombre = ""
  this.apellidos = ""
  this.correo = ""
  this.edad = 0
  this.pass = ""
  this.imagen = ""
}

submitForm(){
  console.log('Formulario enviado')
  console.log(this.nombre)
  console.log(this.apellidos)
  console.log(this.correo)
  console.log(this.edad)
  console.log(this.pass)
  console.log(this.imagen)
}

}
