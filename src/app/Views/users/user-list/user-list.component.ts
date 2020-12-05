import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {UsersService} from '../../../Controllers/Users/users.service'
import {User} from '../../../Models/User/user.model'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(public service : UsersService,
    private toastr : ToastrService) { }


    UsersList:any=[];
    formatusersList:any=[];

  ngOnInit(): void {
    this.service.refreshList();
    
  }

  
  populateForm(cl: User){
    this.service.formData = Object.assign({},cl);
    
  }


  onDelete(id: number){
    if(confirm('Are you sure to delete this record?')){
      this.service.delete(id).subscribe(res =>{
        this.service.refreshList();
        this.toastr.warning('Deleted Successfully','Client Register');
      })  
    }
    
  }
}
