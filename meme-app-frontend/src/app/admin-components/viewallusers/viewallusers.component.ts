import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserbackendService } from 'src/app/userbackend.service';
import { UsercommonService } from 'src/app/usercommon.service';

@Component({
  selector: 'app-viewallusers',
  templateUrl: './viewallusers.component.html',
  styleUrls: ['./viewallusers.component.css']
})
export class ViewallusersComponent implements OnInit {
  allUsers:any;
  constructor(private userBackend:UserbackendService
    , private router:Router
    ,private userCommon:UsercommonService) { }

  ngOnInit(): void {
    this.userBackend.viewAllUsers().subscribe((res:any)=>{
      this.allUsers = res;
      console.log(this.allUsers);
    })
    
  }
  deleteDataId(id:any){
    this.userBackend.deleteById(id).subscribe((res:any) => {
      console.log(res);
      // this.router.navigate(['viewAllUsers'])
      
    })
    window.location.reload();
  }

  editDataId(id:any){
   this.userCommon.sendId(id);
   this.router.navigate(['adminEditUser']);
  }
}
