import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MeasureService } from 'src/app/Controllers/Measure/measure.service';


@Component({
  selector: 'app-measure',
  templateUrl: './measure.component.html',
  styleUrls: ['./measure.component.css']
})
export class MeasureComponent implements OnInit {

  constructor(public service : MeasureService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm (form? : NgForm){
    if(form != null){
      form.resetForm();
    }
    this.service.formData ={
      measure1: '',
    }
  }

  onSubmit (form : NgForm){
    if (form.value.measure_id==null){
      this.insertRecord(form);
    }else{
      this.updateRecord(form);
    }
  }

  updateRecord(form : NgForm){
    this.service.putMeasure(form.value).subscribe(res =>{
      this.toastr.info('Updated Successfully','Measure Register');
      this.resetForm(form)
      this.service.refreshList();
    })
  }


  insertRecord(form : NgForm){
    this.service.postMeasure(form.value).subscribe(res =>{
      this.toastr.success('Inserted Successfully','Measure Register');
      this.resetForm(form)
      this.service.refreshList();
    })
  }

}
