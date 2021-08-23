import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosListComponent } from './components/cursos-list/cursos-list.component';
import { CursoDetailsComponent } from './components/curso-details/curso-details.component';
import { AddCursoComponent } from './components/add-curso/add-curso.component';
import { DescuentoListComponent } from './components/descuento-list/descuento-list.component';
import { AddDescuentoComponent } from './components/add-descuento/add-descuento.component';

const routes: Routes = [
  { path: '', redirectTo: 'cursos', pathMatch: 'full' },
  { path: 'cursos', component: CursosListComponent },
  { path: 'cursos/:id', component: CursoDetailsComponent },
  { path: 'add', component: AddCursoComponent },
  { path: 'addDescuento/:id', component: AddDescuentoComponent },
  { path: 'descuentos', component: DescuentoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
