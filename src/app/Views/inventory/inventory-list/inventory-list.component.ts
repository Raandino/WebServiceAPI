import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {InventoryService} from '../../../Controllers/Inventory/inventory.service'
import {Inventory} from '../../../Models/Inventory/inventory.model'

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  constructor(public service : InventoryService,
    private toastr : ToastrService) { }


    InventorytList:any=[];
    formatinventoryList:any=[];

  ngOnInit(): void {
    this.service.refreshList();
    
  }

  
  populateForm(cl: Inventory){
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
