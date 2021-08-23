import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso.model';
import { Modalidad } from 'src/app/models/modalidad.model';

@Component({
  selector: 'app-curso-details',
  templateUrl: './curso-details.component.html',
  styleUrls: ['./curso-details.component.css']
})
export class CursoDetailsComponent implements OnInit {
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

  message = '';

  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getCurso(this.route.snapshot.params.id);
  }
  getCurso(id: string): void {
    this.cursoService.get(id)
      .subscribe(
        data => {
          this.currentCurso = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateCurso(): void {
    this.message = '';

    this.cursoService.update(this.currentCurso.id, this.currentCurso)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'Este Curos se Actualizó Exitosamente!';
        },
        error => {
          console.log(error);
        });
  }
  deleteCurso(): void {
    this.cursoService.delete(this.currentCurso.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/cursos']);
        },
        error => {
          console.log(error);
        });
  }
}
