import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export abstract class  BaseController<T> {
    readonly rootUrl = 'http://localhost:63048/api'
    formData: T
    list :T[]
    endpoint : string


    constructor(private http: HttpClient, private authService: AuthService){}

    protected get<T>(){
        return this.http.get<T>(`${this.rootUrl}/${this.endpoint}`,this.getHeaders())
    }

    protected post<T>(){
        return this.http.post(`${this.rootUrl}/${this.endpoint}`, this.formData,this.getHeaders() )
    }
    protected put<T>(id: number){
        return this.http.put(`${this.rootUrl}/${this.endpoint}/${id}`, this.formData,this.getHeaders() )
    }
    protected delete<T>(id: number){
        return this.http.delete(`${this.rootUrl}/${this.endpoint}/${id}`,this.getHeaders() )
    }


    private getHeaders(){//return the token 
    
        let token=this.authService.getToken();
        console.log(token)
          const header = {
      
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${token.AccessToken}`)
          }
        console.log(header)
        return header
      }
}