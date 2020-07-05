import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/search.service';

@Component({
  selector: 'app-add-search',
  templateUrl: './add-search.component.html',
  styleUrls: ['./add-search.component.scss']
})
export class AddSearchComponent implements OnInit {

  constructor(private search : SearchService) { }

  ngOnInit(): void {
  }

  Search(){
    
  }

}
