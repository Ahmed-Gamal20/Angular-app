import { Component, Input } from '@angular/core';
import { ProductItem } from '../../interface/product-item';
import { NgFor } from '@angular/common';
import { AboutComponent } from "../about/about.component";
import { ProductService } from '../../services/product.service';
import { ProductsComponent } from "../products/products.component";
import { SliderComponent } from '../../components/slider/slider.component';
import { LoaderComponent } from "../../components/loader/loader.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, AboutComponent, SliderComponent, ProductsComponent, LoaderComponent],
templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
//   constructor(_productItem:ProductService){
// _productItem.getProduct().subscribe({
//   next:(res)=>{
//    this.products= res;
//   },
//   error:(err)=>{
//     return err;
//   },
//   complete:()=>{
//     console.log('done');
    
//   }
  
// })
//   }

//  unHome:string='dfgdfgdfgfgghfdh';



product:ProductItem[]=[];
constructor(_productItem:ProductService){
 let x= _productItem.getProduct().subscribe((data)=>{
    this.product=data;
  })
}

}
