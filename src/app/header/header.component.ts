import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isSlideShow=false;
  constructor() { }

  ngOnInit() {
  }

  openWindow(){
    window.open("C:\Users\sudhanshu\Pictures", null);
  }

  
}
