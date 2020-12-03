import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/Controllers/Client/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(public service : ClientService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm (form? : NgForm){
    if(form != null){
      form.resetForm();
    }
    this.service.formData ={
      
      date_created: new Date(),
      email:'',
      name:'',
      password_client: '',
      phone: null,
    }
  }


  onSubmit(form: NgForm) {
    if (form.value.client_id == null) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  updateRecord(form : NgForm){
    this.service.putClient(form.value).subscribe(res =>{
      this.toastr.info('Updated Successfully','Client Register');
      this.service.refreshList();
    })
  }


  insertRecord(form : NgForm){
    
    this.service.postClient(form.value).subscribe(res =>{
      this.toastr.success('Inserted Successfully','Client Register');
      this.resetForm(form)
      this.service.refreshList();
      
    })
  }
}
