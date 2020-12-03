import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { UserInterface} from '../../Models/Auth/user'
import { JwtResponseInterface} from '../../Models/Auth/jwt-response'
import {tap} from 'rxjs/operators';
import {observable, BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER: string= 'https://localhost:44391/api'
  authSubject= new BehaviorSubject(false);
  private token:string;

  constructor(private HttpClient: HttpClient) { }

  formData : UserInterface

login(user: UserInterface): Observable<JwtResponseInterface>{
  return this.HttpClient.post<JwtResponseInterface>(`${this.AUTH_SERVER}/Token`,
  user).pipe(tap(
    (res: JwtResponseInterface)=> {
      if (res){
        //guardar token
        this.saveToken(res.AccessToken, res.ExpiresIn);
      }
    }
  ))
}


logout(){
  this.token= '';
  localStorage.removeItem("ACCESS_TOKEN");
  localStorage.removeItem("EXPIRES_IN");
}

private saveToken(token: string, expiresIn: string): void{
  console.log(token)
  console.log(expiresIn)
  localStorage.setItem("ACCESS_TOKEN", token);
  localStorage.setItem("EXPIRES_IN", expiresIn);
  this.token= token;
  console.log(this.token)
}

private getToken():string{
  if(!this.token){
    this.token= localStorage.getItem("ACCESS_TOKEN");
  }
  console.log("Getken: ", this.token )
  return this.token;
}
}
