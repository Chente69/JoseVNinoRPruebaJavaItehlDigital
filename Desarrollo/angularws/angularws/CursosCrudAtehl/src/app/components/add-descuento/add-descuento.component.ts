import { Component, OnInit } from '@angular/core';
import { DescuentoService } from 'src/app/services/descuento.service';
import { Curso } from 'src/app/models/curso.model';
import { Modalidad } from 'src/app/models/modalidad.model';
import { Descuento } from 'src/app/models/descuento.model';
import {CursoService} from "../../services/curso.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-descuento',
  templateUrl: './add-descuento.component.html',
  styleUrls: ['./add-descuento.component.css']
})
export class AddDescuentoComponent implements OnInit {
  descuento:Descuento ={
    nombre: '',
    curso: {nombre: '',costo:'',descripcion:'',horas: '',dirigidoA: '',modalidad:{nombre: '',descripcion:''}},
    pais: '',
    descuento: '',
    fechaFinal: '',
  };
  currentCurso: Curso = {
    nombre: '',
    costo: '',
    descripcion: '',
    horas: '',
    dirigidoA: '',
    modalidad: {
      nombre: '',
      descripcion: '',
    }
  };

  submitted = false;
  constructor(private descuentoService:DescuentoService,
  private cursoService: CursoService,
  private route: ActivatedRoute,
  private router: Router
  ) { }

  ngOnInit(): void {
    this.getCurso(this.route.snapshot.params.id);
  }
  getCurso(id: string): void {
    this.cursoService.get(id)
      .subscribe(
        data => {
          this.currentCurso = data;
          console.log('Datos del Curso para descuento: ');
          console.log(data);
          console.log('Datos del Curso activo para descuento: ');
          console.log(this.currentCurso);
        },
        error => {
          console.log(error);
        });
  }

  saveDescuento(): void {
    const data = {
      nombre: this.descuento.nombre,
      curso: {
        id: this.currentCurso.id,
        nombre:this.currentCurso.nombre,
        costo:this.currentCurso.costo,
        descripcion:this.currentCurso.descripcion,
        horas:this.currentCurso.horas,
        dirigidoA:this.currentCurso.dirigidoA,
        modalidad:{id:this.currentCurso.modalidad.id,nombre:this.currentCurso.modalidad.nombre,descripcion:this.currentCurso.descripcion}},
        pais: this.descuento.pais,
        descuento: this.descuento.descuento,
        fechaFinal: this.descuento.fechaFinal,
    };
    console.log('Datos Descuento: ');
    console.log(data);
    this.descuentoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }


  newDescuento(): void {
    this.submitted = false;
    this.descuento={
      nombre: '',
      curso: {
        nombre: this.currentCurso.nombre,
        costo:this.currentCurso.costo,
        descripcion:this.currentCurso.descripcion,
        horas: this.currentCurso.horas,
        dirigidoA: this.currentCurso.dirigidoA,
        modalidad:{nombre: this.currentCurso.modalidad.nombre,descripcion:this.currentCurso.modalidad.descripcion}},
      pais: '',
      descuento: '',
      fechaFinal: ''
    };
    console.log('Datos Descuento: ');
    console.log(this.descuento);
  }
}
