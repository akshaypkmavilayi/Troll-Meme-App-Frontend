import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';
import { UserbackendService } from '../userbackend.service';
import { UsercommonService } from '../usercommon.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn:boolean = false;
  loginDetails = [{
    login:{
      email:'',
      password:''
    }
   }];
   loginResult:any;
  loginForm = new FormGroup({
    email : new FormControl(),
    password:new FormControl()
  })
  constructor(private userBackend:UserbackendService,
    private userCommon:UsercommonService,
    private router:Router,private nav:NavbarService) { }

  ngOnInit(): void {
    this.nav.showLogin();
    this.nav.showRegister();
    this.nav.hideLogout();
    this.nav.hideProfile();
    
  }
  getData(){
   
    
    
      const formData:FormData = new FormData();
      formData.append("email",this.loginForm.controls['email'].value)
      formData.append("password",this.loginForm.controls['password'].value);
      
   
    
    
    // console.log(this.loginDetails)
    this.userBackend.setData(formData).subscribe((res:any)=>{
      if(res != null){
       this.loginResult = res;
       console.log(this.loginResult);
       if(this.loginResult.emailId == "admin@gmail.com" &&  this.loginResult.password == "admin"){
        this.userCommon.getUser(this.loginResult);
        this.router.navigate(['adminWelcome']);
      }else{
       this.userCommon.getUser(this.loginResult);
       this.router.navigate(['home']);
       this.nav.hideLogin();
       this.nav.hideRegister();
       this.nav.showProfile();
       this.nav.showLogout();
      }
        
      }else{
        this.isLoggedIn = false;
        
        this.router.navigate(['register']);
      }

    
    })
    
  }
}
