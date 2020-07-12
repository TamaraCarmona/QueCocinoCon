import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/core/categories.service';
import { RecipeService } from 'src/app/core/recipe.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoria:CategoriesService, private recipe:RecipeService) { }

  listCategories = [];
  seleccionado;

  ngOnInit(): void {   
    this.categoria.categories().subscribe(res =>{
      let resp : any = res;
      this.listCategories = resp;
      console.log(this.listCategories);
    },err => {
      console.log(err);
      }
    )
    this.seleccionado = this.categoria.route;
  }
  Categoria(){
   this.recipe.categoria = this.seleccionado;  
  }

 

}
