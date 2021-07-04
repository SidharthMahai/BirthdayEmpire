import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Router } from  "@angular/router";
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RelationService {
url: string;
  constructor(public fireservices: AngularFirestore, public  router:  Router, private http:HttpClient) { }


getAllRelations()
{
return this.http.get<any[]>("https://script.google.com/macros/s/AKfycbyDP7uKa3ocJgVQvwqdtvdkaKq7LjL1AsCLbE_OK5ESuZdZZhAv_9-TLiZ0UjmLnAo/exec?action=getAllRelations");
}



}
