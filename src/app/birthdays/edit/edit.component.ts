import { Component, OnInit } from '@angular/core';
import { BirthdayService } from './../../services/birthday.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {AuthService } from './../../user/auth.service';
import { ActivatedRoute } from '@angular/router';
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
  constructor( private router: ActivatedRoute, private fs: AngularFirestore, private as: BirthdayService,  private rs: RelationService) { }

  ngOnInit(): void {

this.rs.getAllRelations().subscribe(data => {

this.relations = data.map(e => {
return {
relation: e.payload.doc.data()['relation'],

};
})
});


let docid = this.router.snapshot.paramMap.get('id');
this.id = docid;
this.as.getBirthday(docid).subscribe(data => {

      this.birthday = data;
 this.date= { year: this.birthday.year, month: this.birthday.month, day: this.birthday.day }

    });



 }






updateBirthday()
{
let record = { };
record['name']=this.birthday.name;
record['day']=this.date.day;
record['month']=this.date.month;
record['year']=this.date.year;
record['relation']=this.birthday.relation;
this.as.updateBirthday(record, this.id);
}






}
