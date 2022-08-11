import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';
import { UsercommonService } from '../usercommon.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  userData:any;
  constructor(private nav:NavbarService,
    private userCommon:UsercommonService,private router:Router) { }

  ngOnInit(): void {
    this.userData = this.userCommon.setUser();
    console.log(this.userData.user.userName); 
  }
 editData(id:any){
  this.userCommon.sendId(id);
  this.router.navigate(['edit']);
 }

}
