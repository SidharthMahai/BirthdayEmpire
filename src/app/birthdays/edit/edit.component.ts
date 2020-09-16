import { Component, OnInit } from '@angular/core';
import { BirthdayService } from './../../services/birthday.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {AuthService } from './../../user/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})


export class EditComponent implements OnInit {
id: string;
name: string;
relation: string;


birthday:any;

  constructor(private router: ActivatedRoute, private fs: AngularFirestore, private as: BirthdayService) { }

  ngOnInit(): void {
let docid = this.router.snapshot.paramMap.get('id');
this.id = docid;
this.as.getBirthday(docid).subscribe(data => {

      this.birthday = data;

    });



 }






updateBirthday()
{
let record = { };
record['name']=this.birthday.name;
//record['day']=this.day;
//record['month']=this.month;
//record['year']=this.year;
//record['relation']=this.relation;
this.as.updateBirthday(record, this.id);
}






}
