import { Component, OnInit } from '@angular/core';
import { BirthdayService } from './../../../services/birthday.service';
import {AuthService } from './../../../user/auth.service';
import * as moment from 'moment';





@Component({
  selector: 'todaybirthdays',
  templateUrl: './todaybirthdays.component.html',
  styleUrls: ['./todaybirthdays.component.css']
})
export class TodaybirthdaysComponent implements OnInit {
user: any;
birthdays: any;
date: any;
loading: boolean = true;
now = new Date();
curyear = this.now.getFullYear();

  constructor(private as: BirthdayService, public as1: AuthService) { }

  ngOnInit(): void {
  this.date=moment().format('LL');

this.as1.getUserState().subscribe( user => {
this.user=user;
 this.as.getTodayBirthdays(this.user.uid).subscribe(data => {

      this.birthdays = data;
      this.loading = false;
      if(data[0].error) {
        this.birthdays = null;
      }
      else {
      this.birthdays.forEach(birthday => {
  birthday.date = this.as.formatDate(birthday.day,birthday.month,birthday.year);
  birthday.birthdaytoday = this.as.birthdayToday(birthday.month, birthday.day);
  birthday.age = this.as.calculateAge(birthday.year,birthday.month,birthday.day);
      })
    }
    });



})






}

}
