import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../Services/firebase/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { JbUser } from '../models/user_model';
import { SelectedServiceService } from '../Services/miscelleneous/selected-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userDetail:any;
user:JbUser;
errMessage:string;

  constructor(private firebaseService:FirebaseService,
    private fns: AngularFireFunctions,
    private db: AngularFirestore,
    private afuth:AngularFireAuth,
    private router:Router,
    private selectedService:SelectedServiceService) { }

  ngOnInit() {
  }

  submit(){
    this.errMessage='';
    this.afuth.auth.signInWithEmailAndPassword(this.user.email,this.user.password).then(
      value=>{
        console.log(value);
        if(value){
          this.userDetail=value.user;
          this.selectedService.setUsr('user',this.userDetail)
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
  }

  loginWithGoogle(){
    let user =this.googleSignin();
    user.then(u=>{
      this.userDetail=u.user;
      this.selectedService.setUsr('user',this.userDetail)
      this.userDetail.sendEmailVerification();
    })
  }


  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afuth.auth.signInWithPopup(provider);
    return credential;
  }

}
