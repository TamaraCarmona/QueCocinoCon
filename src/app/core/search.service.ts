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

  Search(userName){    
    const ingredientes = this.listIngredientes;   
    return this.http.post('http://localhost:3000/search/principal' , {ingredientes,userName:userName ,categoria:this.categoria,fullMatch:this.fullMatch})
   
  }

  SearchUserName(userName){
    return this.http.get('http://localhost:3000/search/myreceta/' + userName);
  }

  TopRanking(){
    return this.http.get('http://localhost:3000/search/ranking/top');
  }
  Like(userName,idReceta){    
    return this.http.post('http://localhost:3000/ranking/like',{userName:userName,idReceta:idReceta})
  }


}
