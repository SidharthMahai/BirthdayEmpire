import { Component, OnInit } from '@angular/core';
import { BirthdayService } from './../../services/birthday.service';
import {AuthService } from './../../user/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'birthdays',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
user: any;
birthdays: any;
loading: boolean = true;

  constructor(private router: Router, private as: BirthdayService, public as1: AuthService) { 

  }

  ngOnInit(): void {
this.as1.getUserState().subscribe( user => {
this.user=user;
 this.as.getAllBirthdays(this.user.uid).subscribe(data => {
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



})






  }






onSelect(birthday)
{
this.router.navigate(['/viewbirthdays',birthday.bid]);
}


onDelete(birthday)                                                                                                                                                                                                 {
  this.as.deleteBirthday(birthday.bid).subscribe(data => {
  },
  err => {
  });
  location.reload();
  } 




}
