import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//images related backend service
export class BackendService {
  deleteImage(id: any) {
    return this.httpClient.delete("http://localhost:8080/meme/delete/"+id);
  }

  constructor(private httpClient:HttpClient) { }
  postData(data:any){
    return this.httpClient.post("http://localhost:8080/meme/image/",data);
  }
  getAllImages(){
    return this.httpClient.get('http://localhost:8080/meme/view-all');
  }
  getImageById(id:any){
    return this.httpClient.get('http://localhost:8080/meme/update',id);
  }
  getImageByActorName(actorName:any){
    return this.httpClient.get('http://localhost:8080/meme/getbyactorname/'+actorName);
  }
 
}
