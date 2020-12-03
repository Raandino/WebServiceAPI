import { Injectable } from '@angular/core';
import { Client } from '../../Models/Client/client.model';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { TokenService } from '../../Views/token/token.service';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  formData : Client
  list : Client[];
  readonly rootURL = "https://localhost:44391/api"

  constructor(private http : HttpClient,
              private TokenService : TokenService) { }


  postClient (form : Client){
    return this.http.post(this.rootURL+'/clients ',this.formData,this.getHeaders());
    
  }

  putClient (form : Client){
    return this.http.put(this.rootURL+'/clients/ '+form.client_id,this.formData,this.getHeaders());
  }

  deleteClient(id :number){
    return this.http.delete(this.rootURL+'/clients/ '+id,this.getHeaders());
  }


  // refreshList (){
  //   this.http.get(this.rootURL+'/clients',this.getHeaders())
  //   .toPromise().then(res => this.list=res as Client[]);
  // }
  
  refreshList (){
    this.http.get(this.rootURL+'/clients',this.getHeaders())
    
    .toPromise().then(res => this.list=res as Client[]);
  }


  

  


  getHeaders(){//return the token 
    
    let token=this.TokenService.getToken();
    console.log(token)
      const header = {
  
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${token}`)
      }
    console.log(header)
    return header
  }
}


