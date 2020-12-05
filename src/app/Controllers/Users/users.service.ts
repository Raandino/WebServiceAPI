import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/User/user.model';
import { BaseController } from '../BaseController/BaseController.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseController<User> {

  endpoint = "users"
  constructor(http: HttpClient, authService) {
    super(http, authService);
   }

   putUser(form: User){
     this.put(form.user_id);
   }
   refreshList(){
     this.get().subscribe(res => {
       this.list = res as User[];
     })
   }
}
