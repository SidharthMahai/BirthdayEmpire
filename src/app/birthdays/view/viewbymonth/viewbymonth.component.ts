import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BirthdayService } from './../../../services/birthday.service';
import {AuthService } from './../../../user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewbymonth',
  templateUrl: './viewbymonth.component.html',
  styleUrls: ['./viewbymonth.component.css']
})
export class ViewbymonthComponent implements OnInit {
month:any;
user: any;
birthdays: any;
loading: boolean = true;
date = new Date();
monthno:any;


  constructor(private as: BirthdayService, public as1: AuthService) { }

  ngOnInit(): void {

this.as1.getUserState().subscribe( user => {
this.user=user;
this.monthno = this.date.getMonth();
this.month = moment.months(this.monthno);
this.getBirthdays();
})


  }



  getBirthdays()
  {
  this.loading = true;
  this.as.getBirthdaysByMonth(this.user.uid, parseInt(moment().month(this.month).format("M"))).subscribe(data => {
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
    });
  }                                                                                                                                                                                                  
   });
  }
  



}
