import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Module2Component } from './module2.component';
import { PortfolioComponent } from 'src/app/plugincomponents/portfoliocomponent/portfolio.component';


const routes: Routes = [{
  path: "", component: Module2Component
},
{
  path: "portfolio", component: PortfolioComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
