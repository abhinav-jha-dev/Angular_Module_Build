import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment'
import { BuildAuthModel } from '../models/build-auth.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppPortfolioService{
  
  baseUrl : string = environment.baseUri;
  constructor(private http:HttpClient) { }


  validateBuild(): BuildAuthModel{
    let result: BuildAuthModel;
    this.http.get<BuildAuthModel>(this.baseUrl+'/api/v1/Task/mongo').subscribe(res=>{
      result= res;
    });
    return result;
  }
}
