import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserbackendService } from 'src/app/userbackend.service';
import { UsercommonService } from 'src/app/usercommon.service';

@Component({
  selector: 'app-adminedituser',
  templateUrl: './adminedituser.component.html',
  styleUrls: ['./adminedituser.component.css']
})
export class AdminedituserComponent implements OnInit {
  getUserById:any;
  registerUser = new FormGroup({
    userId:new FormControl(),
    logId:new FormControl(),
    userName:new FormControl(),
    gender:new FormControl(),
    email:new FormControl(),
    password:new FormControl()
  })
  constructor(private userBackend:UserbackendService
    ,private userCommon:UsercommonService) { }

  ngOnInit(): void {
    this.userBackend.getSingleUser(this.userCommon.getId()).subscribe((res:any)=>{
      
      this.getUserById = res;
      this.registerUser.patchValue({
        logId : this.getUserById.logId,
        userId : this.getUserById.user.userId,
        userName : this.getUserById.user.userName,
        gender : this.getUserById.user.gender,
        email : this.getUserById.emailId,
        password : this.getUserById.password
      })

    })
  }
  updateUserDetails(){
    const formData:FormData = new FormData();
    formData.append("userid",this.registerUser.controls['userId'].value);
    formData.append("loginid",this.registerUser.controls['logId'].value);
    formData.append("name",this.registerUser.controls['userName'].value);
    formData.append("gender",this.registerUser.controls['gender'].value)
    formData.append("email",this.registerUser.controls['email'].value)
    formData.append("password",this.registerUser.controls['password'].value)
    this.userBackend.updateUser(formData).subscribe((res:any)=>{
      if(res != null){
        alert("updated...")
      }else{
        alert("failed...")
      }
      
    })

  }

}
