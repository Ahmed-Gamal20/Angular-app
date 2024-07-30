import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/nav.component';
import { BodyComponent } from '../body/body.component';
import { ContectComponent } from './../contect/contect.component';
import { SliderComponent } from './../slider/slider.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,BodyComponent,ContectComponent,SliderComponent],
templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
