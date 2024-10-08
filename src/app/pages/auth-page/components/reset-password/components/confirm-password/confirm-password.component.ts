import { Component,inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../../../core/services/auth/auth.service';
import { IEnterCodeForm } from '../../../../../../data/interfaces/reset-password-form.interface';
import { CommonModule } from '@angular/common';
import { ERoutes } from '../../../../../../shared/enums/routes/routes.enum';

@Component({
  selector: 'app-confirm-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './confirm-password.component.html',
  styleUrl: './confirm-password.component.scss'
})
export class ConfirmPasswordComponent {
  isMoving: boolean = false
  #fb = inject(FormBuilder)
  public formValid: boolean = true
  public resetPaswordForm!: FormGroup<IEnterCodeForm>
  public errText = 'Заполните обязательные поля';
  public buttonValid: boolean = false;
  #authService = inject(AuthService)
  #router = inject(Router)
  #activatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    this.resetPaswordForm = this.#fb.nonNullable.group({
      code: ['', [Validators.required, Validators.maxLength(6), Validators.minLength(6)]]
    })
  }

  moveLabel() {
    this.isMoving = true
    this.formValid = true
  }
  checkInp() {


  }
  sendCode(){
    if(this.resetPaswordForm.valid){
  
      let code = +this.resetPaswordForm.getRawValue().code

      this.#authService.RSendCode({code}).subscribe(data=> {
      
        this.#router.navigate([ '../' + ERoutes.UPDATE], { relativeTo: this.#activatedRoute })
      })
    }
    
  }
 
}
