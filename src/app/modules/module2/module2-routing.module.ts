import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Module2Component } from './module2.component';
import { PortfolioComponent } from 'src/app/plugincomponents/portfoliocomponent/portfolio.component';
import { RouteGuard } from 'src/app/authguard/route.guard';


const routes: Routes = [{
  path: "", component: PortfolioComponent,canLoad:[RouteGuard]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
