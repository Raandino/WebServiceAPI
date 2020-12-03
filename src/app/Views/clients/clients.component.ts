import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../Controllers/Client/client.service';
import { Client } from 'src/app/Models/Client/client.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(public service : ClientService) { }

  ngOnInit(): void {
    
  }

  resetForm (){
    this.service.formData ={
      date_created: new Date(),
      email:'',
      name:'',
      password_client: '',
      phone: null,
    }
  }

  populateForm(cl: Client){
    this.service.formData = Object.assign({},cl);
  }
}
