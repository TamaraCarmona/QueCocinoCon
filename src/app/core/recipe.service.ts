import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  listIngredientes = []; 
  listPasos = [];
  listFotos = [];
  categoria;

  constructor(private http:HttpClient) { }

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
    console.log(pasos, ingredientes, receta)
    this.http.post('http://localhost:3000/receta/create',{receta,pasos,ingredientes,fotos}).subscribe(res => {
    console.log(res);
    }, err => {
      console.log(err);      
    });
  }

  Recipe(idReceta){
    return this.http.get('http://localhost:3000/receta/receta/'+ idReceta)
  }

  Delete(idReceta){
    return this.http.delete('http://localhost:3000/receta/delete/'+ idReceta)
  }

}
