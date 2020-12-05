import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, tap } from 'rxjs/operators';
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
  // allProducts = [{
  //   product_id: 1,
  //   price: 2,
  //   name: 'Producto 1'
  // },
  // {
  //   product_id: 5006,
  //   price: 2,
  //   name: 'Producto 1'
  // }]
  allProducts = []
  clients = []
  @Input() order_id: number

  constructor( public fb: FormBuilder,
     public service: OrdersService,
    public productService: ProductsService,
    public clientService: ClientService,
    ) { }
  ngOnInit(): void {
    this.orderForm = this.fb.group({
      order_id: [0],
      date_order: [new Date() , Validators.required],
      date_delivered: [null],
      client_id: [null, Validators.required],
      address_id: [null, Validators.required],
      status_id: [1, Validators.required],
      subtotal: [0],
      total: [0],
      tax_total: [0],
      delivery : [0],
      order_details : this.fb.array([
        this.createProductForm()
      ])
    })
    this.formProducts.valueChanges.subscribe( change => {
      const subtotal = change.reduce( (acc, {product_id, quantity}) => {
        const product = this.allProducts.find(value => value.product_id === product_id)
        if(product_id){
          acc += product.price * quantity
        }
        return acc
      },0)
      const delivery = this.orderForm.get('delivery').value

      const tax_total = parseFloat(((subtotal + delivery) * 0.15).toFixed(2))
      console.log('delivery', delivery)
      const total = tax_total + subtotal + (delivery || 0)


      this.orderForm.patchValue({'total': total, 'subtotal': subtotal, 'tax_total': tax_total})
    })
    this.orderForm.get('delivery').valueChanges
    .subscribe( newDelivery => {
      const subtotal = this.formProducts.value.reduce( (acc, {product_id, quantity}) => {
        const product = this.allProducts.find(value => value.product_id === product_id)
        if(product_id){
          acc += product.price * quantity
        }
        return acc
      },0)
      const tax_total = parseFloat(((subtotal + newDelivery) * 0.15).toFixed(2))
      const total = tax_total + subtotal + newDelivery 
      this.orderForm.patchValue({'total': total, 'subtotal': subtotal, 'tax_total': tax_total})
    })

    this.clientService.get().subscribe(res => {
      this.clients = res 
    })
    this.productService.get().subscribe( res => {
      this.allProducts = res 
    });
    this.service.formChange.subscribe(change => {
      if(change.order_id !== 0){
        this.service.retrieve(change.order_id)
        .subscribe(res => {
          const orderList = res 
          const order = orderList.find((value) => value.order_id === change.order_id)
         
          if(order){
            console.log(order.subtotal)
            this.orderForm.patchValue({
              'order_id': order.order_id,
              'client_id': order.client_id,
              'address_id': order.address_id,
              'status_id': order.status_id,
              'subtotal': order.subtotal,
              'tax_total': order.tax_total,
              'total': order.total,
              'delivery': order.delivery,
              'date_order': order.date_order,
              'date_delivered': order.date_delivered
            })
            
            this.service.getDetails(change.order_id).subscribe(res => {
              const details = res as any[]
              this.formProducts.controls =[]
              const newFormArray = details.map(detail => {
                const fb = this.createProductForm()
                console.log(detail)
                fb.patchValue({
                  'order_detail': detail.order_detail,
                  'product_id': detail.product_id,
                  'quantity': detail.quantity,
                  'subtotal' :detail.subtotal,
                  'tax': detail.subtotal,
                  'price': detail.price
                })
                console.log(fb.value)
                return fb
              })
              console.log('new form array', newFormArray)

              this.formProducts.controls = newFormArray
              const subtotal = this.formProducts.value.reduce( (acc, {product_id, quantity, price}) => {
                const product = this.allProducts.find(value => value.product_id === product_id)
                if(product_id){
                  acc += (product.price || price)  * quantity
                }
                return acc
              },0)
              const tax_total = parseFloat(((subtotal + order.delivery ) * 0.15).toFixed(2))
              const total = tax_total + subtotal + order.delivery 
              this.orderForm.patchValue({'total': total, 'subtotal': subtotal, 'tax_total': tax_total})
            })
          
          }
        })
      }
    })
  }

  get formProducts () {
    return this.orderForm.get('order_details') as FormArray
  }
  createProductForm(){
    return this.fb.group({
      product_id: [null],
      quantity: [0, Validators.min(1)],
      subtotal:[0],
      tax:[0],
      price:[0],
      order_detail: [0]
    })
  }

  addProduct(){
    const  newProductGroup = this.createProductForm()
    this.formProducts.push(newProductGroup)
  }

  onSubmit(value){
    console.log('ON SUBMIT',value)
    const handleDetails = res => {
      console.log('res',res)
      const order_details = value.order_details
      order_details.map( detail => {
        console.log('detail', detail)
        const copyDetail = detail 
        const product = this.allProducts.find(value => value.product_id === detail.product_id) 
        if(product){
          if(!copyDetail.price) copyDetail.price = product.price 
          if(!copyDetail.subtotal) copyDetail.subtotal = product.price * detail.quantity 
          if(!copyDetail.tax) copyDetail.tax = copyDetail.subtotal * 0.15
          if(!copyDetail.total) copyDetail.total =  copyDetail.tax  + copyDetail.subtotal 
          if(!copyDetail.order_id) copyDetail.order_id = res || value.order_id 
          if(copyDetail.order_detail){
            this.service.updateDetails(copyDetail).subscribe()
          }else{
            this.service.createDetails(copyDetail).subscribe()

          }
        }
      })

    }
   if(!value.order_id){
    this.service.post(value).pipe(tap(res => {
      this.service.refreshList()
    })).subscribe(handleDetails)
   }else{
     this.service.putOrder(value).pipe(tap(res => {
       this.service.refreshList()
     })).subscribe(handleDetails)
   }

   this.orderForm.reset()
   this.formProducts.controls=[]

  }

  
  
}
