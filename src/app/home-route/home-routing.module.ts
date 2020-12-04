import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import {SidebarComponent } from '../Views/sidebar/sidebar.component'
import {InfoComponent} from '../Views/info/info.component'
import {ClientListComponent} from '../Views/clients/client-list/client-list.component'
import {ClientsComponent} from '../Views/clients/clients.component'
import { InventoryComponent } from '../Views/inventory/inventory.component';
import { UsersComponent } from '../Views/users/users.component';
import { OrdersComponent } from '../Views/orders/orders.component';
import { ProductsComponent } from '../Views/products/products.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SidebarComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
