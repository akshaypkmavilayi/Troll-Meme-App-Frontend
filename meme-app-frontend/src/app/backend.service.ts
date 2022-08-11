import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
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
    return this.httpClient.get('http://localhost:8080/meme/update',data);
  }
 
}
