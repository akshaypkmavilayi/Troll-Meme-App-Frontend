import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';
import { UsercommonService } from 'src/app/usercommon.service';

@Component({
  selector: 'app-admineditimage',
  templateUrl: './admineditimage.component.html',
  styleUrls: ['./admineditimage.component.css']
})
export class AdmineditimageComponent implements OnInit {

  fileName ="";
  file:File | any;
  imageUploadForm = new FormGroup({
    memeImage:new FormControl(),
   movieName:new FormControl(),
   actors:new FormControl()
  })
  constructor(private backend:BackendService,private router:Router,
    private userCommon:UsercommonService) { }

  ngOnInit(): void {
    this.backend.getImageById(this.userCommon.getId()).subscribe((res:any)=>{
      console.log(res);
    })
  }

  onFileSelected(event:any) {  
  
    this.file = event.target.files[0];  

   if (this.file) {  

       this.fileName = this.file.name;  

      

       // const upload$ = this.http.post("/api/thumbnail-upload", formData);  

       // upload$.subscribe();  
   }  
}
updateData(){

}

}
