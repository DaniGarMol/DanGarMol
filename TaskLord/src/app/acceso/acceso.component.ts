import { Component } from '@angular/core';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent {

  public usuarioAcc: string
  public emailAcc: string
  public contrasenaAcc: string

  constructor(){
  this.usuarioAcc = ""
  this.emailAcc = ""
  this.contrasenaAcc= ""
}

submitForm(){
  console.log('Formulario enviado')
  console.log(this.usuarioAcc)
  console.log(this.emailAcc)
  console.log(this.contrasenaAcc)
}

}
