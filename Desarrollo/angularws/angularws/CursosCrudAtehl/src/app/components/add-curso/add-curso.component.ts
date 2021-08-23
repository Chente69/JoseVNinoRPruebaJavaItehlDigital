import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso.model';
import { Modalidad } from 'src/app/models/modalidad.model';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {

  curso: Curso = {
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

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
  }

  saveCurso(): void {
    const data = {
      nombre: this.curso.nombre,
      descripcion: this.curso.descripcion,
      costo: this.curso.costo,
      horas: this.curso.horas,
      dirigidoA: this.curso.dirigidoA,
      modalidad: {nombre: this.curso.modalidad.nombre, descripcion: this.curso.descripcion}

    };

    this.cursoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }



  newCurso(): void {
    this.submitted = false;
    this.curso = {
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
  }
}
