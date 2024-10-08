import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { RouterLink } from "@angular/router";
import { ERoutes } from "../../../../shared/enums/routes/routes.enum";
import { LocationBackDirective } from "../../../../shared/directives/location-back.directive";
import { BackButtonComponent } from "../back-button/back-button.component";
import { TRANSLATE_KEY_TOKEN } from "../../../../data/tokens/translate-key.token";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router, } from "@angular/router";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, TranslocoDirective, RouterLink, LocationBackDirective, BackButtonComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public readonly ROUTES = ERoutes

  public readonly translateKey = inject(TRANSLATE_KEY_TOKEN)
  isValid: boolean = true
  errorText: string = 'Заполните обязательные поля!'
  loginForm: FormGroup;
  #authService = inject(AuthService)
  #cookieService = inject(CookieService)

  #activatedRoute = inject(ActivatedRoute)
  #router: Router = inject(Router)

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  login() {
   
    if (this.loginForm.valid) {
      this.isValid = true
      this.#authService.login(this.loginForm.value).subscribe((data: any) => {
        
        this.#cookieService.set('access', data.access)
        this.#cookieService.set('refresh', data.refresh)

        this.#router.navigate([ERoutes.HOME], { relativeTo: this.#activatedRoute })

      })
    } else {
      this.isValid = false
      console.log(300);

    }
  }

}
