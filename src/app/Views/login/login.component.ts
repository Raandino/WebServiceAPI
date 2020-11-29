import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {UserInterface} from '../../Models/Auth/user'
import {AuthService} from '../../Controllers/Auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(form): void {
    this.AuthService.login(form.value).subscribe(res => {
      this.router.navigateByUrl('/home');
    });
    console.log(form.value);
  }
}
