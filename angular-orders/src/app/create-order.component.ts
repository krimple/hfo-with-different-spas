
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  providers: [HttpClient],
  selector: 'app-create-order',
  template: `
    <h2>Create Order</h2>
    <form (ngSubmit)="submitOrder()">
      <label>Product:
        <input [(ngModel)]="product" name="product" required />
      </label>
      <br />
      <label>Quantity:
        <input type="number" [(ngModel)]="quantity" name="quantity" required />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  `
})
export class CreateOrderComponent {
  product: string = '';
  quantity: number = 1;

  constructor(private http: HttpClient, private router: Router) {}

  submitOrder() {
    const order = { product: this.product, quantity: this.quantity };
    this.http.post('http://localhost:3001/api/orders', order)
      .subscribe(() => this.router.navigate(['/']));
  }
}
