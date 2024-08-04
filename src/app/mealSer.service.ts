import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MealService {
  
  constructor(private _httpClient:HttpClient) { 

  }

  getPizza():Observable<any>
  {
   return this._httpClient.get('https://forkify-api.herokuapp.com/api/search?q=pizza')

  }

  
 
}
