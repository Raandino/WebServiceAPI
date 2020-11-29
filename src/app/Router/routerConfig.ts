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
import { AddressesComponent } from '../Views/addresses/addresses.component';
import { MeasuresComponent } from '../Views/measures/measures.component';
import { TokenComponent } from '../Views/token/token.component';
import {LoginComponent } from '../Views/login/login.component'

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'login', 
    component: LoginComponent 
  },
  { path: 'home', 
    component: HomeComponent 
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'addresses',
    component: AddressesComponent
  },
  {
    path: 'measures',
    component: MeasuresComponent
  },
  {
    path: 'token',
    component: TokenComponent
  }
  
  
];
export default appRoutes;