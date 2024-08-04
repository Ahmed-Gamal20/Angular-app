import { Component } from '@angular/core';
import { MealService } from '../mealSer.service';
import { Meals } from '../meals';
import { NgClass } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass,SliderComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

username:string='';
  pizza:Meals[]=[];
constructor(_mealService:MealService)
{
  _mealService.getPizza().subscribe((data)=>{
    this.pizza=data.recipes;
    
  })
}


}

