// Módulos y Librerías
import { Component, OnInit } from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr'
// Servicio - Modelo
import { EvalE2BD } from '../Modelos/EvalE2BD' 
import { save_cursoService } from '../servicios/curso.service'

@Component({
  selector: 'app-eval-e2',
  templateUrl: './eval-e2.component.html',
  styleUrls: ['./eval-e2.component.css']
})
export class EvalE2Component implements OnInit{
  cursoForm: FormGroup;
  titulo = 'Crear curso';
    id: string | null;
    constructor(private fb: FormBuilder,
                private router: Router,
                private toastr: ToastrService,
                private _cursoService: save_cursoService,
                private aRouter: ActivatedRoute) { 
      this.cursoForm = this.fb.group({
        nombre: ['', Validators.required],
        descripcion: ['', Validators.required],
        categoria: ['', Validators.required],
        duracion: ['', Validators.required],
        temas: ['', Validators.required]
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }
  
    ngOnInit(): void {
      this.esEditar();
    }
  
    agregarCurso() {
  
      const CURSO: EvalE2BD = {
        _id: this.cursoForm.get('id')?.value,
        nombre: this.cursoForm.get('nombre')?.value,
        descripcion: this.cursoForm.get('descripcion')?.value,
        categoria: this.cursoForm.get('categoria')?.value,
        duracion: this.cursoForm.get('duracion')?.value,
        temas: this.cursoForm.get('temas')?.value,
        // image: this.cursoForm.get('image')?.value
      }
  
      if(this.id !== null){
        // Editamos Curso
        this._cursoService.editarCurso(this.id, CURSO).subscribe(data =>{
          this.toastr.info('El curso fue actualizado con exito!', 'Curso Actualizado!');
          this.router.navigate(['/']);
        }, error => {
          console.log(error);
          this.cursoForm.reset();
        })
      } else{
        // Agregamos Curso
        console.log(CURSO);
          this._cursoService.guardarCurso(CURSO).subscribe(data => {
          this.toastr.success('El curso fue registrado con exito!', 'Curso Registrado!');
          this.router.navigate(['/']);
        }, error => {
          console.log(error);
          this.cursoForm.reset();
        })
      }
    }
    
    esEditar() {
      if(this.id !== null) {
        this.titulo = 'Editar curso';
        this._cursoService.getCurso(this.id).subscribe(data => {
          this.cursoForm.setValue({
            nombre: data.nombre,
            descripcion: data.descripcion,
            categoria: data.categoria,
            duracion: data.duracion,
            temas: data.temas
          })
        })
      }
    }
  
  }
  