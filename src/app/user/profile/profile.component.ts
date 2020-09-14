import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

user: firebase.User;

  constructor(private as: AuthService) { }

  ngOnInit(): void {
this.as.getUserState().subscribe( user => {
this.user=user;
})


  }

}

