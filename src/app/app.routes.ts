import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ProductsComponent } from './screens/products/products.component';
import { AboutComponent } from './screens/about/about.component';
import { ContactComponent } from './screens/contact/contact.component';
import { NotFoundedComponent } from './screens/not-founded/not-founded.component';
import { RegisterComponent } from './screens/register/register.component';

export const routes: Routes = [
    {path:"",redirectTo:'home',pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {path:"product",component:ProductsComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent},
    {path:"register",component:RegisterComponent},
    {path:"**",component:NotFoundedComponent},

];
