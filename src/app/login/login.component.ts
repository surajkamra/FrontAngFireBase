import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    email:'',
    password:''
  }

  constructor(private firebaseService:FirebaseService,
    private fns: AngularFireFunctions,
    private db: AngularFirestore,
    private afuth:AngularFireAuth,) { }

  ngOnInit() {
  }

  submit(){
    this.afuth.auth.signInWithEmailAndPassword(this.user.email,this.user.password).then(
      value=>{
        console.log(value);
        if(value){
          this.db.collection('/users').doc(value.user.uid).set({
            lastEntry  : Date.now(),
            dateModified  : Date.now(),
            emailVerified  : value.user.emailVerified,
            phoneNumberVerified :value.user.phoneNumber ? true : false
          })
        }
      },
      err=>{
         console.log("user not found")
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

  loginWithGoogle(){
    let user =this.googleSignin();
    console.log(user);
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afuth.auth.signInWithPopup(provider);
    return credential;
  }

}
