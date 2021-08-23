import { Component, OnInit } from '@angular/core';
import { DescuentoService } from 'src/app/services/descuento.service';
import { Curso } from 'src/app/models/curso.model';
import { Modalidad } from 'src/app/models/modalidad.model';
import { Descuento } from 'src/app/models/descuento.model';


@Component({
  selector: 'app-descuento-list',
  templateUrl: './descuento-list.component.html',
  styleUrls: ['./descuento-list.component.css']
})
export class DescuentoListComponent implements OnInit {
  descuentos?: Descuento[];
  currentDescuento:Descuento ={
    nombre: '',
    curso: {nombre: '',costo:'',descripcion:'',horas: '',dirigidoA: '',modalidad:{}},
    pais: '',
    descuento: '',
    fechaFinal: '',
};

  currentIndex = -1;
  title = '';


  constructor(private descuentoService:DescuentoService) { }

  ngOnInit(): void {
    this.retrieveDescuentos();
  }
  retrieveDescuentos(): void {
    this.descuentoService.getAll()
      .subscribe(
        data => {
          this.descuentos = data;
          console.log('Datos de descuentos: '+data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveDescuentos();
    this.currentDescuento = {

      nombre: '',
      curso: {nombre: '',costo:'',descripcion:'',horas: '',dirigidoA: '',modalidad:{}},
      pais: '',
      descuento: '',
      fechaFinal: '',
    };
    this.currentIndex = -1;
  }

  setActiveDescuento(descuento: Descuento, index: number): void {
    this.currentDescuento = descuento;
    this.currentIndex = index;
  }
}
