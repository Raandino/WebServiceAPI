import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inventory } from 'src/app/Models/Inventory/inventory.model';
import { AuthService } from '../Auth/auth.service';
import { BaseController } from '../BaseController/BaseController.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService extends BaseController<Inventory>{
  endpoint = "inventory"
  constructor(http: HttpClient, authService: AuthService) {
    super(http, authService);
  }

  putInventory(form: Inventory) {
    return this.put(form.product_id);
  }

  refreshList() {
    this.get().subscribe(res => {
      this.list = res as Inventory[];
    })
  }
}
