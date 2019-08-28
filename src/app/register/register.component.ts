import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:''
  }
  confirmShow=false;
  show=false;

  constructor(private firebaseService:FirebaseService,
    private fns: AngularFireFunctions,
    private db: AngularFirestore,
    private afuth:AngularFireAuth) { }

  ngOnInit() {
  }

  submit(){
    this.afuth.auth.createUserWithEmailAndPassword(this.user.email,this.user.confirmPassword).then(
      value=>{
        console.log(value);
        if(value){
          this.db.collection('/users').doc(value.user.uid).set({
            name   : this.user.firstName + this.user.lastName,
            dateModified  : Date.now(),
            lastEntry   : Date.now()
          })
        }
      },
      err=>{
         console.log(err.message)
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

}
