import { Injectable } from '@angular/core';

import { Router } from  "@angular/router";

import { AngularFireAuth } from  "@angular/fire/auth";

import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  curruser:any;

private eventAuthError = new BehaviorSubject<string>("");
eventAuthError$ = this.eventAuthError.asObservable();

  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) {


this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;

        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })



 }




logout(){

if(window.confirm('Are sure you want to logout ?')){
    this.afAuth.signOut().then(()=> {
    alert("Logout Successful"); 
    this.router.navigate(['home']);
    });
}
}


 getUserState()
{
return this.afAuth.authState;
}



}


