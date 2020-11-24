// routerConfig.ts

import { Routes } from '@angular/router';
import { HomeComponent } from '../Views/home/home.component';
import { AppRoutingModule } from '../Views/Default/app-routing.module';
import { AppComponent } from '../Views/Default/app.component';
import { ClientComponent }     from '../Views/clients/client/client.component';
import { ClientsComponent }    from '../Views/clients/clients.component';
import { ClientListComponent } from '../Views/clients/client-list/client-list.component';
import { ClientService } from '../Controllers/Client/client.service';
import { RouterModule } from '@angular/router';
import { AddressesComponent } from '../Views/addresses/addresses.component';
import { MeasuresComponent } from '../Views/measures/measures.component';
import { TokenComponent } from '../Views/token/token.component';

const appRoutes: Routes = [
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
  },
  {
    path: '',
    component: HomeComponent
  }
  
];
export default appRoutes;