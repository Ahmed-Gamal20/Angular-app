import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from './products/products.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

// const routes:Routes=[


// ]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FooterComponent,NavbarComponent,ProductsComponent,SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app4';
}
