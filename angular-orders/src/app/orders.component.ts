
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule],
  providers: [HttpClient],
  selector: 'app-orders',
  template: `
    <h2>Orders</h2>
    <ul>
      <li *ngFor="let order of orders">
        {{ order.product }} - Quantity: {{ order.quantity }}
      </li>
    </ul>
  `
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3001/api/orders')
      .subscribe(data => this.orders = data);
  }
}
