import { Injectable } from '@angular/core';
import { Measure } from '../../Models/Measure/measure.model';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { TokenService } from '../../Views/token/token.service';


@Injectable({
  providedIn: 'root'
})
export class MeasureService {

  formData : Measure
  list : Measure[];
  readonly rootURL = "https://localhost:44391/api"
  constructor(private http : HttpClient,
    private TokenService : TokenService) { }

  


postMeasure (form : Measure){
  
  const test =  this.http.post(this.rootURL+'/measures ',this.formData,this.getHeaders());
  console.log(test);
  return test;
}

putMeasure (form : Measure){
  return this.http.put(this.rootURL+'/measures/ '+form.measure_id,this.formData,this.getHeaders());
}

deleteMeasure(id :number){
  return this.http.delete(this.rootURL+'/measures/ '+id,this.getHeaders());
}


refreshList (){
  this.http.get(this.rootURL+'/measures',this.getHeaders())
  .toPromise().then(res => this.list=res as Measure[]);
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
