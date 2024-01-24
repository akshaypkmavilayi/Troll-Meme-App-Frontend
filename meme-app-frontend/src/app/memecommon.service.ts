import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemecommonService {
  actorName:any;

  constructor() { }
  setActor(actorName : any){
    this.actorName = actorName;
  }
  getActor(){
    return this.actorName;
  }
}
