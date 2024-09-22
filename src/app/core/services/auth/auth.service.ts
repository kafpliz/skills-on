import { Injectable, inject } from '@angular/core';

import { authApi } from '../../../shared/enums/authApi.enum';
import { HttpClient } from '@angular/common/http';
import { IReg } from '../../../data/interfaces/registr.interface';
import {ISendCode, ISendEmail } from '../../../data/interfaces/reset-password-form.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private http:HttpClient = inject(HttpClient)

  register(data: IReg) {
    const fd: FormData = new FormData();

    fd.append('first_name', data.first_name)
    fd.append('last_name', data.last_name)
    fd.append('password', data.password)
    fd.append('email', data.email)
    return this.http.post('/api/' + authApi.urlReg + authApi.userData, fd)
    
  }

  sendCode(code:number){
    const data = {code: code}

    return this.http.post('/api/' + authApi.urlReg + authApi.confirm, data )


  }
  getInterests(){
    return this.http.get('/api/' + authApi.urlReg + authApi.interests, )
  }
  postInterests(data:any){
    return this.http.post('/api/' + authApi.urlReg + authApi.interests, data)
  }

  login(data:any){
    const fd: FormData = new FormData();
    fd.append('password', data.password)
    fd.append('email', data.email)
    return this.http.post('/api/' + authApi.urlLog , fd)
  }

  RsendEmail(email:ISendEmail){
    return this.http.post('/api/' + authApi.resetPassword, email)
  }
  RSendCode(code:ISendCode){
    return this.http.post('/api/' + authApi.resetPassword + authApi.emailConfirm, code)
  }

}
