import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/search.service';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-add-search',
  templateUrl: './add-search.component.html',
  styleUrls: ['./add-search.component.scss']
})
export class AddSearchComponent implements OnInit {

  constructor(private search : SearchService, private auth: AuthService) { }

  userName;
  ngOnInit(): void {
    this.userName = this.auth.currentUser;
  }

  Search(){
    this.search.Search(this.userName);
  }

}
