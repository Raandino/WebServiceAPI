import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { ClientService } from 'src/app/Controllers/Client/client.service';
import { OrdersService } from 'src/app/Controllers/Orders/orders.service';
import { ProductsService } from 'src/app/Controllers/Products/products.service';
import { Order } from 'src/app/Models/Order/order.model';
import { OrdersComponent } from '../orders.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderForm : FormGroup
  allProducts = [{
    product_id: 1,
    price: 2,
    name: 'Producto 1'
  }]
  clients = []
  @Input() order_id: number

  constructor( public fb: FormBuilder,
     public service: OrdersService,
    public productService: ProductsService,
    public clientService: ClientService,
    ) { }
  ngOnInit(): void {
    this.orderForm = this.fb.group({
      date_order: [new Date() , Validators.required],
      date_delivered: [null],
      client_id: [null, Validators.required],
      address_id: [null, Validators.required],
      status_id: [1, Validators.required],
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
      const delivery = this.orderForm.get('delivery').value

      const tax = (subtotal + delivery) * 0.15
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
      const tax_total = parseFloat(((subtotal + newDelivery) * 0.15).toFixed(2))
      const total = tax_total + subtotal + newDelivery 

      this.orderForm.patchValue({'total': total, 'subtotal': subtotal, 'tax': tax_total})
    })

    this.clientService.get().subscribe(res => {
      this.clients = res as any[]
    })
    this.productService.get().subscribe( res => {
      this.allProducts = res as any[]
    });
    this.service.formChange.subscribe(change => {
      if(change.order_id !== 0){
        this.service.retrieve(change.order_id)
        .subscribe(res => {
          const orderList = res as Order[]
          const order = orderList.find((value) => value.order_id === change.order_id)
          if(order){
            console.log(order.subtotal)
            this.orderForm.patchValue({
              'client_id': order.client_id,
              'addres_id': order.address_id,
              'status_id': order.status_id,
              'subtotal': order.subtotal,
              'tax_total': order.tax_total,
              'total': order.total,
              'delivery': order.delivery,
              'date_order': order.date_order,
              'date_delivered': order.date_delivered
            })
          }
        })
      }
    })
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
    this.service.post(value).subscribe(res => {
      console.log(res)
    })
  }

  
  
}
