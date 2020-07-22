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
  base64textString = []; 

  fila;
  paso;

  ngOnInit(): void {
    this.paso = { 
        descripcion : '',      
        listFoto  : [],        
    }

  }

  AddStep(){  
    this.listPasos.push(this.paso);
    this.recipe.listPasos = this.listPasos;  
    this.paso = { 
      descripcion : '',      
      listFoto  : [],  
    }
   
  }


  addFoto(){
  /*  let foto = { 
     urlfoto : this.urlFoto,
     pos : this.posicion,
   } 
    this.listFoto.push(foto);
    this.recipe.listFotos = this.listFoto;*/
  }

  onUploadChange(evt: any,i) {
    const file = evt.target.files[0];
    console.log(i,"i")
   this.fila = i;
    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {   
    let base64 = 'data:image/png;base64,' + btoa(e.target.result);
    console.log(this.fila, "fila")    
    this.base64textString[this.fila] = base64;
    this.paso.listFoto[this.fila] = this.base64textString[this.fila];

  }

  deletestep(seleccionado){
      for (let paso of this.listPasos) {     
        if (paso.step == seleccionado){
          this.listPasos.splice(this.listPasos.indexOf(seleccionado), 1);
          break;
      }      
    }
  }

}
