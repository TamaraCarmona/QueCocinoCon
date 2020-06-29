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
  

}
