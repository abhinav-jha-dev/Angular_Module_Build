import { NgModule } from '@angular/core';
import { Module2Component } from './module2.component';
import { BrowserModule } from '@angular/platform-browser';
import { Module2RoutingModule } from './module2-routing.module';
import { PortfolioComponent } from 'src/app/plugincomponents/portfoliocomponent/portfolio.component';



@NgModule({
  declarations: [Module2Component,PortfolioComponent],
  imports: [
    BrowserModule,
    Module2RoutingModule
  ],
  providers: [],
  bootstrap: [Module2Component]
})
export class Module2Module { }
