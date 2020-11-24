import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './Views/Default/app-routing.module';
import { AppComponent } from './Views/Default/app.component';
import { ClientComponent }     from './Views/clients/client/client.component';
import { ClientsComponent }    from './Views/clients/clients.component';
import { ClientListComponent } from './Views/clients/client-list/client-list.component';
import { ClientService } from './Controllers/Client/client.service';
import { HomeComponent } from './Views/home/home.component';
import { RouterModule } from '@angular/router';
import appRoutes from './Router/routerConfig';

// For MDB Angular Free
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AddressesComponent } from './Views/addresses/addresses.component';
import { AddressComponent } from './Views/addresses/address/address.component';
import { AddressListComponent } from './Views/addresses/address-list/address-list.component';
import { MeasuresComponent } from './Views/measures/measures.component';
import { MeasureComponent } from './Views/measures/measure/measure.component';
import { MeasureListComponent } from './Views/measures/measure-list/measure-list.component';
import { TokenComponent } from './Views/token/token.component';
import { SidebarComponent } from './Views/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientsComponent,
    ClientListComponent,
    HomeComponent,
    AddressesComponent,
    AddressComponent,
    AddressListComponent,
    MeasuresComponent,
    MeasureComponent,
    MeasureListComponent,
    TokenComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule, 
    RouterModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
