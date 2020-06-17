import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private router:Router ) { }

  desactivarUser(userName){
   console.log(userName);
    this.http.delete('http://localhost:3000/delete/'+ userName,userName).subscribe(res => 
    { let registerResponse: any = res;
      console.log(registerResponse);
    }, err => {
      console.log(err);
    })
  }

}
