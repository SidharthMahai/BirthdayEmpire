import { Component, OnInit } from '@angular/core';
import { BirthdayService } from './../../services/birthday.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {AuthService } from './../../user/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { RelationService } from './../../services/relation.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})


export class EditComponent implements OnInit {
id: string;

birthday:any;
relations: any;
date: NgbDateStruct;
now = new Date();
year = this.now.getFullYear();
month = this.now.getMonth();
day = this.now.getDate();
user: any;
  constructor( private router: ActivatedRoute, public  router2:  Router,private fs: AngularFirestore, private rs: RelationService, private as: BirthdayService, public as1: AuthService) { }

  ngOnInit(): void { 

    this.rs.getAllRelations().subscribe( data => {
      this.relations = data;
    });
    
    this.as1.getUserState().subscribe( user => {
      this.user=user;
      let docid = this.router.snapshot.paramMap.get('id');
this.id = docid;
this.as.getBirthday(docid,this.user.uid).subscribe(data => {
      this.birthday = data[0];
 this.date= { year: this.birthday.year, month: this.birthday.month, day: this.birthday.day }
    });
      })
      





 }






updateBirthday()
{
  if(window.confirm("Are you sure you want to update this birthday?")) {
this.as.updateBirthday(this.birthday.name,this.date.day,this.date.month,this.date.year,this.birthday.relation,this.user.uid,this.birthday.bid).subscribe(data => {

});
alert("Birthday Updated Successfully");
this.router2.navigate(['viewbirthdays']);
}
}






}
