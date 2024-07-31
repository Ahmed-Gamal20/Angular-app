import { Component } from '@angular/core';
import { produt } from '../../interface/product';
import { ProductItemComponent } from './../product-item/product-item.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductItemComponent],
templateUrl: './productele.component.html',
  styleUrl: './productele.component.css'
})
export class ProductsComponent {
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
    {
      title: 'Card title 4',
      imgUrl: 'assets/images/4.jfif',
      onSale: true,
    },
    {
      title: 'Card title 5',
      imgUrl: 'assets/images/5.jfif',
      onSale: true,
    },
    {
      title: 'Card title 6',
      imgUrl: 'assets/images/6.jfif',
      onSale: false,
    },
    {
      title: 'Card title 7',
      imgUrl: 'assets/images/7.jfif',
      onSale: true,
    },
    {
      title: 'Card title 8',
      imgUrl: 'assets/images/8.jfif',
      onSale: false,
    },
    {
      title: 'Card title 9',
      imgUrl: 'assets/images/9.jfif',
      onSale: false,
    },
    {
      title: 'Card title 10',
      imgUrl: 'assets/images/10.jfif',
      onSale: true,
    },
  ];
}