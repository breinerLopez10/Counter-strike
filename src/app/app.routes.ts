
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModeloComponent } from './modelo/modelo.component';
import { DatosComponent } from './datos/datos.component';

export const routes: Routes = [


    { path: 'home', component:  HomeComponent}, 
    
    { path: 'datos', component:  DatosComponent}, 
    
    { path: 'modelo', component:  ModeloComponent}, 
    
    { path: '', redirectTo: 'home',  pathMatch: 'full', },

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
