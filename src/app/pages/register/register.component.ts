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
  urlimagen;
  currentUser=this.auth.currentUser;
  
  base64textString = [];

  save(){    
    this.urlimagen = this.base64textString[0];
     console.log(this.urlimagen);
    if(this.logged){    
      this.auth.update(this.currentUser,this.user,this.apellido,this.email,this.pass,this.dni,this.direccion,this.urlimagen);
    }else{
      this.auth.register(this.userName,this.user,this.apellido,this.email,this.pass,this.dni,this.direccion,this.urlimagen);
    }    
    this.urlimagen = '';
  }

  salir(){   
    
    if(this.logged){
      console.log("entra")
      this.router.navigate(["/dashboard"]);
    }else{     
      console.log("entraLogin")
      this.router.navigate(["/login"]);
    }    
  }

  desactivarCuenta(){
    this.userService.desactivarUser(this.currentUser);
  }

  onUploadChange(evt: any) {
    const file = evt.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.base64textString.pop();
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
  }


}
