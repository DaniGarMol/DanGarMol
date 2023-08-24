import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent {
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

}
