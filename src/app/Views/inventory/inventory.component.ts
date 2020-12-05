import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InventoryService} from 'src/app/Controllers/Inventory/inventory.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(public service : InventoryService) { }

  ngOnInit(): void {
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

}
