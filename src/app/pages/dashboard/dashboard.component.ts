import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { 

  }

  username;
  photourl;

  ngOnInit(): void {
    this.username = this.auth.currentUser;
  }

  salir(){
    this.auth.logout();
  }
  routeRegister(){
    this.router.navigate(['/register']);        
  }
  AltaReceta(){
    this.router.navigate(['/addrecipe']);
  }

}
