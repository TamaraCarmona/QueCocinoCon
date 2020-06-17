import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  constructor() { }

  listIngrediente = [];
  ingrediente;
  cantidad;//este tiene la unidad de medida  
  seleccionado;

  ngOnInit(): void {
  }

  Agregar(){
    let ingredientes :  any;    
   
    ingredientes = {
      ingrediente : this.ingrediente,
      cantidad : this.cantidad,
    }
    this.listIngrediente.push(ingredientes);  
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
