import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-acceso',
  templateUrl: './formulario-acceso.component.html',
  styleUrls: ['./formulario-acceso.component.css']
})
export class FormularioAccesoComponent {
  public Usuario: string
  public Contrasena: string
  public enviar: boolean

  constructor(){
  this.Usuario = ""
  this.Contrasena = ""
  this.enviar = false
}

submitForm(){
  console.log('Formulario enviado')
  console.log(this.Usuario)
  console.log(this.Contrasena)
  console.log(this.enviar)
}

correcto(){
  this.enviar= true
}
}
