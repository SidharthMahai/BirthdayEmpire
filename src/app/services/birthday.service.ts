
import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Router } from  "@angular/router";





@Injectable({
  providedIn: 'root'
})
export class BirthdayService {

  constructor(public fireservices: AngularFirestore, public  router:  Router) { }


 monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];




addBirthday(Record)
{
alert("Birthday Added Successfully");
this.router.navigate(['viewbirthdays']);
return this.fireservices.collection('Birthdays').add(Record);
}


updateBirthday(Record, docid)
{
if(window.confirm('Are sure you want to update this birthday ?')){
alert("Birthday Updated Successfully");
this.router.navigate(['viewbirthdays']);
return this.fireservices.doc('Birthdays/' + docid).update(Record);
}
}


deleteBirthday(docid)
{
if(window.confirm('Are sure you want to delete this birthday ?')){
alert("Birthday Deleted Successfully");
this.router.navigate(['viewbirthdays']);
return this.fireservices.doc('Birthdays/' + docid).delete();
}
}




getBirthday(docid)
{

 return this.fireservices.doc('Birthdays/'+docid).valueChanges();

}


getAllBirthdays(uid)
{

return this.fireservices.collection('Birthdays', ref => ref.where('uid', '==', uid).orderBy('month').orderBy('day')).snapshotChanges();

}



getTodayBirthdays(uid)
{
const d = new Date();

return this.fireservices.collection('Birthdays', ref => ref.where('uid', '==', uid).where('month', '==' , d.getMonth()+1).where('day', '==', d.getDate())).snapshotChanges();

}





formatDate(d,m,y)
{
 var t = new Date(y,m-1,d);
return d + ' ' + this.monthNames[t.getMonth()] + ', ' + y;

}



}
