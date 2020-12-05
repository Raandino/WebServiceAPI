import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { InventoryService} from 'src/app/Controllers/Inventory/inventory.service';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.css']
})
export class InventoryItemComponent implements OnInit {

  constructor(public service : InventoryService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm (form? : NgForm){
    if(form != null){
      form.resetForm();
    }
    this.service.formData ={
      Producto: '',
      username: '',
      quantity: null,
      measure: '',
      date_created: null,
      date_modify:null,
      price: null
}
    }

    onSubmit(form: NgForm) {
      if (form.value.inventory_id == null) {
        this.insertRecord(form);
      } else {
        this.updateRecord(form);
      }
    }
  
    updateRecord(form : NgForm){
      this.service.putInventory(form.value).subscribe(res =>{
        this.toastr.info('Updated Successfully','Client Register');
        this.service.refreshList();
      })
    }
  
  
    insertRecord(form : NgForm){
      
      this.service.post().subscribe(res =>{
        this.toastr.success('Inserted Successfully','Client Register');
        this.resetForm(form)
        this.service.refreshList();
        
      })
    }

  }


  


