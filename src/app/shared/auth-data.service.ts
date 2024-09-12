import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthDataService {
  private emailCode :number = 0



  getEmailCode(){
    return this.emailCode
  }
  setEmailCode(code:number){
    this.emailCode = code;
   
  }
  
}
