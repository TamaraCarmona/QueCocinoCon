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
    console.log(this.categoria,"categoria")     
    const ingredientes = this.listIngredientes;   
    return this.http.post('http://localhost:3000/search/principal' , {ingredientes,userName:userName ,categoria:this.categoria,fullMatch:this.fullMatch})
   
  }

  SearchUserName(userName){
    return this.http.get('http://localhost:3000/search/myreceta/' + userName);
  }

  TopRanking(userName){
    return this.http.get('http://localhost:3000/ranking/top/'+userName);
  }
  Like(userName,idReceta){    
    return this.http.post('http://localhost:3000/ranking/like',{userName:userName,idReceta:idReceta})
  }
  DisLike(userName,idReceta){
    return this.http.put('http://localhost:3000/ranking/like/delete/'+idReceta,{userName:userName})
  }

  favorite(userName,idReceta){
    return this.http.post('http://localhost:3000/favorite/create',{userName:userName,idReceta:idReceta})
  }
  disfavorite(userName,idReceta){
    return this.http.put('http://localhost:3000/ranking/favorite/delete/'+idReceta,{userName:userName})
  }

  MyFavorite(userName){  
    return this.http.get('http://localhost:3000/ranking/favorito/'+userName);
  }

}
