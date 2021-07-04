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

  constructor(private rs: RelationService, private as: BirthdayService, public as1: AuthService) { }

  ngOnInit(): void {


this.rs.getAllRelations().subscribe( data => {
this.relations = data.map(e => {
        return {

relation: e.payload.doc.data()['relation'],

};
})
});


this.as1.getUserState().subscribe( user => {
this.user=user;
this.relation="Choose Relation";
this.getBirthdays();
})




  }



getBirthdays()
{

   this.as.getBirthdaysByRelation(this.user.uid,this.relation).subscribe(data => {
                                                                                                                                                                                                                         
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
