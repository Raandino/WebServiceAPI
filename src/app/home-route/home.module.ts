import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent } from '../Views/home/home.component'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import {HomeRoutingModule} from './home-routing.module'
import {SidebarComponent} from '../Views/sidebar/sidebar.component'

import {ClientsComponent} from '../Views/clients/clients.component'
import {ClientListComponent} from '../Views/clients/client-list/client-list.component'
import {ClientComponent} from '../Views/clients/client/client.component'



@NgModule({
  declarations: [HomeComponent,
                  SidebarComponent,
                  ClientListComponent,
                  ClientsComponent,
                  ClientComponent
                ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HomeRoutingModule
  ],
  providers: []
})
export class HomeModule { }
