import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso.model';


const baseUrl = 'http://localhost:8080/api/cursos';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Curso[]> {
    return this.http.get<Curso[]>(baseUrl);
  }

  get(id: any): Observable<Curso> {
    console.log(`${baseUrl}/${id}`);
    return this.http.get<Curso>(`${baseUrl}/${id}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete (`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  create(data: any): Observable<any> {
    console.log(baseUrl);
    console.log(data);
    return this.http.post(baseUrl, data);
  }

}
