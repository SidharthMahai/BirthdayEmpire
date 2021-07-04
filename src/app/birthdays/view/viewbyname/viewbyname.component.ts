import { Component, OnInit } from '@angular/core';

import { BirthdayService } from './../../../services/birthday.service';
import {AuthService } from './../../../user/auth.service';




@Component({
  selector: 'app-viewbyname',
  templateUrl: './viewbyname.component.html',
  styleUrls: ['./viewbyname.component.css']
})
export class ViewbynameComponent implements OnInit {
name: any;

user: any;
birthdays: any;






  constructor(private as: BirthdayService, public as1: AuthService) { }

  ngOnInit(): void {

this.as1.getUserState().subscribe( user => {
this.user=user;
this.name="";
this.getBirthdays();
})







}


getBirthdays()
{

   this.as.getBirthdaysByName(this.user.uid,this.name).subscribe(data => {
                                                                                                                                                                                                                         
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

}






}
