import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';
import { UserbackendService } from '../userbackend.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  registerUser = new FormGroup({
    userName:new FormControl(),
    gender:new FormControl(),
    email:new FormControl(),
    password:new FormControl()
  })
  constructor(private nav:NavbarService,
    private userBackend:UserbackendService,
    private router:Router) { }

  ngOnInit(): void {
  
  }

  getUserDetails(){
    const userData:FormData = new FormData();
    userData.append("name",this.registerUser.controls['userName'].value);
    userData.append("gender",this.registerUser.controls['gender'].value)
    userData.append("email",this.registerUser.controls['email'].value)
    userData.append("password",this.registerUser.controls['password'].value)
    this.userBackend.addUser(userData).subscribe((res:any)=>{
      if(res != null){
        alert("registration successful...")
        this.router.navigate(['login']);
      }else{
        alert("registration failed. try again...")
      }
      
    })
  }

}
