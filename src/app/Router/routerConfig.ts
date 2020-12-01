// routerConfig.ts

import { Routes } from '@angular/router';
import { HomeComponent } from '../Views/home/home.component';
import { AppRoutingModule } from '../Views/app/app-routing.module';
import { AppComponent } from '../Views/app/app.component';
import { ClientComponent }     from '../Views/clients/client/client.component';
import { ClientsComponent }    from '../Views/clients/clients.component';
import { ClientListComponent } from '../Views/clients/client-list/client-list.component';
import { ClientService } from '../Controllers/Client/client.service';
import { RouterModule } from '@angular/router';
import { TokenComponent } from '../Views/token/token.component';
import { InventoryComponent } from '../Views/inventory/inventory.component';
import { OrdersComponent } from '../Views/orders/orders.component';
import { UsersComponent } from '../Views/users/users.component';
import { ProductsComponent } from '../Views/products/products.component';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  { path: 'auth', 
    loadChildren: () => import('../auth-route/auth.module').then(m => m.AuthModule)
    // loadChildren: '../auth/auth.module#AuthModule' 
  },
  { path: 'home', 
    loadChildren: () => import('../home-route/home.module').then(m => m.HomeModule)
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'token',
    component: TokenComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },

  
  
];
export default appRoutes;