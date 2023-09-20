import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gusuario } from '../Models/gusuario';

@Injectable({
  providedIn: 'root'
})
export class GusuarioService {

  url= 'http://127.0.0.1:3700/api/usuario/'

  constructor(private http: HttpClient) { }

  getUsuario(): Observable<any>{
    return this.http.get(this.url)
  }

  eliminarUsuario(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarUsuario(usuario: Gusuario): Observable<any> {
    return this.http.post(this.url, usuario);
  }

  obtenerUsuario(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarUsuario(id: string, usuario: Gusuario): Observable<any>{
    return this.http.put(this.url + id, usuario)

  }
}
