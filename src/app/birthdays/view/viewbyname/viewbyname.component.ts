import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { BirthdayService } from './../../../services/birthday.service';
import {AuthService } from './../../../user/auth.service';




@Component({
  selector: 'app-viewbyname',
  templateUrl: './viewbyname.component.html',
  styleUrls: ['./viewbyname.component.css']
})
export class ViewbynameComponent implements OnInit {
name: string = "";
loading: boolean = true;
user: any;
birthdays: any;
birthdaysbyname: any;





  constructor(private as: BirthdayService, public as1: AuthService, private router: Router) { }

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
    this.birthdaysbyname = this.birthdays;
    }
        });
    
    
    
    })
    
    
    
    
    
    
      }
    


getBirthdays()
{    
if(this.name)
{                                                                                                                                                                                                        
this.birthdaysbyname = this.birthdays.filter(e => {                                                                                                                                                                                    
return e.name.toLowerCase().indexOf(this.name.toLowerCase()) !== -1                                                                                                                                                                                                                                                                                                                           
});
}
else{
this.birthdaysbyname = this.birthdays;
}
}



onDelete(birthday)                                                                                                                                                                                                 {
  this.as.deleteBirthday(birthday.bid).subscribe(data => {
  },
  err => {
  });
  location.reload();
  } 

  onSelect(birthday)
  {
  this.router.navigate(['/viewbirthdays',birthday.bid]);
  }
}
