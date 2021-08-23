import { Modalidad } from 'src/app/models/modalidad.model';

export class Curso {
  id?: any;
  nombre?: string;
  costo?: string;
  descripcion?: string;
  horas?: string;
  dirigidoA?: string;
  modalidad:Modalidad={};
}
