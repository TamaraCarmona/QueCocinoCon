import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  listIngredientes = []; 
  listPasos = [];
  listFotos = [];
  categoria;

  constructor(private http:HttpClient, private route: Router) { }

  AddRecipe(titulo,userName,urlFoto){
    let receta = {
      titulo: titulo,
      tipoReceta: this.categoria,
      userName: userName,
      categoria: this.categoria,
      urlFoto: urlFoto,
    }
    let pasos = this.listPasos;
  
    let ingredientes = this.listIngredientes;    
    let fotos = this.listFotos;
    console.log(fotos)
    this.http.post('http://localhost:3000/receta/create',{receta,pasos,ingredientes,fotos}).subscribe(res => {
    console.log(res);
    this.route.navigate(['/dashboard']);
    }, err => {
      this.route.navigate(['/addrecipe']);
      console.log(err);      
    });
  }

  Recipe(idReceta){
    return this.http.get('http://localhost:3000/receta/receta/'+ idReceta)
  }

  Delete(idReceta,userName){
    return this.http.put('http://localhost:3000/receta/delete/'+ idReceta,{userName:userName})
  }

}
