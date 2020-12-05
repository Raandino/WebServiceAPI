import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/Controllers/Products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public service : ProductsService) { }

  ngOnInit(): void {
  }

  resetForm (form? : NgForm){
    if(form != null){
      form.resetForm();
    }
    this.service.formData ={
      date_added: new Date(),
      name:'',
      brand_id:null,
      description: '',
      category_id: null ,
      price: null
}
    }

}
