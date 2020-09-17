import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Router } from  "@angular/router";




@Injectable({
  providedIn: 'root'
})
export class RelationService {

  constructor(public fireservices: AngularFirestore, public  router:  Router) { }


getAllRelations()
{

return this.fireservices.collection('Relations', ref => ref.orderBy('relation')).snapshotChanges();

}




}
