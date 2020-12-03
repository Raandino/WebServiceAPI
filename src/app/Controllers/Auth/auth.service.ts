import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { UserInterface } from '../../Models/Auth/user'
import { JwtResponseInterface } from '../../Models/Auth/jwt-response'
import { tap } from 'rxjs/operators';
import { observable, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  refreshCycle: number
  TOKEN_EXPIRE_CHECK = 3500
  AUTH_SERVER: string = 'https://localhost:44391/api'
  authSubject = new BehaviorSubject(false);
  private token: JwtResponseInterface;

  constructor(private HttpClient: HttpClient) { }

  formData: UserInterface

  login(user: UserInterface): Observable<JwtResponseInterface> {
    return this.HttpClient.post<JwtResponseInterface>(`${this.AUTH_SERVER}/Token`,
      user).pipe(tap(
        (res: JwtResponseInterface) => {
          if (res) {
            //guardar token
            this.saveToken(res);
          }
        }
      ))
  }


  logout() {
    this.token = null;
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  private saveToken(jwt: JwtResponseInterface): void {

    localStorage.setItem("andino_shop_refresh", JSON.stringify(jwt.RefreshToken));
    this.token = jwt;
    this.refreshCycle = window.setInterval(() => {
      this.refreshToken().subscribe();
    }, this.TOKEN_EXPIRE_CHECK)
  }

  public getToken(): JwtResponseInterface {
    return this.token;
  }

  public refreshToken() {
    const refreshToken = localStorage.getItem("andino_shop_refresh");

    return this.HttpClient.post<JwtResponseInterface>(`${this.AUTH_SERVER}/Refresh`, {
      refreshToken: refreshToken
    }).pipe(tap((res: JwtResponseInterface) => {
      if (res) this.saveToken(res)
    }))
  }
}
