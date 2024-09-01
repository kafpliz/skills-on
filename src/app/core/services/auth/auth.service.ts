import { Injectable, inject } from '@angular/core';
import { IRegData } from '../../../shared/interface/auth.interface';
import { authApi } from '../../../shared/enums/authApi.enum';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http: HttpClient = inject(HttpClient)
  public email = ''
  readonly #authApi = authApi;

  register(data: IRegData) {
    const fd: FormData = new FormData();

    fd.append('first_name', data.first_name)
    fd.append('last_name', data.last_name)
    fd.append('password', data.password)
    fd.append('email', data.email)

    console.log(data);
    return this.http.post(authApi.url + authApi.userData, fd)
  }

  setEmail(userEmail: string) {
    return this.email = userEmail
  }
  
  getEmail() {
    return this.email
  }
}
