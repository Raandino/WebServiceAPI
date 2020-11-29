import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Models/Client/client.model';
import { ClientService } from '../../../Controllers/Client/client.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(public service : ClientService,
    private toastr : ToastrService) { }


    clientList:any=[];
    formatclientList:any=[];

  ngOnInit(): void {
    this.service.refreshList();
    
  }

  
  populateForm(cl: Client){
    this.service.formData = Object.assign({},cl);
  }


  onDelete(id: number){
    if(confirm('Are you sure to delete this record?')){
      this.service.deleteClient(id).subscribe(res =>{
        this.service.refreshList();
        this.toastr.warning('Deleted Successfully','Client Register');
      })  
    }
    
  }
}
