import { NgModule } from '@angular/core';
import { Module1Component } from './module1.component';
import { BrowserModule } from '@angular/platform-browser';
import { Module1RoutingModule } from './module1-routing.module';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

@NgModule({
  declarations: [Module1Component],
  imports: [
    BrowserModule,
    SharedmoduleModule,
    Module1RoutingModule
  ],
  providers: [],
  bootstrap: [Module1Component]
})
export class Module1Module { }
