import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/Controllers/Products/products.service';
import {Product} from '../../../Models/Product/product.model'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public service : ProductsService,
    private toastr : ToastrService) { }

    ProductList:any=[];
    formatproductList:any=[];

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(cl: Product){
    this.service.formData = Object.assign({},cl);
    
  }

  onDelete(id: number){
    if(confirm('Are you sure to delete this record?')){
      this.service.delete(id).subscribe(res =>{
        this.service.refreshList();
        this.toastr.warning('Deleted Successfully','Client Register');
      })  
    }
    
  }

}
