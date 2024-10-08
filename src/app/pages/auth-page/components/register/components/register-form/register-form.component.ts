import { Component, inject, output, } from '@angular/core';
import { ERoutes } from "../../../../../../shared/enums/routes/routes.enum";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { TranslocoDirective } from "@jsverse/transloco";
import { ActivatedRoute, Route, Router, RouterLink } from "@angular/router";
import { TRANSLATE_KEY_TOKEN } from "../../../../../../data/tokens/translate-key.token";
import { AuthService } from '../../../../../../core/services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { AuthDataService } from '../../../../../../shared/auth-data.service';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TranslocoDirective,
    RouterLink,
    CommonModule
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',

})
export class RegisterFormComponent {
  userForm: FormGroup;
  isValid: boolean = true;
  deal: boolean = true;
  protected readonly ROUTES = ERoutes;
  public readonly translateKey = inject(TRANSLATE_KEY_TOKEN)
  #activatedRoute = inject(ActivatedRoute)
  #authService: AuthService = inject(AuthService)
  #router: Router = inject(Router)
  #authData: AuthDataService = inject(AuthDataService)
  errorText: string = 'Заполните все обязательные поля!'

  constructor() {
    this.userForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      deal: new FormControl('', [Validators.required]),
    })

  }


  onRegister() {

  
    if (this.userForm.valid && this.userForm.value.deal) {
      console.log(this.userForm.value);
      if (this.userForm.value.password != this.userForm.value.confirmPassword) {
        this.errorText = 'Пароли не совпадают!'
        this.isValid = false;
      } else {
        this.#authService.register(this.userForm.value).subscribe((data: any) => {
          console.log(data);
            this.#authData.setEmailCode(data.code)
            this.#router.navigate([ ERoutes.CONFIRM], { relativeTo: this.#activatedRoute })
        })

      }
    

    } else {
      this.isValid = false;
    }
  }
}
