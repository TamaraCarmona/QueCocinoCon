import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/core/recipe.service';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.scss']
})
export class AddrecipeComponent implements OnInit {

  constructor(private recipe: RecipeService,private auth:AuthService) { }
  userName; 
  ngOnInit(): void {
    this.userName = this.auth.currentUser;
  }
  titulo;
   

  AddRecipe(){
    this.recipe.AddRecipe(this.titulo,this.userName,'asdasd');
  }

}
