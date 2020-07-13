import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  listIngredientes = []; 
  categoria;
  fullMatch;
  constructor(private http: HttpClient) { }

//Respuesta
  


  Search(userName){    
    const ingredientes = this.listIngredientes;

    console.log(this.fullMatch)
    return this.http.post('http://localhost:3000/search/principal' , {ingredientes,userName:userName ,categoria:this.categoria,fullMatch:this.fullMatch})
   
  }

}
