import { CommonModule } from '@angular/common';
import {Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AuthService} from "../../core/services/auth/auth.service";
import {TranslocoDirective} from "@jsverse/transloco";
import {TRANSLATE_KEY_TOKEN} from "../../core/tokens/translate-key.token";
import {IRegData} from "../../data/interfaces/auth.interface";


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslocoDirective],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  providers: [
    {
      provide: TRANSLATE_KEY_TOKEN,
      useValue: 'authPage'
    }
  ]
})
export class AuthComponent{
  private _authService = inject(AuthService)
  public translateKey = inject(TRANSLATE_KEY_TOKEN)

  /*представим что нажали кнопку register так скрываем что-то в компонентах не работает с данными никак*/
  public onRegister() {
    this._authService.register({} as IRegData)
  }

}
