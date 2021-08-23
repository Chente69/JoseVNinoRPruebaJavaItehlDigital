import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso.model';
import { Modalidad } from 'src/app/models/modalidad.model';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent implements OnInit {

  cursos?: Curso[];

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
  currentIndex = -1;
  tagModalidad = '';

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
	  this.retrieveCursos();
  }
retrieveCursos(): void {
    this.cursoService.getAll()
      .subscribe(
        data => {
          this.cursos = data;
          console.log(data);

        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveCursos();
    this.currentCurso = {
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
    this.currentIndex = -1;
  }

  setActiveCurso(curso: Curso, index: number): void {
    this.currentCurso = curso;
    this.currentIndex = index;
    console.log('setActiveCurso');
    console.log(curso);
  }

  removeAllCursos(): void {
    this.cursoService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }
}
