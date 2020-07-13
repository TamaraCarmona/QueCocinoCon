import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SearchService } from 'src/app/core/search.service';
import { AuthService } from 'src/app/core/auth.service';
import { ResultComponent } from '../result/result.component';



@Component({
  selector: 'app-add-search',
  templateUrl: './add-search.component.html',
  styleUrls: ['./add-search.component.scss']
})
export class AddSearchComponent implements OnInit {
  @ViewChild(ResultComponent) Result: ResultComponent;
  constructor(private search: SearchService, private auth: AuthService) { }

  userName;
  
  ngOnInit(): void {
    this.userName = this.auth.currentUser;
  }

  Search(){
   let listRpta = [];
    this.search.Search(this.userName).subscribe(res => {
      let recetaResponse: any = res;
      listRpta = recetaResponse; 
      this.Result.LoadResult(listRpta);
      }, err => {
        console.log(err);
      });
   
  }

}
