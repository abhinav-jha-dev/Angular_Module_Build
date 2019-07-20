import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs'; 
import {AppPortfolioService} from '../services/appportfolio.service'


@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanLoad {
  
  constructor(public auth: AppPortfolioService, public router: Router) {}

  canLoad(): boolean {
   
    return true;
  }

}
