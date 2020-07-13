import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from 'src/app/core/search.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private search : SearchService) { }

 listResult = [];


  ngOnInit(): void {
  }

 public LoadResult(lista){
    this.listResult = lista;
    console.log(this.listResult)
  }


}
