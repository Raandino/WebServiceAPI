import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../../Views/token/token.service';


@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})



export class TokenComponent implements OnInit {

  constructor(public service : TokenService,
    private toastr : ToastrService,
    private TokenService : TokenService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm (form? : NgForm){
    if(form != null){
      form.resetForm();
    }
    this.service.formData ={
      username: '',
      password: ''
    }
  }

 
  onSubmit (form : NgForm){
  
  this.service.postToken(form.value).subscribe(
    (val) => {
      console.log('POST call successful value returned in body');
      
      this.toastr.success('Access Granted','Token Validation');
    },
    response => {

      console.log('POST call in error', response);
      this.toastr.warning('Access Denied','Token Validation');
      this.resetForm();
    },
    () => {
      console.log('The POST observable is now completed.');
    });
   
    
  }

  
}
