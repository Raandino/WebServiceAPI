export class Order {
    order_id?:number
    consecutive?:string
    date_order:Date
    date_delivered?: Date
    client_id:number
    address_id: number
    subtotal:number
    tax_total:number
    delivery:number
    status_id:number
    total:number
}

export type OrderDetail  = {
    product_id : number
    order_id: number,
    price: number,
    tax: number,
    subtotal:number


}
