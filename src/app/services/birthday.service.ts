
import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Router } from  "@angular/router";
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';




@Injectable({
  providedIn: 'root'
})
export class BirthdayService {
url: string;
  constructor(public fireservices: AngularFirestore, public  router:  Router, private http:HttpClient) { 
    
  }


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


getAllBirthdays(uid): any
{
 return this.http.get<any>("https://script.google.com/macros/s/AKfycbx2kxLzg-6-p_eeoqbkjIvRieZfvRQ6MeRrKLdzB18zBMpYYX3Rc9y3fTgmkNwAv-G3/exec?action=getAllBirthdays&uid="+uid);
}

fetchUrl()
{
  this.http.get<any>('https://script.google.com/macros/s/AKfycbzuwB2_iF_XCyybklKaabtzWwmvdDstRDuxiEtJ60TYpPhF8pyTnQOL4Pj-pb4kHzM4/exec?action=getApiUrl&name=birthdayempire').subscribe(Data=>{
    this.url = Data[0].url;
    console.log(this.url);
  });
  return this.url;
}



getBirthdaysByMonth(uid,monthno)
{
return this.fireservices.collection('Birthdays', ref => ref.where('uid', '==', uid).where('month', '==', monthno).orderBy('day')).snapshotChanges();
}





getBirthdaysByRelation(uid,relation)
{
if(relation == "Choose Relation")
{
return this.fireservices.collection('Birthdays', ref => ref.where('uid', '==', uid).orderBy('month').orderBy('day')).snapshotChanges();
}
else
{
return this.fireservices.collection('Birthdays', ref => ref.where('uid', '==', uid).where('relation', '==', relation).orderBy('month').orderBy('day')).snapshotChanges();
}
}

getBirthdaysByName(uid,name)
{
if(name == "")
{
return this.fireservices.collection('Birthdays', ref => ref.where('uid', '==', uid).orderBy('month').orderBy('day')).snapshotChanges();
}
else
{
name = name.toLowerCase();
return this.fireservices.collection('Birthdays', ref => ref.where('uid', '==', uid).orderBy('name').startAt(name).endAt(name + '\uf8ff')).snapshotChanges();
}
}




birthdayToday(m,d)
{
var date = new Date();
var day =date.getDate();
var month = date.getMonth()+1;

if( m==month && d==day)
{
return true;
}
else
{
return false;
}


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






calculateAge(y,m,d)
{
var birth_date = new Date(y,m,d);
var birth_date_day = birth_date.getDate();
var birth_date_month = birth_date.getMonth()
var birth_date_year = birth_date.getFullYear();
var today_date = new Date();
var today_day = today_date.getDate();
var today_month = today_date.getMonth()+1;
var today_year = today_date.getFullYear();


if (today_month > birth_date_month) 
{
return today_year - birth_date_year;
}


else if (today_month == birth_date_month)
 {
if (today_day >= birth_date_day)
{
 return today_year - birth_date_year;
}         
   else
{
 return today_year - birth_date_year - 1;
}

}


else 
{
return today_year - birth_date_year - 1;
}


}


}
