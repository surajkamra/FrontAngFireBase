import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { stringify } from '@angular/core/src/render3/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userDetail:any;
  user={
    email:'',
    password:''
  }
  errMessage:String;

  constructor(private firebaseService:FirebaseService,
    private fns: AngularFireFunctions,
    private db: AngularFirestore,
    private afuth:AngularFireAuth,
    private router:Router) { }

  ngOnInit() {
  }

  submit(){
    this.errMessage='';
    this.afuth.auth.signInWithEmailAndPassword(this.user.email,this.user.password).then(
      value=>{
        console.log(value);
        if(value){
          this.userDetail=value.user;
          this.setUser(this.userDetail)
          this.db.collection('/users').doc(this.userDetail.uid).set({
            lastEntry  : Date.now(),
            dateModified  : Date.now(),
            emailVerified  : value.user.emailVerified,
            phoneNumberVerified :value.user.phoneNumber ? true : false
          })
    
          this.router.navigate(['/home']);
        }
      },
      err=>{
        if(err && err.message)
         this.errMessage=err.message;
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
    user.then(u=>{
      this.userDetail=u.user;
      this.setUser(this.userDetail);
      this.userDetail.sendEmailVerification();
    })
  }

  setUser(user){
    localStorage.setItem('user',JSON.stringify(user));
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afuth.auth.signInWithPopup(provider);
    return credential;
  }

}
