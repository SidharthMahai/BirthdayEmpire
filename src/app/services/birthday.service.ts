
import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Router } from  "@angular/router";
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';




@Injectable({
  providedIn: 'root'
})
export class BirthdayService {
url: string = "https://script.google.com/macros/s/AKfycbzczj5Ac-U2jntLc5Fd89hqnD92_9jfZDzzMQ08DQgbGqdCBosgN63kiHyRY_2wIFJD/exec";
  constructor(public fireservices: AngularFirestore, public  router:  Router, private http:HttpClient) { 
    
  }


 monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];



getRandomId()
{
  return Math.random().toString(36).substr(2, 7);
}


addBirthday(name,day,month,year,relation,uid,bid)
{
  return this.http.get<any>(this.url+"?action=addBirthday&uid="+uid + "&name="+name+ "&day="+day+ "&month="+month+ "&year="+year+"&relation="+relation + "&bid="+bid);
}


updateBirthday(name,day,month,year,relation,uid,bid)
{
  return this.http.get<any>(this.url+"?action=updateBirthday&uid="+uid + "&name="+name+ "&day="+day+ "&month="+month+ "&year="+year+"&relation="+relation + "&bid="+bid);
}


deleteBirthday(bid)
{
if(window.confirm('Are sure you want to delete this birthday ?')){
  alert("Birthday Deleted Successfully");
  this.router.navigate(['viewbirthdays']);
  return this.http.get<any>(this.url+"?action=deleteBirthday&bid="+bid);
}
}




getBirthday(docid,uid)
{
  return this.http.get<any>(this.url+"?action=getBirthday&bid="+docid+"&uid="+uid);
}


getAllBirthdays(uid)
{
 return this.http.get<any>(this.url+"?action=getAllBirthdays&uid="+uid);
}


getBirthdaysByMonth(uid,monthno)
{
  return this.http.get<any>(this.url+"?action=getBirthdaysByMonth&uid="+uid+"&month="+monthno);
}





getBirthdaysByRelation(uid,relation)
{
if(relation == "Choose Relation")
{
return this.getAllBirthdays(uid);
}
else
{
  return this.http.get<any>(this.url+"?action=getBirthdaysByRelation&uid="+uid+"&relation="+relation.toLowerCase());
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
  return this.http.get<any>(this.url+"?action=getTodayBirthdays&uid="+uid);
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
