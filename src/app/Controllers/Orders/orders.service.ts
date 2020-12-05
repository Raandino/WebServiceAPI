import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Order } from 'src/app/Models/Order/order.model';
import { AuthService } from '../Auth/auth.service';
import { BaseController } from '../BaseController/BaseController.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends BaseController<Order> {
  endpoint = "orden"
  formChange = new Subject<Order>()
  constructor(http: HttpClient, authService: AuthService) {
    super(http, authService);
  }
  post(data: any){
    return super.post(data)
  }
  putOrder(form: Order){
    return this.put(form.order_id);
  }
  
  refreshList(){
    this.get().subscribe(res => {
      this.list = res as Order[];
    })
  }
}
