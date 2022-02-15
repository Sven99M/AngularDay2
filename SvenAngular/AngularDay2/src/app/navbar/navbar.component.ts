import { Component, OnInit } from '@angular/core';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  faCrown = faCrown;
  clickCounter :number = 120;
  
  constructor() { }

  countClick(){

    this.clickCounter +=10;

}

ngOnInit() {

}


}
