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

  constructor(private router: Router, private as: BirthdayService, public as1: AuthService) { }

  ngOnInit(): void {
this.as1.getUserState().subscribe( user => {
this.user=user;
 this.as.getAllBirthdays(this.user.uid).subscribe(data => {
console.log(data);
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
