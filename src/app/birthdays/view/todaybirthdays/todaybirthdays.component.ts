import { Component, OnInit } from '@angular/core';
import { BirthdayService } from './../../../services/birthday.service';
import {AuthService } from './../../../user/auth.service';




@Component({
  selector: 'todaybirthdays',
  templateUrl: './todaybirthdays.component.html',
  styleUrls: ['./todaybirthdays.component.css']
})
export class TodaybirthdaysComponent implements OnInit {
user: firebase.User;
birthdays: any;


  constructor(private as: BirthdayService, public as1: AuthService) { }

  ngOnInit(): void {
  

this.as1.getUserState().subscribe( user => {
this.user=user;
 this.as.getTodayBirthdays(this.user.uid).subscribe(data => {

      this.birthdays = data.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          relation: e.payload.doc.data()['relation'],
           date: this.as.formatDate(e.payload.doc.data()['day'],e.payload.doc.data()['month'],e.payload.doc.data()['year']),
           age: this.as.calculateAge(e.payload.doc.data()['year'],e.payload.doc.data()['month'],e.payload.doc.data()['day']),
      };
      })
    });



})






}

}
