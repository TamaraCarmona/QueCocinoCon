import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SearchService } from 'src/app/core/search.service';
import { AuthService } from 'src/app/core/auth.service';
import { ResultComponent } from '../result/result.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-search',
  templateUrl: './add-search.component.html',
  styleUrls: ['./add-search.component.scss']
})
export class AddSearchComponent implements OnInit {
  @ViewChild(ResultComponent) Result: ResultComponent;
  constructor(private search: SearchService, private auth: AuthService, private route:Router) { }

  userName;
  fullMatch;
  seleccionadof;

  ngOnInit(): void {
    this.userName = this.auth.currentUser;
  }

  Search(){   
    this.fullMatch = this.FullMatch();    
    this.search.fullMatch = this.fullMatch;  
    this.Result.LoadResult();
  }

  FullMatch(){      
    if(this.seleccionadof == 1){
      return this.fullMatch = true;
    }else{
      return this.fullMatch = false;
    }
   
  }
  
}
