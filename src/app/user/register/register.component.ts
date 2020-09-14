import { Component, OnInit } from '@angular/core';


import { AngularFireAuth } from  "@angular/fire/auth";
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

email: string;
password: string;
name: string;
authError: any;


  constructor(private as: AuthService) { }

  ngOnInit(): void {

this.as.eventAuthError$.subscribe( data => {
this.authError=data;
})
}



createUser()
{
let user= {};
user['email']=this.email;
user['password']=this.password;
user['name']=this.name;


this.as.register(user);


}


googleSignIn()
{
this.as.loginWithGoogle();
}








}
