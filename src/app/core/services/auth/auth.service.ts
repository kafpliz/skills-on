import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ERegisterApi} from "../../../data/enums/api.enum";
import {IRegData} from "../../../data/interfaces/auth.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // вся логика в Angular делается в сервисах

  private _http = inject(HttpClient)

  /*
  пример пост запроса надо подписываться чтобы запрос пошел
  */

  public register(body: IRegData) {
    return this._http.post(`/api/${ERegisterApi.REGISTER}`, body).subscribe((data) => {
      console.log(data)
    })
  }
}
