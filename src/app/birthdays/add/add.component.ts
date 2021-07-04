import { Component, OnInit } from '@angular/core';

import { BirthdayService } from './../../services/birthday.service';
import { RelationService } from './../../services/relation.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {AuthService } from './../../user/auth.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
name: string;
birthday: NgbDateStruct;
relation: string;

now = new Date();
year = this.now.getFullYear();
month = this.now.getMonth();
day = this.now.getDate();
id: string;
user: any;
relations: any;
  constructor(private rs: RelationService, private as: BirthdayService, public as1: AuthService) { }
url: string;
  ngOnInit(): void {

this.rs.getAllRelations().subscribe( data => {
this.relations = data;
},
err => console.error(err));




this.as1.getUserState().subscribe( user => {
this.user=user;
})
}

addBirthday()
{
let record= {};
record['name']=this.name.toLowerCase();
record['day']=this.birthday.day;
record['month']=this.birthday.month;
record['year']=this.birthday.year;
record['relation']=this.relation;
record['uid']=this.user.uid;
this.as.addBirthday(record);
}




resetValues()
{
this.name="";
this.birthday.day=0;
this.birthday.month=0;
this.birthday.year=0;
this.relation="";
}





}
