import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/Controllers/Client/client.service';
import { OrdersService } from 'src/app/Controllers/Orders/orders.service';
import { ProductsService } from 'src/app/Controllers/Products/products.service';
import { OrdersComponent } from '../orders.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderForm : FormGroup
  allProducts = []
  clients = []
  constructor( public fb: FormBuilder,
     public service: OrdersService,
    public productService: ProductsService,
    public clientService: ClientService,
    ) { }
  ngOnInit(): void {
    this.orderForm = this.fb.group({
      date_order: [new Date(), Validators.required ],
      client_id: [null, Validators.required],
      address_id: [null, Validators.required],
      subtotal: [0],
      total: [0],
      tax: [0],
      delivery : [0],
      products : this.fb.array([
        this.createProductForm()
      ])
    })
    this.formProducts.valueChanges.subscribe( change => {
      const subtotal = change.reduce( (acc, {product, quantity}) => {
        if(product){
          acc += product.price * quantity
        }
        return acc
      },0)
      const tax = subtotal * 0.15
      const delivery = this.orderForm.get('delivery').value
      console.log('delivery', delivery)
      const total = tax + subtotal + (delivery || 0)

      this.orderForm.patchValue({'total': total, 'subtotal': subtotal, 'tax': tax})
    })
    this.orderForm.get('delivery').valueChanges
    .subscribe( newDelivery => {
      const subtotal = this.formProducts.value.reduce( (acc, {product, quantity}) => {
        if(product){
          acc += product.price * quantity
        }
        return acc
      },0)
      const tax_total = subtotal * 0.15
      const total = tax_total + subtotal + newDelivery 

      this.orderForm.patchValue({'total': total, 'subtotal': subtotal, 'tax': tax_total})
    })

    this.clientService.get().subscribe(res => {
      this.clients = res as any[]
    })
    // this.productService.get().subscribe( res => {
    //   this.allProducts = res as any[]
    // });
  }

  get formProducts () {
    return this.orderForm.get('products') as FormArray
  }
  createProductForm(){
    return this.fb.group({
      product: [null],
      quantity: [0, Validators.min(1)],
    })
  }

  addProduct(){
    const  newProductGroup = this.createProductForm()
    this.formProducts.push(newProductGroup)
  }

  onSubmit(value){
    console.log('ON SUBMIT')
    console.log(value)
  }
}
