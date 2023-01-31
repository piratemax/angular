import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  products : Product[] = [
  {name: "chaises", price: 10, stock: 4},
  {name: "table", price: 100, stock: 1},
  {name: "yatch", price: 1, stock: 0}
  ];
}
