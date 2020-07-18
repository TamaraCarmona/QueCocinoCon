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

  ngOnInit(): void {
    this.userName =  this.auth.currentUser;
  }

 public LoadResult(lista){
    this.listResult = lista;
    console.log(this.listResult)
  }
 OpenRecipe(idReceta){
  //  this.route.navigate(['/viewrecipe'],idReceta);
    
 }
 Like(idReceta){
  this.search.Like(this.userName,idReceta).subscribe(res => {
    console.log(res);
    }, err => {
      console.log(err);
    });
    this.like = true;
 }
 Favorite(){
   
 }

}
