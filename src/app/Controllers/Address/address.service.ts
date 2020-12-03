import { Injectable } from '@angular/core';
import { Address } from '../../Models/Address/address.model';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { TokenService } from '../../Views/token/token.service';


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  formData : Address
  list : Address[];
  readonly rootURL = "https://localhost:44391/api"
  constructor(private http : HttpClient,
    private TokenService : TokenService) { }


postAddress(form : Address){
  return this.http.post(this.rootURL+'/addresses ',this.formData,this.getHeaders());
}

putAddress (form : Address){
  return this.http.put(this.rootURL+'/addresses/ '+form.address_id,this.formData,this.getHeaders());
}

deleteAddress(id :number){
  return this.http.delete(this.rootURL+'/addresses/ '+id,this.getHeaders());
}


refreshList (){
  this.http.get(this.rootURL+'/addresses',this.getHeaders())
  .toPromise().then(res => this.list=res as Address[]);
}

getHeaders(){
  let token=this.TokenService.getToken();
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${token.AccessToken}`)
    }
  return header
}
}
