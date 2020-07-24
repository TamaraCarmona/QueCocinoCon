import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { SearchService } from 'src/app/core/search.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private route:Router,private search: SearchService,private auth: AuthService) { }

  listResult = [];
  userName;
  like = false;
  heartType: String = "heart-empty"

  ngOnInit(): void {
    this.userName =  this.auth.currentUser;
  }

 public LoadResult(){  
  this.search.Search(this.userName).subscribe(res => {
    let recetaResponse: any = res;
    this.listResult = recetaResponse;   
    console.log(this.listResult) 
    }, err => {
      this.listResult = [];
      this.route.navigate(['/add-search']);
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
