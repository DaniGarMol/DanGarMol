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

correcto(){
  this.enviar= true
}
}
