import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'; 

import { AddressService } from 'src/app/Controllers/Address/address.service';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(public service : AddressService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm (form? : NgForm){
    if(form != null){
      form.resetForm();
    }
    this.service.formData ={
      address_1: '',
      address_2:'',
      city:'',
      client_id: null,
      status: '',
    }
  }


  onSubmit (form : NgForm){
    if (form.value.address_id==null){
      this.insertRecord(form);
    }else{
      this.updateRecord(form);
    }
  }

  updateRecord(form : NgForm){
    this.service.putAddress(form.value).subscribe(res =>{
      this.toastr.info('Updated Successfully','Address Register');
      this.resetForm(form)
      this.service.refreshList();
    })
  }


  insertRecord(form : NgForm){
    this.service.postAddress(form.value).subscribe(res =>{
      this.toastr.success('Inserted Successfully','Address Register');
      this.resetForm(form)
      this.service.refreshList();
    })
  }
}
