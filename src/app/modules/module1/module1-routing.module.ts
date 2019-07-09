import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Module1Component } from './module1.component';
import { AboutComponent } from 'src/app/plugincomponents/aboutcomponent/about.component';


const routes: Routes = [{
  path: "", component: AboutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
