import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-portfolio',
  templateUrl: '../../modules/'+environment.moduleName+'/component-templates/portfolio-template/portfolio.component.html',
  styleUrls: ['../../modules/'+environment.moduleName+'/component-templates/portfolio-template/portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
