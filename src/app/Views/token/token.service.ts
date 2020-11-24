import { Injectable } from '@angular/core';
import { Token } from '../../Models/Token/token.model';
import {HttpClient} from '@angular/common/http'
import { catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  tokenInfo: {
        AccessToken?:string 
        check?: string
  }
  formData : Token
  readonly rootURL = "https://localhost:44328/api"
  constructor(private http : HttpClient,
              ) { 
                this.tokenInfo = {
                  AccessToken: ''
                
                }
              }

  
getToken(){
  return this.tokenInfo;
}

postToken (form : Token){
  const test = this.http.post(this.rootURL+'/Token ',this.formData).pipe(tap(
    data=>{
      
      this.tokenInfo = <object> data;
      console.log(this.tokenInfo.AccessToken);  
    } 

  ));
  return test;
}
}
