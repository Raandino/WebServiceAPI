import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from 'src/app/Controllers/Address/address.service';
import { Address } from 'src/app/Models/Address/address.model';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  constructor(public service : AddressService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(cl: Address){
    this.service.formData = Object.assign({},cl);
  }


  onDelete(id: number){
    if(confirm('Are you sure to delete this record?')){
      this.service.deleteAddress(id).subscribe(res =>{
        this.service.refreshList();
        this.toastr.warning('Deleted Successfully','Address Register');
      })  
    }
    
  }

}
