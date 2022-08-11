import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  fileName ="";
  file:File | any;
  imageUploadForm = new FormGroup({
    memeImage:new FormControl(),
   movieName:new FormControl(),
   actors:new FormControl()
  })
  constructor(private backend:BackendService,private router:Router) { }

  ngOnInit(): void {
  }

  onFileSelected(event:any) {  
  
     this.file = event.target.files[0];  

    if (this.file) {  

        this.fileName = this.file.name;  

       

        // const upload$ = this.http.post("/api/thumbnail-upload", formData);  

        // upload$.subscribe();  
    }  
}  

  getData(){
    const formData = new FormData();  

    formData.append("image", this.file); 
    formData.append("movie",this.imageUploadForm.controls['movieName'].value);
    formData.append("name",this.imageUploadForm.controls['actors'].value); 
    this.backend.postData(formData).subscribe((res:any)=>{
    if(res.fileId > 0){
      alert("success...")
    }else{
      alert("failed...")
    }
    });

  }
  goHome(){
    this.router
  }
}  


