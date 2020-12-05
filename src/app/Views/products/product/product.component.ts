import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/Controllers/Products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public service : ProductsService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm (form? : NgForm){
    if(form != null){
      form.resetForm();
    }
    this.service.formData ={
      
      date_added: null,
      name:'',
      brand_id:null,
      description: '',
      category_id: null ,
      price: null,
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.product_id == null) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  updateRecord(form : NgForm){
    this.service.putClient(form.value).subscribe(res =>{
      this.toastr.info('Updated Successfully','Product Register');
      this.service.refreshList();
    })
  }

  insertRecord(form : NgForm){
    
    this.service.postClient().subscribe(res =>{
      this.toastr.success('Inserted Successfully','Product Register');
      this.resetForm(form)
      this.service.refreshList();
      
    })
  }


}
