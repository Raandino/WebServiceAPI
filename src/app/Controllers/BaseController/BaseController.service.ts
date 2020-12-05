import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export abstract class  BaseController<T> {
    readonly rootUrl = 'http://localhost:63048/api'
    _formData: T
    list :T[]
    endpoint : string
    formChange: Subject<T> 


    constructor(public http: HttpClient, private authService: AuthService){}

    public get<T>(){
        return this.http.get<T>(`${this.rootUrl}/${this.endpoint}`,this.getHeaders())
    }

    public post(data?:any){
      const postData = data ? data : this.formData 
        return this.http.post(`${this.rootUrl}/${this.endpoint}`,postData ,this.getHeaders() )
    }
    public put(id: number){
        return this.http.put(`${this.rootUrl}/${this.endpoint}/${id}`,  this.formData,this.getHeaders() )
    }
    public delete(id: number){
        return this.http.delete(`${this.rootUrl}/${this.endpoint}/${id}`,this.getHeaders() )
    }
    public retrieve(id){
      return this.http.get<T>(`${this.rootUrl}/${this.endpoint}/${id}`,this.getHeaders())
    }


    public getHeaders(){//return the token 
    
        let token=this.authService.getToken();
        console.log(token)
          const header = {
      
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${token.AccessToken}`)
          }
        console.log(header)
        return header
      }
  set formData(val:T){
    this._formData = val
    if(this.formChange) this.formChange.next(this._formData)
  }
  get formData() {
    return this._formData
  }
}