import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/search.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private search : SearchService) { }

  listIngrediente = [];
  ingrediente; 
  seleccionado;
  fullMatch; 
  seleccionadof;

  ngOnInit(): void {
  }

  Agregar(){   
    let ingrediente :  any;    

    ingrediente = {
      ingrediente : this.ingrediente,

    }
    this.fullMatch = this.FullMatch();
    console.log(this.fullMatch)

    this.listIngrediente.push(ingrediente);  
    this.search.listIngredientes = this.listIngrediente;  
    this.ingrediente = '';   
  }

  Delete(seleccionado): void {    
    for (let ingredient of this.listIngrediente) {     
      if (ingredient.ingrediente == seleccionado){
        this.listIngrediente.splice(this.listIngrediente.indexOf(seleccionado), 1);
        break;
      }      
    }
  }
  FullMatch(){   
    if(this.seleccionadof == 1){
      return this.fullMatch = true;
    }else{
      return this.fullMatch = false;
    }
   
  }
}
