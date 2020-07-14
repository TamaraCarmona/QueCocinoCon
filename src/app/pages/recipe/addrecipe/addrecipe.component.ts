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
  receta = false;
  base64textString = [];
  urlReceta;
  titulo;

  ngOnInit(): void {
    this.userName = this.auth.currentUser;
  }


  AddRecipe(){
    console.log(this.urlReceta)
    this.urlReceta = this.base64textString[0];
    this.recipe.AddRecipe(this.titulo,this.userName,this.urlReceta);
  }

  onUploadChange(evt: any) {
    const file = evt.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.base64textString.pop();
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
  }


}
