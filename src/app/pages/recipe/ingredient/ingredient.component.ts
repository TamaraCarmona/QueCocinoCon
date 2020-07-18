import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/core/recipe.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  constructor(private recipe:RecipeService) { }

  listIngrediente = [];
  ingrediente;
  cantidad;
  seleccionado;
  umedida;

  ngOnInit(): void {
  }

  Agregar(){
    let ingrediente :  any;    
   
    ingrediente = {
      ingrediente : this.ingrediente,
      cantidad : this.cantidad,
      umedida : this.umedida,
    }
    this.listIngrediente.push(ingrediente);  
    this.recipe.listIngredientes = this.listIngrediente;
    this.ingrediente = '';
    this.cantidad = '';
  }

  Delete(seleccionado): void {    
      for (let ingredient of this.listIngrediente) {     
        if (ingredient.ingrediente == seleccionado){
          this.listIngrediente.splice(this.listIngrediente.indexOf(seleccionado), 1);
          break;
      }      
    }
  }

}
