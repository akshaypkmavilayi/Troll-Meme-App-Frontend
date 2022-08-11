import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserbackendService {

  constructor(private httpClient:HttpClient) { }
  addUser(data:any){
    return this.httpClient.post("http://localhost:8080/user/register-user",data);
  }
  setData(data:any){
  return this.httpClient.post("http://localhost:8080/user/login/",data);
  }
  getSingleUser(id:any){
    return this.httpClient.get("http://localhost:8080/user/view-single-user/"+id);
  }
  updateUser(data:any){
    return this.httpClient.put("http://localhost:8080/user/update-user/",data);
  }
  viewAllUsers(){
    return this.httpClient.get("http://localhost:8080/user/view-all-user");
  }
  deleteById(id:any){
    
    return this.httpClient.delete("http://localhost:8080/user/delete-user/"+id);
  }
}
