import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
@Input() sideBarClass;
user:any;
userdata={};
cal_data:any;
downloadURL:any;


  constructor(private router:Router,
    private fireService:FirebaseService,
    private store: AngularFireStorage,
    ) { }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem('user'));
    this.cal_data=this.fireService.getCalender();
    console.log(this.user);
  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }

  editProfile(){

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
            this.user.photoURL=url
            
          });
        }
        )
      ).subscribe();
    }
  }
  }

 


