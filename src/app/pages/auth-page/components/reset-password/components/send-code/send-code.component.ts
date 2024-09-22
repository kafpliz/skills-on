import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IResetPasswordForm } from '../../../../../../data/interfaces/reset-password-form.interface';
import { AuthService } from '../../../../../../core/services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ERoutes } from '../../../../../../shared/enums/routes.enum';


@Component({
  selector: 'app-send-code',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './send-code.component.html',
  styleUrl: './send-code.component.scss'
})
export class SendCodeComponent {
  isMoving: boolean = false
  #fb = inject(FormBuilder)
  public formValid: boolean = true
  public resetPaswordForm!: FormGroup<IResetPasswordForm>
  public errText = 'Заполните обязательные поля';
  public buttonValid: boolean = false;
  #authService = inject(AuthService)
  #router = inject(Router)
  #activatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    this.resetPaswordForm = this.#fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  moveLabel() {
    this.isMoving = true
    this.formValid = true
  }
  checkInp() {

    if (!this.resetPaswordForm.value.email?.length && !this.resetPaswordForm.valid) {
      this.isMoving = false
 
      this.formValid = false
    } else if (!this.resetPaswordForm.valid) {
      this.formValid = false;
      this.errText = 'Email не валиден!'
    }

  }

  sendEmail() {
    if (this.formValid && this.resetPaswordForm.valid) {
    
    
      this.#authService.RsendEmail(this.resetPaswordForm.getRawValue()).subscribe(data=>{
        console.log(data);
        this.#router.navigate([ '../' + ERoutes.CONFIRM], { relativeTo: this.#activatedRoute })
      })

    }
  }
}
