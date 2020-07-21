import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/core/search.service';
import { AuthService } from 'src/app/core/auth.service';
import { RecipeService } from 'src/app/core/recipe.service';

@Component({
  selector: 'app-viewmyrecipe',
  templateUrl: './viewmyrecipe.component.html',
  styleUrls: ['./viewmyrecipe.component.scss']
})
export class ViewmyrecipeComponent implements OnInit {

  constructor(private auth:AuthService, private route :Router, private search: SearchService, private receta : RecipeService) { }

  listResult = [];
  userName = this.auth.currentUser;

  ngOnInit(): void {
    this.userName = this.auth.currentUser;
    this.search.SearchUserName(this.userName).subscribe(res => {
      let recetaResponse: any = res;
      this.listResult = recetaResponse;      
      }, err => {
        console.log(err);
      });  
  }

 OpenRecipe(idReceta){
  this.route.navigate(['/viewrecipe'], {state:{ idReceta }});
 }

 DeleteRecipe(idReceta){
   this.receta.Delete(idReceta,this.userName).subscribe(res => {
    console.log(res);
    }, err => {
      console.log(err);
    });
 }

}
