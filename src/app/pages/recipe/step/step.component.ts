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
  fila;
  ngOnInit(): void {
  }

  AddStep(){
    let Paso = { 
     descripcion : this.descripcion,
     numeroPaso : this.numeroPaso,
  }

    this.listPasos.push(Paso);
    this.recipe.listPasos = this.listPasos;
    this.descripcion = '';
    this.urlFoto = '';
  }
  addFoto(){
    let foto = { 
     urlfoto : this.urlFoto,
     pos : this.posicion,
   } 
    this.listFoto.push(foto);
    this.recipe.listFotos = this.listFoto;
  }

  onUploadChange(evt: any,i) {
    const file = evt.target.files[0];
    console.log(i)
    this.fila = i;
    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {            
   console.log(this.fila)
    this.base64textString[this.fila] = ('data:image/png;base64,' + btoa(e.target.result));      
    this.listFoto[this.fila] = this.base64textString[this.fila];     
  }

  deletestep(step){
    
  }

}
