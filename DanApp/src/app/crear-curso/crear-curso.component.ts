import { Component, OnInit } from '@angular/core';
import { cursoBD } from '../Modelos/cursoBD';
import { Global } from '../servicios/global';
import { save_cursoService } from '../servicios/curso.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css'],
  providers: [save_cursoService]
})
export class CrearCursoComponent implements OnInit{
  public title: string
  public curso: cursoBD
  public save_curso: any
  public status: any
  public result: any

  constructor(private _cursoService: save_cursoService){
    this.result = null
    this.title = "Crear Curso"
    this.curso = new cursoBD('', '', '','',6,'','')
  }
  ngOnInit(){
  }

  onSubmit(form:{reset: () => void}){
    this._cursoService.saveCurso(this.curso).subscribe(
      response => {
        if(response.curso){
          this.save_curso = this.result.curso
          this.status = 'success'
          form.reset()
        }else{
          this.status = 'failed'
        }
      }
    )
  }
}
