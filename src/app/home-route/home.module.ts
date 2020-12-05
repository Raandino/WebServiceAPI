import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent } from '../Views/home/home.component'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HomeRoutingModule} from './home-routing.module'
import {SidebarComponent} from '../Views/sidebar/sidebar.component'

import {ClientsComponent} from '../Views/clients/clients.component'
import {ClientListComponent} from '../Views/clients/client-list/client-list.component'
import {ClientComponent} from '../Views/clients/client/client.component'
import { InventoryComponent } from '../Views/inventory/inventory.component';
import { UserComponent } from '../Views/users/user/user.component';
import { UsersComponent } from '../Views/users/users.component';
import { OrdersComponent } from '../Views/orders/orders.component';
import { ProductComponent } from '../Views/products/product/product.component';
import { ProductsComponent } from '../Views/products/products.component';
import { ProductListComponent } from '../Views/products/product-list/product-list.component';
import { InventoryListComponent } from '../Views/inventory/inventory-list/inventory-list.component';
import { OrderListComponent } from '../Views/orders/order-list/order-list.component';
import { OrderComponent } from '../Views/orders/order/order.component';
import {InventoryItemComponent} from '../Views/inventory/inventory-item/inventory-item.component';
import { UserListComponent } from '../Views/users/user-list/user-list.component';



@NgModule({
  declarations: [HomeComponent,
                  SidebarComponent,
                  ClientListComponent,
                  ClientsComponent,
                  ClientComponent,
                  InventoryComponent,
                  InventoryListComponent,
                  InventoryItemComponent,
                  UsersComponent,
                  UserListComponent,
                  OrdersComponent,
                  OrderComponent,
                  OrderListComponent,
                  ProductsComponent,
                  ProductListComponent,
                  ProductComponent
                ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: []
})
export class HomeModule { }
