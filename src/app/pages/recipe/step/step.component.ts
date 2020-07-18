import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/core/recipe.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  constructor(private recipe: RecipeService) { }

  listPasos = [];
  listFoto = [];
  
  descripcion;
  numeroPaso; //Posicion de la lista
  urlFoto;
  posicion;
  base64textString = [];

  ngOnInit(): void {
  }

  AddStep(){
    let Paso = { 
     descripcion : this.descripcion,
     numeroPaso : this.numeroPaso,
  }

    this.listPasos.push(Paso);
    this.recipe.listPasos = this.listPasos;
  }
  addFoto(){
    let foto = { 
     urlfoto : this.urlFoto,
     pos : this.posicion,
   } 
    this.listFoto.push(foto);
    this.recipe.listFotos = this.listFoto;
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
    for(let i = 0; this.listFoto.length < 2 ;i++){
        this.listFoto.push(this.base64textString[0]);     
    }  
    console.log(this.listFoto.length)      
  }
  

}
