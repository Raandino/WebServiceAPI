import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/Models/Product/product.model';
import { AuthService } from '../Auth/auth.service';
import { BaseController } from '../BaseController/BaseController.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseController<Product> {
 endpoint = "products";
  constructor( http: HttpClient, authService : AuthService) { 
    super(http, authService);
  }

  postClient (){
    return this.post()
    
  }

  putClient (form : Product){
    return this.put(form.product_id);
  }

  deleteClient(id :number){
    return this.delete(id);
  }

  refreshList(){
    return this.get().subscribe(res => {
      this.list = res
    })
  }

}
