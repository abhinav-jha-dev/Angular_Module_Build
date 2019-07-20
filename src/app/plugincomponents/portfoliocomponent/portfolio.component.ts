import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {AppPortfolioService} from '../../services/appportfolio.service'

@Component({
  selector: 'app-portfolio',
  templateUrl: `../../modules/${environment.moduleName}/component-templates/portfolio-template/portfolio.component.html`,
  styleUrls: [`../../modules/${environment.moduleName}/component-templates/portfolio-template/portfolio.component.scss`]
})
export class PortfolioComponent implements OnInit {
  UserData :any;
  constructor(private commonService: AppPortfolioService) { }

  ngOnInit() {
    console.log(this.commonService.validateBuild()) ;
  }

}
