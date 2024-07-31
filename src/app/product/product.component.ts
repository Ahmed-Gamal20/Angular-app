import { Component } from '@angular/core';
import { produt } from '../../interface/product';
import { ProductItemComponent } from './../product-item/product-item.component';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductItemComponent],
templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  products: produt[] = [
    {
      title: 'Card title 1',
      imgUrl: 'assets/images/2.jpg',
      onSale: false,
    },
    {
      title: 'Card title 2',
      imgUrl: 'assets/images/OIP.jpeg',
      onSale: true,
    },
    {
      title: 'Card title 3',
      imgUrl: 'assets/images/OIP1.jpeg',
      onSale: true,
    },
  ];

}