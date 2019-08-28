import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showSide=false;
  constructor() { }

  ngOnInit() {
  }

  toggle(){
   let element= document.getElementsByClassName("siderNav")[0];
   element['style'].right = '0px';
  }

}
