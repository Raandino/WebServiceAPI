import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent } from '../Views/login/login.component'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import {AuthRoutingModule} from '../auth-route/auth-routing.module'
import { AuthService } from '../Controllers/Auth/auth.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AuthRoutingModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
