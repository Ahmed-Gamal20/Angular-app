import { Component, input } from '@angular/core';
import { User } from './../user';
import { NgFor, CommonModule } from '@angular/common';
import { Meals } from '../meals';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

meal:Meals[]=[
  {
    publisher: "101 Cookbooks",
    title: "Best Pizza Dough Ever",
    source_url: "http://www.101cookbooks.com/archives/001199.html",
    recipe_id: "47746",
    image_url: "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
    social_rank: 100,
    publisher_url: "http://www.101cookbooks.com"
  },
  {
    "publisher": "The Pioneer Woman",
    "title": "Deep Dish Fruit Pizza",
    "source_url": "http://thepioneerwoman.com/cooking/2012/01/fruit-pizza/",
    "recipe_id": "46956",
    "image_url": "http://forkify-api.herokuapp.com/images/fruitpizza9a19.jpg",
    "social_rank": 100,
    "publisher_url": "http://thepioneerwoman.com"
  },
  {
    "publisher": "Closet Cooking",
    "title": "Pizza Dip",
    "source_url": "http://www.closetcooking.com/2011/03/pizza-dip.html",
    "recipe_id": "35477",
    image_url: "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
    "social_rank": 99.9999999999999,
    "publisher_url": "http://closetcooking.com"
  },
  {
    "publisher": "Closet Cooking",
    "title": "Cauliflower Pizza Crust (with BBQ Chicken Pizza)",
    "source_url": "http://www.closetcooking.com/2013/02/cauliflower-pizza-crust-with-bbq.html",
    "recipe_id": "41470",
    "image_url": "http://forkify-api.herokuapp.com/images/fruitpizza9a19.jpg",
    "social_rank": 99.9999999999994,
    "publisher_url": "http://closetcooking.com"
  },
  {
    "publisher": "Closet Cooking",
    "title": "Pizza Quesadillas (aka Pizzadillas)",
    "source_url": "http://www.closetcooking.com/2012/11/pizza-quesadillas-aka-pizzadillas.html",
    "recipe_id": "35478",
    "image_url": "http://forkify-api.herokuapp.com/images/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg",
    "social_rank": 99.9999999999984,
    "publisher_url": "http://closetcooking.com"
  },
  {
    "publisher": "Two Peas and Their Pod",
    "title": "Sweet Potato Kale Pizza with Rosemary & Red Onion",
    "source_url": "http://www.twopeasandtheirpod.com/sweet-potato-kale-pizza-with-rosemary-red-onion/",
    "recipe_id": "54454",
    "image_url": "http://forkify-api.herokuapp.com/images/sweetpotatokalepizza2c6db.jpg",
    "social_rank": 99.9999999991673,
    "publisher_url": "http://www.twopeasandtheirpod.com"
  },
  {
    "publisher": "My Baking Addiction",
    "title": "Pizza Dip",
    "source_url": "http://www.mybakingaddiction.com/pizza-dip/",
    "recipe_id": "2ec050",
    "image_url": "http://forkify-api.herokuapp.com/images/PizzaDip21of14f05.jpg",
    "social_rank": 99.9999999982661,
    "publisher_url": "http://www.mybakingaddiction.com"
  }
]



isShowDetils:boolean=false;
}













































































































































//   co:string="red";
// info:User[]=[
//   {
//     name:"ahmed",
//     age:23,
//     id:1
//   },
//   {
//     name:"gamal",
//     age:70,
//     id:2
//   },
//   {
//     name:"mohamed",
//     age:124,
//     id:3
//   },
//   {
//     name:"gaher",
//     age:1000,
//     id:6
//   }
// ]
// isDarkMode:boolean=false;
// changebg(){
// this.isDarkMode=!this.isDarkMode;

// }
// }




