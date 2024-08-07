import { Component, Input } from '@angular/core';
import { AboutComponent } from "../../screens/about/about.component";
import { HomeComponent } from "../../screens/home/home.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AboutComponent, HomeComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
   

}
