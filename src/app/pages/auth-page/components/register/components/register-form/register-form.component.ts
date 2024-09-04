import { Component, inject } from '@angular/core';
import { ERoutes } from "../../../../../../shared/enums/routes.enum";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { TranslocoDirective } from "@jsverse/transloco";
import { ActivatedRoute, Route, Router, RouterLink } from "@angular/router";
import { TRANSLATE_KEY_TOKEN } from "../../../../../../data/tokens/translate-key.token";
import { AuthService } from '../../../../../../core/services/auth/auth.service';
import { CommonModule } from '@angular/common';

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

  constructor(private authService: AuthService, private router: Router) {
    this.userForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      deal: new FormControl('', [Validators.required]),

    })
  }

  onRegister() {

    if (this.userForm.valid && this.userForm.value.deal) {

      this.authService.register(this.userForm.value)
      this.router.navigate([ERoutes.CONFIRM], { relativeTo: this.#activatedRoute })
    } else {
      this.isValid = false;
    }
  }
}
