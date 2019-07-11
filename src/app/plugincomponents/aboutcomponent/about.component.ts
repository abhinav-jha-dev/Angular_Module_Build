import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-about',
  templateUrl: '../../modules/'+environment.moduleName+'/component-templates/about-template/about.component.html',
  styleUrls: ['../../modules/'+environment.moduleName+'/component-templates/about-template/about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
