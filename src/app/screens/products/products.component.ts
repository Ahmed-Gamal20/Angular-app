import { Component, Input } from '@angular/core';
import { ProductItem } from '../../interface/product-item';
// import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  product:ProductItem[]=[];
  constructor(_productItem:ProductService){
_productItem.getProduct().subscribe(
  (da)=>{
  //  console.log(da);
   
   this.product=da
  
  })
}
}









//   next:(res)=>{
//    this.product= res;
//   },
//   error:(err)=>{
//     return err;
//   },
//   complete:()=>{
//     console.log('done');
    
//   }
  
// })
  // }

