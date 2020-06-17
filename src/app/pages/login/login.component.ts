import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  username;
  password;

  ngOnInit(): void {
    if(this.auth.islogged) {
      this.router.navigate(['/dashboard']);
    }  
  } 

  login(){
    this.auth.login(this.username,this.password); 
  }
  Register(){
    this.router.navigate(['/register']);
  }
 

}
