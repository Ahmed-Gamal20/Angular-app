import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SettingComponent } from './setting/setting.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'slider', component: SliderComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
{path:'setting',component:SettingComponent,children:[
    {path:'web',component:WebComponent},
    {path:'mobile',component:MobileComponent}
]},

    { path: "**", component: NotFoundComponent }
];
