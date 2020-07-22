import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { SearchService } from 'src/app/core/search.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  constructor(private auth : AuthService,private search: SearchService) { }
  userName;
  listResult;
  
  ngOnInit(): void {
    
  }

}
