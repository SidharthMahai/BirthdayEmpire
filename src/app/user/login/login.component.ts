import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email: string;
password: string;


  constructor(private  authService:  AuthService) { }

  ngOnInit(): void {
  }

loginUser()
{
this.authService.login(this.email,this.password);
}


googleSignIn()
{
this.authService.loginWithGoogle();
}


facebookSignIn()
{
this.authService.loginWithFacebook();
}


}

