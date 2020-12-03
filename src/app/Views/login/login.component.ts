import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {UserInterface} from '../../Models/Auth/user'
import {AuthService} from '../../Controllers/Auth/auth.service'
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service:AuthService, 
                      private router:Router,
                      private toastr : ToastrService) { }

  ngOnInit(): void {
    this.service.refreshToken().subscribe((res)=>{
      console.log('Response', res)
      this.router.navigateByUrl('/home');
    })

    
  }

  // resetForm (form?: NgForm){
  //   console.log("NO SE RESET");
  //   if(form != null){
  //     form.resetForm();
  //   }
  //   this.service.formData ={
  //     Username: '',
  //     Password: ''
  //   }
  // }

  onLogin(form): void {
    this.service.login(form.value).subscribe(
      res => {
      this.toastr.success('Access Granted','Login');
      this.router.navigateByUrl('/home');
    },
    response => {
      console.log('POST call in error', response);
      this.toastr.warning('Access Denied','Login');
      //this.resetForm();//No sirve 

    }
    );
    console.log(form.value);
  }
}
