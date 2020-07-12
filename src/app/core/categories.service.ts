import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }
  route;
  categories(){  
    return this.http.get('http://localhost:3000/categoria');
  }
}
