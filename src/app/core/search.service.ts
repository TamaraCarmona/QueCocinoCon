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
  tituloReceta;
  urlFotoReceta;
  categoriaRpta;
  usuario;


  Search(userName){    
    const ingredientes = this.listIngredientes;        
  
    console.log(this.fullMatch)
    this.http.post('http://localhost:3000/search/principal' , {ingredientes,userName:userName ,categoria:this.categoria,fullMatch:this.fullMatch}).subscribe(res => {
      console.log(res);
      let recetaResponse: any = res;
      this.tituloReceta = recetaResponse.titulo;
      this.usuario      = recetaResponse.Usuario_idUsuario;
      this.categoriaRpta = recetaResponse.categoria;    
      }, err => {
        console.log(err);      
      });
  }

}
