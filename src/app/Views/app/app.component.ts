import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/Controllers/Client/client.service';
import { MeasureService } from 'src/app/Controllers/Measure/measure.service';
import { AddressService } from 'src/app/Controllers/Address/address.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private toastr : ToastrService,
    public ClientService : ClientService,
    public MeasureService : MeasureService,
    public AddressService : AddressService) { }

  ngOnInit(): void {
    
  }

  refreshListClient (){
    this.ClientService.refreshList();
    console.log("refresca cliente")
  }

  refreshListAddresses (){
    this.AddressService.refreshList();
    console.log("refresca adr")

  }

  refreshListMeasures (){
    this.MeasureService.refreshList();
    console.log("refresca me")

  }

}

  

