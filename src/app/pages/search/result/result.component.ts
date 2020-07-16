import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private route:Router) { }

 listResult = [];


  ngOnInit(): void {
  }

 public LoadResult(lista){
    this.listResult = lista;
    console.log(this.listResult)
  }
 OpenRecipe(idReceta){
    this.route.navigate(['/viewrecipe'],idReceta);
    
 }

}
