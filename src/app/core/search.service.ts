import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  listIngredientes = []; 
  categoria;

  constructor(private http:HttpClient) { }

  Search(){
    let ingredientes = this.listIngredientes;      
    this.http.post('http://localhost:3000/search/search' , {ingredientes},).subscribe(res => {
      console.log(res);
      }, err => {
        console.log(err);      
      });
  }

}
