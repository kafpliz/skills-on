import { Injectable, inject } from '@angular/core';
import { IRegData } from '../../../data/interface/auth.interface';
import { authApi } from '../../../shared/enums/authApi.enum';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly #authApi = authApi;
 private http:HttpClient = inject(HttpClient)

  register(data: IRegData) {
    const fd: FormData = new FormData();

    fd.append('first_name', data.first_name)
    fd.append('last_name', data.last_name)
    fd.append('password', data.password)
    fd.append('email', data.email)
    return this.http.post('/api/' + authApi.url + authApi.userData, fd)
    
  }

  sendCode(code:number){
    const data = {code: code}

    return this.http.post('/api/' + authApi.url + authApi.confirm, data )


  }
  getInterests(){
    return this.http.get('/api/' + authApi.url + authApi.interests, )
  }
}
