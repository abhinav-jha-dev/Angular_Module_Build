import { NgModule } from '@angular/core';
import { Module2Component } from './module2.component';
import { BrowserModule } from '@angular/platform-browser';
import { Module2RoutingModule } from './module2-routing.module';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from 'src/app/services/http-error.interceptor';



@NgModule({
  declarations: [Module2Component],
  imports: [
    BrowserModule,
    SharedmoduleModule,
    Module2RoutingModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [Module2Component]
})
export class Module2Module { }
