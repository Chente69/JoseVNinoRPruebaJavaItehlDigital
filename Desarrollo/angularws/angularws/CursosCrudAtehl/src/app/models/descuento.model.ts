import { Modalidad } from 'src/app/models/modalidad.model';
import { Curso } from 'src/app/models/curso.model';

  export class Descuento {
  id?: any;
  nombre?:string;
  curso: Curso ={nombre: '',costo:'',descripcion:'',horas: '',dirigidoA: '',modalidad:{}};
  pais?: string;
  descuento?: string;
  fechaFinal?: string;
}
