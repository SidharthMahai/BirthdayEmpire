import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   constructor(public auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

}
