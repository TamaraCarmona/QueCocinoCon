import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/core/categories.service';
import { SearchService } from 'src/app/core/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router,private categoria : CategoriesService, private search :SearchService) { 

  }

  username;
  photourl;

  ngOnInit(): void {
    this.username = this.auth.currentUser;
    this.photourl = this.auth.urlUserFoto;
  }
  MyRecipe(){
    this.router.navigate(['/viewmyrecipe']);      
  }

  salir(){
    this.auth.logout();
  }
  routeRegister(){
    this.router.navigate(['/register']);        
  }
  AltaReceta(){
    this.router.navigate(['/addrecipe']);
  }  
  Ranking(){
    this.router.navigate(['/ranking']);
  }
  Principal(){  
    this.router.navigate(['/add-search']);
    this.categoria.route = 1;    
    this.search.categoria = 1;
  }
 
}
