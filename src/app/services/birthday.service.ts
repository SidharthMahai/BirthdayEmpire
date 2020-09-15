import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Router } from  "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class BirthdayService {

  constructor(public fireservices: AngularFirestore, public  router:  Router) { }


addBirthday(Record)
{
alert("Birthday Added Successfully");
this.router.navigate(['viewbirthdays']);
return this.fireservices.collection('Birthdays').add(Record);
}

}
