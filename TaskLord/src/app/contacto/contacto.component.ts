import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  public nameFull: string
  public mail: string
  public mess: string

  constructor(){
  this.nameFull = ""
  this.mail = ""
  this.mess = ""
}

submitForm(){
  console.log('Formulario enviado')
  console.log(this.nameFull)
  console.log(this.mail)
  console.log(this.mess)
}


}
