import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Descuento } from '../models/descuento.model';



const baseUrl = 'http://localhost:8080/api/descuentos';

@Injectable({
  providedIn: 'root'
})
export class DescuentoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Descuento[]> {
    return this.http.get<Descuento[]>(baseUrl);
  }

  create(data: any): Observable<any> {
    console.log('URL: '+ baseUrl);
    console.log('Datos: '+data);
    return this.http.post(baseUrl, data);
  }
}
