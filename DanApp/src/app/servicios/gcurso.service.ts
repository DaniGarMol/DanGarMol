import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EvalE2BD } from '../Modelos/EvalE2BD';

@Injectable({
  providedIn: 'root'
})
export class save_cursoService {

  url= 'http://localhost:3700/api/cursos/'

  constructor(private http: HttpClient) { }

  getCursos(): Observable<any>{
    return this.http.get(this.url)
  }

  eliminarCurso(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarCurso(curso: EvalE2BD): Observable<any> {
    return this.http.post(this.url, curso);
  }

  obtenerCurso(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarCurso(id: string, curso: EvalE2BD): Observable<any>{
    return this.http.put(this.url + id, curso)

  }
}
