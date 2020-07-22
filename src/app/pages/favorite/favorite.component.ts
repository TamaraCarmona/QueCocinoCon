import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/core/search.service';
import { RecipeService } from 'src/app/core/recipe.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  constructor(private auth:AuthService, private route :Router, private search: SearchService, private receta : RecipeService) { }

  listResult = [];
  userName = this.auth.currentUser;

  ngOnInit(): void {
    this.userName = this.auth.currentUser;
    console.log("entrando a favoritongoninit")
    this.search.MyFavorite(this.userName).subscribe(res => {
      let recetaResponse: any = res;
      this.listResult = recetaResponse;      
      }, err => {
        console.log(err);
      }); 
  }

 OpenRecipe(idReceta){
  this.route.navigate(['/viewrecipe'], {state:{ idReceta }});
    
 }

 Favorite(receta){
  receta.favorita = !receta.favorita;
  if(receta.favorita){
    this.insertfavorita(receta);
  }else{
    this.deletefavorita(receta);
  }
 }
 
 insertfavorita(receta){
  this.search.favorite(this.userName,receta.idReceta).subscribe(res => {
    console.log(res);        
    }, err => {
      console.log(err);
    });  
 }
 deletefavorita(receta){
  this.search.disfavorite(this.userName,receta.idReceta).subscribe(res => {        
    }, err => {
      console.log(err);
    });
}

 toggleHeart(receta){
  receta.megusta = !receta.megusta;
  if(receta.megusta){
    this.insertLike(receta);
  }else{
    this.deleteLike(receta);
  }
 }

 insertLike(receta){ 
  this.search.Like(this.userName,receta.idReceta).subscribe(res => {
    console.log(res);    
      receta.totalmegusta++;
    }, err => {
      console.log(err);
    });  

 }
 deleteLike(receta){
  this.search.DisLike(this.userName,receta.idReceta).subscribe(res => {      
    receta.totalmegusta--;
    }, err => {
      console.log(err);
    });   
 }

}
