import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MeasureService } from 'src/app/Controllers/Measure/measure.service';
import { Address } from 'src/app/Models/Address/address.model';
import { Measure } from 'src/app/Models/Measure/measure.model';

@Component({
  selector: 'app-measure-list',
  templateUrl: './measure-list.component.html',
  styleUrls: ['./measure-list.component.css']
})
export class MeasureListComponent implements OnInit {

  constructor(public service : MeasureService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(cl: Measure){
    this.service.formData = Object.assign({},cl);
  }


  onDelete(id: number){
    if(confirm('Are you sure to delete this record?')){
      this.service.deleteMeasure(id).subscribe(res =>{
        this.service.refreshList();
        this.toastr.warning('Deleted Successfully','Measure Register');
      })  
    }
    
  }

}
