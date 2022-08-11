import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { UsercommonService } from '../usercommon.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   visible:boolean = false;
  constructor(public nav:NavbarService) { }

  ngOnInit(): void {
    this.nav.showLogin();
    this.nav.showRegister();
    this.nav.hideLogout();
    this.nav.hideProfile();
  }

  

}
