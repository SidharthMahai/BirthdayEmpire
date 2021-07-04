import { Component, OnInit } from '@angular/core';
import { BirthdayService } from './../../../services/birthday.service';
import {AuthService } from './../../../user/auth.service';
import { Router } from '@angular/router';
import { RelationService } from './../../../services/relation.service';


@Component({
  selector: 'app-viewbyrelation',
  templateUrl: './viewbyrelation.component.html',
  styleUrls: ['./viewbyrelation.component.css']
})
export class ViewbyrelationComponent implements OnInit {
user: any;
birthdays: any;
relation: any;
relations: any;
loading:boolean = true;

  constructor(private rs: RelationService, private as: BirthdayService, public as1: AuthService) { }

  ngOnInit(): void {


this.rs.getAllRelations().subscribe( data => {
  this.relations = data;
});


this.as1.getUserState().subscribe( user => {
this.user=user;
this.relation="Choose Relation";
this.getBirthdays();
})




  }



getBirthdays()
{
this.loading = true;
   this.as.getBirthdaysByRelation(this.user.uid,this.relation).subscribe(data => {
                                                                                                                                                                                 
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
