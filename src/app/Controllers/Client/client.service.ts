import { Injectable } from '@angular/core';
import { Client } from '../../Models/Client/client.model';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {AuthService} from '../Auth/auth.service'
import { BaseController } from '../BaseController/BaseController.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends BaseController<Client>{

  endpoint = "clients"

  constructor( http : HttpClient,
               AuthService : AuthService) {

                super(http, AuthService)
               }


  postClient (form : Client){
    // return this.http.post(this.rootURL+'/clients ',this.formData,this.getHeaders());
    return this.post()
  }

  putClient (form : Client){
    return this.put(form.client_id);
  }

  deleteClient(id :number){
    return this.delete(id);
  }

  // refreshList (){
  //   this.http.get(this.rootURL+'/clients',this.getHeaders())
    
  //   .toPromise().then(res => this.list=res as Client[]);
  // }


  //   postClient (form : Client){
  //   return this.http.post(this.rootURL+'/clients ',this.formData);
    
  // }

  // putClient (form : Client){
  //   return this.http.put(this.rootURL+'/clients/ '+form.client_id,this.formData);
  // }

  // deleteClient(id :number){
  //   return this.http.delete(this.rootURL+'/clients/ '+id);
  // }

  refreshList (){
    // this.http.get(this.rootURL+'/clients', this.getHeaders())
    // .toPromise().then(res => this.list=res as Client[]);
    return this.get().subscribe(res => {
      this.list = res
    })
  }

  
  // getHeaders(){//return the token 
    
  //   let token=this.AuthService.getToken();
  //   console.log(token)
  //     const header = {
  
  //       headers: new HttpHeaders()
  //         .set('Authorization',  `Bearer ${token.AccessToken}`)
  //     }
  //   console.log(header)
  //   return header
  // }
}


