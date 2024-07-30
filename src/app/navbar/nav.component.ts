import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavbarComponent {
  userName:string="ahmed";
  haveCar:boolean=true;
  userAge:number=23;
  imgUrl:string="/src/assets/img/logo-color.png";
}
