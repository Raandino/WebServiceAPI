import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/Controllers/Orders/orders.service';
import { Order } from 'src/app/Models/Order/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  selected_id = 0
  constructor(public service: OrdersService) { }

  ngOnInit(): void {
    this.service.refreshList()
  }

  populateForm(order: Order){
    this.service.formData = order
  }


}
