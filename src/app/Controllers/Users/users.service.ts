import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/User/user.model';
import { BaseController } from '../BaseController/BaseController.service';
import { AuthService } from '../Auth/auth.service';



@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseController<User> {

  endpoint = "users"
  constructor(http: HttpClient, AuthService: AuthService) {
    super(http, AuthService);
   }

   putUser(form: User){
    return this.http.put(`${this.rootUrl}/${this.endpoint}/${form.user_id}`,  this.formData,this.getHeaders() )

     //this.put(form.user_id);
   }
   refreshList(){
     this.get().subscribe(res => {
       this.list = res as User[];
     })
   }
}
