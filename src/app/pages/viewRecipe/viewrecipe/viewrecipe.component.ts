import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/core/recipe.service';

@Component({
  selector: 'app-viewrecipe',
  templateUrl: './viewrecipe.component.html',
  styleUrls: ['./viewrecipe.component.scss']
})
export class ViewrecipeComponent implements OnInit {
  
  titulo;
  urlReceta;
  userName;
  categoria;
  listIngredientes = [];
  listPasos = [];
  listReceta = [];

  constructor(private receta: RecipeService) { }
  

  ngOnInit(): void {
    this.receta.Recipe(1).subscribe(res => {   
      console.log(res);      
      let responseReceta : any = res;
     
      /*this.titulo = listReceta[0];
      this.categoria = listReceta[1];
      this.userName = listReceta[0];
      this.urlReceta = listReceta[0];*/
      this.listReceta = responseReceta.receta;
      this.listIngredientes = responseReceta.listIngredient;
      this.listPasos = responseReceta.listPaso;
      console.log('respuesta:',this.listIngredientes,this.listPasos);
      }, err => {
        console.log(err);
      });
  }
}
