import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './Views/app/app-routing.module';
import { AppComponent } from './Views/app/app.component';
import { ClientComponent } from './Views/clients/client/client.component';
import { ClientsComponent } from './Views/clients/clients.component';
import { ClientListComponent } from './Views/clients/client-list/client-list.component';

import { ClientService } from './Controllers/Client/client.service';
import { HomeComponent } from './Views/home/home.component';
import { RouterModule } from '@angular/router';
import appRoutes from './Router/routerConfig';

// For MDB Angular Free
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SidebarComponent } from './Views/sidebar/sidebar.component';
import { LoginComponent } from './Views/login/login.component';
import { InventoryComponent } from './Views/inventory/inventory.component';
import { UsersComponent } from './Views/users/users.component';
import { OrdersComponent } from './Views/orders/orders.component';
import { ProductsComponent } from './Views/products/products.component';
import { InventoryListComponent } from './Views/inventory/inventory-list/inventory-list.component';
import { ProductComponent } from './Views/products/product/product.component';
import { UserComponent } from './Views/users/user/user.component';
import { UserListComponent } from './Views/users/user-list/user-list.component';
import { OrderComponent } from './Views/orders/order/order.component';
import { OrderListComponent } from './Views/orders/order-list/order-list.component';
import { InventoryItemComponent } from './Views/inventory/inventory-item/inventory-item.component';

@NgModule({
  declarations: [
    AppComponent,
  
    ProductComponent,
    UserListComponent,
    OrderComponent,
    OrderListComponent,
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    RouterModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule,
  ],
  providers: [ClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
