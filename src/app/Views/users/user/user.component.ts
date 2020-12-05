import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersService} from 'src/app/Controllers/Users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public service : UsersService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm (form? : NgForm){
    if(form != null){
      form.resetForm();
    }
    this.service.formData ={
      name:'',
      phone:null,
      email: '',
      username:'',
      password_user:'',
      type_user_id:null,
      date_created:null,
      rol: ''
}
    }

    onSubmit(form: NgForm) {
      if (form.value.user_id == null) {
        this.insertRecord(form);
      } else {
        this.updateRecord(form);
      }
    }
  
    updateRecord(form : NgForm){
      this.service.putUser(form.value).subscribe(res =>{
        this.toastr.info('Updated Successfully','User Register');
        this.service.refreshList();
      })
    }
  
  
    insertRecord(form : NgForm){
      
      this.service.post().subscribe(res =>{
        this.toastr.success('Inserted Successfully','User Register');
        this.resetForm(form)
        this.service.refreshList();
        
      })
    }
}
