import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import {SidebarComponent } from '../Views/sidebar/sidebar.component'
import {InfoComponent} from '../Views/info/info.component'
import {ClientListComponent} from '../Views/clients/client-list/client-list.component'
import {ClientsComponent} from '../Views/clients/clients.component'

const appRoutes: Routes = [
  {
    path: '',
    component: SidebarComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
