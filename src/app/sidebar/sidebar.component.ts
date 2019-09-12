import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../Services/firebase/firebase.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, map } from 'rxjs/operators';
import { NgStyle } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { SelectedServiceService } from '../Services/miscelleneous/selected-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
@Input() sideBarClass;
user:any;
userdata={};
downloadURL:any;


  constructor(private router:Router,
    private fireService:FirebaseService,
    private store: AngularFireStorage,
    private afuth:AngularFireAuth,
    private db: AngularFirestore,
    private selectedService:SelectedServiceService
    ) { }

  ngOnInit() {
    this.user=this.selectedService.getUsr('user');
    this.getProfile();
  }

  logout(){
    this.selectedService.removeUsr('user') 
    this.router.navigate(['/login'])
  }

  editProfile(){
    this.db.collection('/users').doc(this.user.uid).set({
      name : this.user.displayName,
      bio : this.user.biography,
      profileImageUrl:this.user.photoURL,
    })
    this.getProfile()
  }

  getProfile(){
       this.db.collection("/user").doc(this.user.uid).snapshotChanges().subscribe(
         it=>{
           let payloaddata=it.payload.data();
           this.user={...this.user,payloaddata}; 
         }
       );
  }

  uploadImage(event){
    let file = event.target.files[0];
    // tslint:disable-next-line:prefer-const
    let path = `user/${this.user.uid}/${file.name}`;
    if (file.type.split('/')[0] !== 'image') {
      return alert('Erreur, ce fichier n\'est pas une image');
    } else {
      // tslint:disable-next-line:prefer-const
      let ref = this.store.ref(path);
      // tslint:disable-next-line:prefer-const
      let task = this.store.upload(path, file);
     // this.uploadPercent = task.percentageChanges();
      console.log('Image chargée avec succès');
      task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = ref.getDownloadURL();
          this.downloadURL.subscribe(url => {
            this.user.photoURL=url;
          });
        }
        )
      ).subscribe();
    }
  }
  }

 


