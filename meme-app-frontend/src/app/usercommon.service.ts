import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsercommonService {
  user:any = null;
  userId:any;
  constructor() { }
  getUser(data:any){
      this.user = data;
      console.log(data);
    }
    setUser(){
      return this.user;
    }
   sendId(id:any){
    this.userId = id;
   }
   getId(){
     return this.userId;
   }
}
