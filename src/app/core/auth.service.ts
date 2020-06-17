import { Injectable } from '@angular/core';
import createAuth0Client from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { from, of, Observable, BehaviorSubject, combineLatest, throwError } from 'rxjs';
import { tap, catchError, concatMap, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  currentUser;
 

  islogged = false;
  token;
  constructor(private http:HttpClient, private router:Router) {
    const token = localStorage.getItem('recetastoken');  
    console.log(token);
    if(token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const expiration = decodedToken.expire;
      if(expiration > Date.now()){       
        localStorage.removeItem('recetastoken');
      } else {
        this.islogged = true;
        this.token = token;
        this.currentUser = decodedToken.user;
      }
    } else {
      this.islogged = false;
    }

  }

  login(username,password){
    const user = {
   //   userName: username,
   //   userPassword: password,
    };
    this.http.post('http://localhost:3000/login' , {name:username,pass:password},)
    .subscribe(res => {
      let LoginResponse: any  = res;

    //  this.token = LoginResponse.token;

    //  localStorage.setItem('recetastoken', this.token);

    //  let decodedToken = JSON.parse(atob(this.token.split('.')[1]));
    //  this.currentUser = decodedToken.user;
   //   console.log(decodedToken.user.Nombre);
           
      this.islogged = true;
      
      console.log(LoginResponse);
      this.currentUser = LoginResponse.idUsuario;     

      this.router.navigate(['/dashboard']);
    }, err => {
      console.log(err);
      this.logout();
    });
  }

  register(userName,user,apellido,email,pass,dni,direccion){
    const register = {
         userName,
         name: user,
         apellido:apellido,
         pass: pass,
         email:email,
         dni:dni,
         direccion:direccion
       };

    this.http.post('http://localhost:3000/register', {register} ).subscribe(res=>{
      let registerResponse: any = res;
      console.log(registerResponse);
      if(registerResponse){
        this.currentUser = registerResponse.idUsuario; 
        this.islogged = true;
        this.router.navigate(['/dashboard']);
      }else{        
        this.logout();
      }
    }, err => {
      console.log(err);
      this.logout();
    }
    )
  }


  update(nombre,user,apellido,email,pass,dni,direccion){
    const register = {    
      userName:nombre,
      name: user,
      apellido:apellido,
      pass: pass,
      email:email,
      dni:dni,
      direccion:direccion
    };
   
    this.http.put('http://localhost:3000/register/'+ nombre , {register} ).subscribe(res=>{
      let registerResponse: any = res;
      console.log(registerResponse);
      if(registerResponse){
        this.islogged = true;
        this.router.navigate(['/dashboard']);
      }else{        
        this.logout();
      }
    }, err => {
      console.log(err);
      this.logout();
    }
    )
  }

  AddRecipe(tipoReceta,nombre,userName,categoria,urlfoto){
    const receta = {
         userName:userName,
         tipoReceta: tipoReceta,
         nombre:nombre,
         categoria: categoria,
         foto:urlfoto,         
       };

    this.http.post('http://localhost:3000/receta', {receta} ).subscribe(res=>{
      let recetaResponse: any = res;
      console.log(recetaResponse);
      if(recetaResponse){         
        this.islogged = true;
        this.router.navigate(['/receta']);
      }else{        
        this.logout();
      }
    }, err => {
      console.log(err);
      this.logout();
    }
    )
  }

  logout(){
    this.islogged = false;
    localStorage.removeItem('recetastoken');
    this.router.navigate(['/login']);
  }


  //----------AUTH0--------------//

  // // Create an observable of Auth0 instance of client
  // auth0Client$ = (from(
  //   createAuth0Client({
  //     domain: environment.domain ,
  //     client_id: environment.cliente ,
  //     redirect_uri: environment.redirect 
  //   })
  // ) as Observable<Auth0Client>).pipe(
  //   shareReplay(1), // Every subscription receives the same shared value
  //   catchError(err => throwError(err))
  // );
  // // Define observables for SDK methods that return promises by default
  // // For each Auth0 SDK method, first ensure the client instance is ready
  // // concatMap: Using the client instance, call SDK method; SDK returns a promise
  // // from: Convert that resulting promise into an observable
  // isAuthenticated$ = this.auth0Client$.pipe(
  //   concatMap((client: Auth0Client) => from(client.isAuthenticated())),
  //   tap(res => this.loggedIn = res)
  // );
  // handleRedirectCallback$ = this.auth0Client$.pipe(
  //   concatMap((client: Auth0Client) => from(client.handleRedirectCallback()))
  // );
  // // Create subject and public observable of user profile data
  // private userProfileSubject$ = new BehaviorSubject<any>(null);
  // userProfile$ = this.userProfileSubject$.asObservable();
  // // Create a local property for login status
  // loggedIn: boolean = null;

  // constructor(private router: Router) {
  //   // On initial load, check authentication state with authorization server
  //   // Set up local auth streams if user is already authenticated
  //   this.localAuthSetup();
  //   // Handle redirect from Auth0 login
  //   this.handleAuthCallback();
  // }

  // // When calling, options can be passed if desired
  // // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser
  // getUser$(options?): Observable<any> {
  //   return this.auth0Client$.pipe(
  //     concatMap((client: Auth0Client) => from(client.getUser(options))),
  //     tap(user => this.userProfileSubject$.next(user))
  //   );
  // }

  // private localAuthSetup() {
  //   // This should only be called on app initialization
  //   // Set up local authentication streams
  //   const checkAuth$ = this.isAuthenticated$.pipe(
  //     concatMap((loggedIn: boolean) => {
  //       if (loggedIn) {
  //         // If authenticated, get user and set in app
  //         // NOTE: you could pass options here if needed
  //         return this.getUser$();
  //       }
  //       // If not authenticated, return stream that emits 'false'
  //       return of(loggedIn);
  //     })
  //   );
  //   checkAuth$.subscribe();
  // }

  // login(redirectPath: string = '/') {
  //   // A desired redirect path can be passed to login method
  //   // (e.g., from a route guard)
  //   // Ensure Auth0 client instance exists
  //   this.auth0Client$.subscribe((client: Auth0Client) => {
  //     // Call method to log in
  //     client.loginWithRedirect({
  //       redirect_uri: environment.redirect,
  //       appState: { target: redirectPath }
  //     });
  //     this.loggedIn = true;
  //   });
  // }

  // private handleAuthCallback() {
  //   // Call when app reloads after user logs in with Auth0
  //   const params = window.location.search;
  //   if (params.includes('code=') && params.includes('state=')) {
  //     let targetRoute: string; // Path to redirect to after login processsed
  //     const authComplete$ = this.handleRedirectCallback$.pipe(
  //       // Have client, now call method to handle auth callback redirect
  //       tap(cbRes => {
  //         // Get and set target redirect route from callback results
  //         targetRoute = '/dashboard';
  //       }),
  //       concatMap(() => {
  //         // Redirect callback complete; get user and login status
  //         return combineLatest([
  //           this.getUser$(),
  //           this.isAuthenticated$
  //         ]);
  //       })
  //     );
  //     // Subscribe to authentication completion observable
  //     // Response will be an array of user and login status
  //     authComplete$.subscribe(([user, loggedIn]) => {
  //       console.log(user , loggedIn);
  //       this.currentUser = user; 
  //       // Redirect to target route after callback processing
  //       this.router.navigate([targetRoute]);
  //     });
  //   }
  // }

  // logout() {
  //   // Ensure Auth0 client instance exists
  //   this.auth0Client$.subscribe((client: Auth0Client) => {
  //     // Call method to log out
  //     client.logout({
  //       client_id: environment.cliente,
  //       returnTo: environment.redirectLogout,
  //     });
  //   });
  //   this.loggedIn = false;
  // }

}