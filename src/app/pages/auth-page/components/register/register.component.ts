import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from "../../../../core/services/auth/auth.service";
import { TranslocoDirective } from "@jsverse/transloco";
import { TRANSLATE_KEY_TOKEN } from "../../../../core/tokens/translate-key.token";
import { IRegData } from "../../../../data/interfaces/auth.interface";
import {RouterLink, RouterOutlet} from "@angular/router";
import {ERoutes} from "../../../../shared/enums/routes.enum";
import {LocationBackDirective} from "../../../../shared/directives/location-back.directive";
import {BackButtonComponent} from "../back-button/back-button.component";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslocoDirective, RouterLink, LocationBackDirective, BackButtonComponent, RouterOutlet],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private _authService = inject(AuthService)
  public readonly translateKey = inject(TRANSLATE_KEY_TOKEN)
  public readonly ROUTES = ERoutes

  /*представим что нажали кнопку register-form так скрываем что-то в компонентах не работает с данными никак*/
  public onRegister() {
    this._authService.register({} as IRegData)
  }

}
