import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ProductComponent } from "../product/product.component";
import { SlidbarComponent } from './../slidbar/slidbar.component';
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ProductComponent, SlidbarComponent, FooterComponent],
templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
