import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
//import { AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db:AngularFirestore,private fns:AngularFireFunctions) { }

  createUser(modalInput){
    //const callable = this.fns.httpsCallable('my-fn-name');
    //return callable({ name: 'some-data' });
   return this.db.collection('users').add(modalInput);
  }
}
