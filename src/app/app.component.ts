import { Component } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { AngularFireDatabase } from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jokes';
  modalInput={};
  data$:any;

  constructor(private firebaseService:FirebaseService,
    private fns: AngularFireFunctions,
    private db: AngularFirestore,
    private afuth:AngularFireAuth){

  }

  submit(){
    this.afuth.auth.createUserWithEmailAndPassword('surajkumarkamra234@gmail.com','Abc@1234').then(
      value=>{
        console.log(value);
        if(value){
          this.db.collection('/users').doc(value.user.uid).set({
            name : 'suraj',
            lastEntry : '1/10/1332',
            dateModified : '1/10/1552'
          })
        }

      }
    )
    // const callable = this.fns.httpsCallable('createUserWithEmailAndPassword');
    // this.data$ = callable({"data":{ email: 'some-data',password:'sfkg' }})
    // this.data$.subscribe(it=>{
    //   console.log(it);
    // })
    // this.firebaseService.createUser(this.modalInput).then(it=>{
    //   console.log(it);
    // })
  }

  getUsers(){
    return this.db.collection('/users').valueChanges();
  }

  ngOnInit(){
   this.getUsers().subscribe(it=>{
     console.log(it)
     it.forEach(p=>{
       if(p['name']=='suraj'){
             console.log(p);
       }
     })
   })
  }
}
