import { Component } from '@angular/core';
//import { FirebaseService } from './firebase.service';
//import { AngularFireDatabase } from '@angular/fire/database';
//import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
//import { AngularFireFunctions } from '@angular/fire/functions';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jokes';
  modalInput={};
  data$:any;

  constructor(
    private router:Router,
    private db: AngularFirestore
    ){
      
  }





  getUsers(){
    return this.db.collection('/users').valueChanges();
  }

  ngOnInit(){
   this.getUsers().subscribe(it=>{
     console.log(it)
     it.forEach(p=>{
       if(p['email']=='suraj.kamra123'){
             console.log(p);
       }
     })
   })
   }
}


