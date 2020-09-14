import { Injectable } from '@angular/core';

import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
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



async login(email: string, password: string) {

    var result = await this.afAuth.signInWithEmailAndPassword(email, password)
alert("Login Successful");     
this.router.navigate(['profile']);
   
}


async register(user) {
    var result = await this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then( userCredential => { this.curruser=user;
userCredential.user.updateProfile({
displayName: user.name
});

  })
.catch(error => 
{
this.eventAuthError.next(error);
})

alert("Registration Successful");                                                                                    
this.router.navigate(['profile']);

}


async sendEmailVerification() {
  
(await this.afAuth.currentUser).sendEmailVerification()
alert("Registration Successful");     
this.router.navigate(['login']);
}



 async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
 }

async  loginWithGoogle(){
    await  this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
    this.router.navigate(['profile']);
}


async logout(){
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    alert("Logout Successful"); 
    this.router.navigate(['']);
}


 getUserState()
{
return this.afAuth.authState;
}



}


