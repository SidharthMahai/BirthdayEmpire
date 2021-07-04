import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from  '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email: string;
password: string;
user: any;


  constructor(private  authService:  AuthService, private router: Router) { this.checkUser();}

  async checkUser()
  {
    await this.authService.getUserState().subscribe( user => {
    
     if(user) {
     this.user = user;
     this.router.navigate(['/todaybirthdays']);
     }
      })
  }

  ngOnInit(): void {
  }




}

