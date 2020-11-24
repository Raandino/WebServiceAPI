import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../Controllers/Client/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
