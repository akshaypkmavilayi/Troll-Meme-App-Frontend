import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserbackendService } from '../userbackend.service';
import { UsercommonService } from '../usercommon.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  getData:any;

  updateUser = new FormGroup({
    userId:new FormControl(),
    loginId:new FormControl(),
    userName : new FormControl(),
    gender:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
  });

  editedUser = {
    'user':{
      'userId':0,
      'userName':'',
      'gender':''
    },
    'login':{
      'loginId':0,
      'email':'',
      'password':''
    }
  }

  constructor(private userCommon:UsercommonService,private userBackend:UserbackendService) { }

  ngOnInit(): void {
    this.userBackend.getSingleUser(this.userCommon.getId()).subscribe((res:any) =>{
      this.getData = res;
      console.log(this.getData);
      this.updateUser.patchValue({
        userId : this.getData.user.userId,
        loginId: this.getData.logId,
        userName : this.getData.user.userName,
        gender : this.getData.user.gender,
        email : this.getData.emailId,
        
      })
    });
  }

  updateData(){
    // this.editedUser.user.userId = this.updateUser.controls['userId'].value;
    // this.editedUser.user.userName = this.updateUser.controls['userName'].value;
    // this.editedUser.user.gender = this.updateUser.controls['gender'].value;

    // this.editedUser.login.loginId = this.updateUser.controls['loginId'].value;
    // this.editedUser.login.email = this.updateUser.controls['email'].value;
    // this.editedUser.login.password = this.updateUser.controls['password'].value;


    const formData:FormData = new FormData();
    formData.append("userid",this.updateUser.controls['userId'].value);
    formData.append("loginid", this.updateUser.controls['loginId'].value);
    formData.append("name",this.updateUser.controls['userName'].value);
    formData.append("gender", this.updateUser.controls['gender'].value);
    formData.append("email",  this.updateUser.controls['email'].value);
    formData.append("password",this.updateUser.controls['password'].value);
      if(this.updateUser.controls['password'].value == this.getData.password){
        alert("password match...")
      
      this.userBackend.updateUser(formData).subscribe((res:any)=>{
        console.log(res);
      })
    
    }else{
      alert("password missmatch, try again...")
    }
    
    

    console.log(this.editedUser);
  }
}
