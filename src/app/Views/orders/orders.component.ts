import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/Controllers/Orders/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(public service: OrdersService) { }

  ngOnInit(): void {
  }

  resetForm(){
    this.service.formData = {
      date_order : new Date(),
      client_id : 0,
      address_id: 0, 
      subtotal: 0,
      tax_total: 0,
      status_id: 1,
      total: 0,
      delivery: 0,
    }
  }

}
