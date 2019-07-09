import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from 'src/app/plugincomponents/aboutcomponent/about.component';
import { PortfolioComponent } from 'src/app/plugincomponents/portfoliocomponent/portfolio.component';



@NgModule({
  declarations: [AboutComponent,PortfolioComponent],
  imports: [
    CommonModule
  ],
  exports: [AboutComponent,PortfolioComponent]
})
export class SharedmoduleModule { }
