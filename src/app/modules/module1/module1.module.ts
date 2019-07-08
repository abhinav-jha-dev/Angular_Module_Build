import { NgModule } from '@angular/core';
import { Module1Component } from './module1.component';
import { BrowserModule } from '@angular/platform-browser';
import { Module1RoutingModule } from './module1-routing.module';
import { AboutComponent } from 'src/app/plugincomponents/aboutcomponent/about.component';
import { PortfolioComponent } from 'src/app/plugincomponents/portfoliocomponent/portfolio.component';

@NgModule({
  declarations: [Module1Component,AboutComponent],
  imports: [
    BrowserModule,
    Module1RoutingModule
  ],
  providers: [],
  bootstrap: [Module1Component]
})
export class Module1Module { }
