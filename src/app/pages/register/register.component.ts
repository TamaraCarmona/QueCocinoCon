import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { concat } from 'rxjs';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router, private userService: UserService) { }

  logged;

  ngOnInit(): void {
    this.logged = this.auth.islogged;
  }
 
  user;
  userName;
  apellido;
  email;
  pass;
  dni;
  direccion;
  currentUser=this.auth.currentUser;

  save(){
    if(this.logged){    
      this.auth.update(this.currentUser,this.user,this.apellido,this.email,this.pass,this.dni,this.direccion);
    }else{
      this.auth.register(this.userName,this.user,this.apellido,this.email,this.pass,this.dni,this.direccion);
    }    
  }

  salir(){   
    if(this.logged){
      this.router.navigate["/dashboard"];
    }else{     
      this.router.navigate["/login"];
    }    
  }

  desactivarCuenta(){
    this.userService.desactivarUser(this.currentUser);
  }
}
