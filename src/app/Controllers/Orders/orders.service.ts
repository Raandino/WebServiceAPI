import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
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
    return this.http.put(`${this.rootUrl}/${this.endpoint}/?order_id=${form.order_id}`,form, this.getHeaders())
  }
  
  refreshList(){
    this.get().subscribe(res => {
      this.list = res as Order[];
    })
  }

  getDetails(order_id:number){
    return this.http.get(`${this.rootUrl}/orderdetail`, this.getHeaders()).pipe(map((res)=>{
      const orderDetails = res as any[] 
      console.log(orderDetails)
      return orderDetails.filter(value => value.order_id===order_id)
    }))
  }

  createDetails(data){
    return this.http.post(`${this.rootUrl}/orderdetail`, data,this.getHeaders())
  }
  updateDetails(data){
    return this.http.put(`${this.rootUrl}/orderdetail/?order_detail=${data.order_detail}`, data,this.getHeaders())
  }


}
