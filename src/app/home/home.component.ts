import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../user//auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user: any;
   constructor(public auth: AngularFireAuth, public  router:  Router, public as: AuthService) { }

  ngOnInit(): void {
this.as.getUserState().subscribe( user => {
this.user=user;
})
 

 }

}
