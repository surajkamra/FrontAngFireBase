import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
//import { AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
errMessage:String='';


  constructor(private db:AngularFirestore,private fns:AngularFireFunctions) { }

  createUser(modalInput){
    //const callable = this.fns.httpsCallable('my-fn-name');
    //return callable({ name: 'some-data' });
   return this.db.collection('users').add(modalInput);
  }

  getCalender(){
    return {
      day:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,25,27,28,29,30,31],
      month:[{id:1,name:'Jan'},{id:1,name:'Feb'},{id:1,name:'Mar'},{id:1,name:'Apr'},{id:1,name:'May'},{id:1,name:'June'},{id:1,name:'July'},
      {id:1,name:'Aug'},{id:1,name:'Sept'},{id:1,name:'Oct'},{id:1,name:'Nov'},{id:1,name:'Dec'}],
      year:[1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998 ,1999,2000,2001,2002,
      2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019]
    }
  }

  
}
