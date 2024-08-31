import { Injectable } from '@angular/core';
import { IRegData } from '../../../shared/interface/auth.interface';
import { authApi } from '../../../shared/enums/authApi.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authApi: authApi) { }

  register(data: IRegData) {
    console.log(data);
    
  }
}
