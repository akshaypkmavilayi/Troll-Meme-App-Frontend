import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BrowserModule, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';



import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs/internal/types';

import { BackendService } from '../backend.service';
import { NavbarService } from '../navbar.service';
import { MemecommonService } from '../memecommon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
   image:any[] = [
     
   ];
   getAllImages:any=[];
  preview:any = [];
  url:any = [];
  dataURL :any= [];
  
  
  constructor(private backend:BackendService,private sanitizer: DomSanitizer,
    private navbar:NavbarService,private nav:NavbarService, private memeSerivice:MemecommonService,
    private router:Router) { }

  ngOnInit(): void {
    
    this.backend.getAllImages().subscribe((res:any)=>{
        this.getAllImages = res;
        this.createBlobImageFileAndShow();
        
       });
  }
  //data uri to blob conversion
 dataURItoBlob(dataURI: string): Observable<Blob> {
    
    return Observable.create((observer: Observer<Blob>) => {
      const byteString: string = atob(dataURI);
     
      const arrayBuffer: ArrayBuffer = new ArrayBuffer(byteString.length);
      const int8Array: Uint8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < byteString.length; i++) {
        int8Array[i] = byteString.charCodeAt(i);
        
      }
      const blob = new Blob([int8Array], { type: "image/jpeg" });
      observer.next(blob);
      observer.complete();
    });
  }

  //  /**Method that will create Blob and show in new window */
  async createBlobImageFileAndShow(): Promise<void> {
    for(let i=0;i<this.getAllImages.length;i++){
     
    
     this.dataURItoBlob(this.getAllImages[i].memeImage).subscribe(async (blob: Blob) => {
       const imageBlob: Blob = blob;
       // console.log(imageBlob);
       const imageName: string = this.getAllImages[i].fileName;

       const movieName:string = this.getAllImages[i].movieDetails.movieName;
      //  console.log(movieName);
      const memeId:number = this.getAllImages[i].memeId;
      // console.log(memeId);
      const actors:string = this.getAllImages[i].actorName;
      // console.log(actors);
      const time:string = this.getAllImages[i].timeStamp;
      const date:Date = new Date(time)
      const day:number = date.getUTCDate();
      const m:number = date.getMonth();
      const month:string = this.toMonthName(m);
      const year:number = date.getFullYear();
       

      
      // console.log(year);
       const imageFile: File = new File([imageBlob], imageName, {

        
         
         type: "image/jpeg",
      });
      //convert blob url to data url 
      this.dataURL[i] = await new Promise(r => {let a=new FileReader(); a.onload=r; a.readAsDataURL(imageFile)});
      
      this.image[i] = this.dataURL[i];
      this.image[i].id = memeId;
      this.image[i].movie = movieName;
      this.image[i].actor = this.actorNameToArray(actors);
      // console.log(this.actorNameToArray(actors))
      this.image[i].timeS =day+'/'+month+'/'+year;
      this.image[i].fName = imageName;
      
       
   });

        
}

// console.log(this.image)
  }
  toMonthName(monthNumber:number) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', {
      month: 'long',
    });
  }

  downloadMeme(dataurl:any, filename:any){
        const link = document.createElement("a");
        link.href = dataurl;
        link.download = filename;
        link.click();
     }
     actorNameToArray(actorNames : any){
      
      
        var actorNameArray = new Array();
        if(actorNames.includes(',')){
          actorNameArray = actorNames.split(',');
        }else{
          actorNameArray = [actorNames];
        }
        return actorNameArray;
        
      
     }
     //TODO: need logic to render the memes with the actor name
     getMemesofTheActor(actorName : any){
      this.memeSerivice.setActor(actorName);
      this.router.navigate(['memesOfTheActor']);
     }
  }
 


 
  



