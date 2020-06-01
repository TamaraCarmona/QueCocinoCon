import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth:AuthService) { 

  }

  username;
  photourl;

  ngOnInit(): void {
    this.username = this.auth.currentUser;
  }

  salir(){
    this.auth.logout();
  }

}
