import { Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { CreateOrderComponent } from './create-order.component';

export const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'create', component: CreateOrderComponent }
];
