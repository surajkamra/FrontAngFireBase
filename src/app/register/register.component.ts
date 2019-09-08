import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userDetail:any;
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
    private afuth:AngularFireAuth,
    private router:Router) { }

  ngOnInit() {
  }

  submit(){
    this.afuth.auth.createUserWithEmailAndPassword(this.user.email,this.user.confirmPassword).then(
      value=>{
        console.log(value);
        if(value){
          this.userDetail=value.user;
          this.db.collection('/users').doc(this.userDetail.uid).set({
            name   : this.user.firstName + this.user.lastName,
            dateModified  : Date.now(),
            lastEntry   : Date.now()
          })
          this.userDetail.sendEmailVerification();
          this.router.navigate(['/login']);
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
