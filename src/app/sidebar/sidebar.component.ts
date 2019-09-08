import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

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


  constructor(private router:Router,
    private fireService:FirebaseService) { }

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

 

}
