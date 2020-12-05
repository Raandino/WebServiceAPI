import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService} from 'src/app/Controllers/Users/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public service: UsersService) { }

  ngOnInit(): void {
  }

//   resetForm (form? : NgForm){
//     if(form != null){
//       form.resetForm();
//     }
//     this.service.formData ={
      
//       name:'',
//       phone:null,
//       email: '',
//       username:'',
//       password_user:'',
//       type_user_id:null,
//       date_created:null,
// }
//     }

}
