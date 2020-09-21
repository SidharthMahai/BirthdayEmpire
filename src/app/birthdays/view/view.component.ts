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
user: firebase.User;
birthdays: any;

  constructor(private router: Router, private as: BirthdayService, public as1: AuthService) { }

  ngOnInit(): void {
this.as1.getUserState().subscribe( user => {
this.user=user;
 this.as.getAllBirthdays(this.user.uid).subscribe(data => {

      this.birthdays = data.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          relation: e.payload.doc.data()['relation'],
          date: this.as.formatDate(e.payload.doc.data()['day'],e.payload.doc.data()['month'],e.payload.doc.data()['year']),
          birthdaytoday: this.as.birthdayToday(e.payload.doc.data()['month'],e.payload.doc.data()['day']),
          age: this.as.calculateAge(e.payload.doc.data()['year'],e.payload.doc.data()['month'],e.payload.doc.data()['day']),	 
      };
      })
    });



})






  }






onSelect(birthday)
{
this.router.navigate(['/viewbirthdays',birthday.id]);
}


onDelete(birthday)                                                                                                                                                                                                 {
this.as.deleteBirthday(birthday.id);
}  




}
