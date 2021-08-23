import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso.model';
import { Modalidad } from 'src/app/models/modalidad.model';
import { Descuento } from 'src/app/models/descuento.model';

@Component({
  selector: 'app-descuento-details',
  templateUrl: './descuento-details.component.html',
  styleUrls: ['./descuento-details.component.css']
})
export class DescuentoDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
