import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/core/recipe.service';
import { Router } from '@angular/router';

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
  idReceta;

  constructor(private receta: RecipeService, private route: Router) { 
    console.log(this.route.getCurrentNavigation().extras.state.idReceta);
    this.idReceta =this.route.getCurrentNavigation().extras.state.idReceta;
  }


  ngOnInit(): void {
    this.receta.Recipe(this.idReceta).subscribe(res => {   
      console.log(res);      
      let responseReceta : any = res;        
      this.listReceta = responseReceta.receta;
      this.listIngredientes = responseReceta.listIngredient;
      this.listPasos = responseReceta.listPaso;
      console.log('respuesta:',this.listIngredientes,this.listPasos);
      }, err => {
        console.log(err);
      });
  }
}
