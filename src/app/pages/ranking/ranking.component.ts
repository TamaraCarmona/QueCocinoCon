import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { SearchService } from 'src/app/core/search.service';
import { RecipeService } from 'src/app/core/recipe.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  
  constructor(private auth:AuthService, private route :Router, private search: SearchService, private receta : RecipeService) { }
  
  listResult = [];
  userName = this.auth.currentUser;

  ngOnInit(): void {
    this.userName = this.auth.currentUser;
    this.search.TopRanking().subscribe(res => {
      let recetaResponse: any = res;
      this.listResult = recetaResponse;      
      }, err => {
        console.log(err);
      }); 
  }

 OpenRecipe(idReceta){
    this.route.navigate(['/viewrecipe'],idReceta);
    
 }
 Like(){

 }
 Favorite(){
   
 }

}
