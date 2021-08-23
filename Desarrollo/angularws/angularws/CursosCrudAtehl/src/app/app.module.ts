import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCursoComponent } from './components/add-curso/add-curso.component';
import { CursoDetailsComponent } from './components/curso-details/curso-details.component';
import { CursosListComponent } from './components/cursos-list/cursos-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DescuentoDetailsComponent } from './components/descuento-details/descuento-details.component';
import { DescuentoListComponent } from './components/descuento-list/descuento-list.component';
import { AddDescuentoComponent } from './components/add-descuento/add-descuento.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCursoComponent,
    CursoDetailsComponent,
    CursosListComponent,
    DescuentoDetailsComponent,
    DescuentoListComponent,
    AddDescuentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
