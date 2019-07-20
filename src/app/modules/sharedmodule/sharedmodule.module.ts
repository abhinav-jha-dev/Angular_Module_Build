import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from 'src/app/plugincomponents/aboutcomponent/about.component';
import { PortfolioComponent } from 'src/app/plugincomponents/portfoliocomponent/portfolio.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from 'src/app/services/http-error.interceptor';



@NgModule({
  declarations: [AboutComponent,PortfolioComponent],
  imports: [
    CommonModule
  ],
  exports: [AboutComponent,PortfolioComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class SharedmoduleModule { }
