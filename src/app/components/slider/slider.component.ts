import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ProductItem } from '../../interface/product-item';


@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgFor],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Input() proImg: ProductItem[] = []

  
}
