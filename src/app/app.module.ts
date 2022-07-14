import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarCursosComponent } from './atualizar-cursos/atualizar-cursos.component';
import { ConsultarCursosComponent } from './consultar-cursos/consultar-cursos.component';
import { InserirCursosComponent } from './inserir-cursos/inserir-cursos.component';

const routes: Routes = [
  {path: 'inserir-cursos', component: InserirCursosComponent},
  {path: 'consultar-cursos', component: ConsultarCursosComponent},
  {path: 'atualizar-cursos/:id', component: AtualizarCursosComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AtualizarCursosComponent,
    ConsultarCursosComponent,
    InserirCursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
