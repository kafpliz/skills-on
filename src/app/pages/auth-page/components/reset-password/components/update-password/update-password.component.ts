import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { INewPasswordForm } from '../../../../../../data/interfaces/reset-password-form.interface';
import { AuthService } from '../../../../../../core/services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ERoutes } from '../../../../../../shared/enums/routes.enum';
import { CvaInputComponent } from "../../../../../../shared/cva/cva-input/cva-input.component";


@Component({
  selector: 'app-update-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CvaInputComponent],
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.scss'
})
export class UpdatePasswordComponent implements OnInit {
  isMoving: boolean = false
  #fb = inject(FormBuilder)

  public formValid: boolean = true
  public resetPaswordForm!: FormGroup<INewPasswordForm>
  public errText = 'Заполните обязательные поля';
  public buttonValid: boolean = false;

  #authService = inject(AuthService)
  #router = inject(Router)
  #activatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    this.resetPaswordForm = this.#fb.nonNullable.group({
      password: ['', [Validators.required, Validators.maxLength(20), ]]
    })
  }

  moveLabel() {
    this.isMoving = true
    this.formValid = true
  }
  checkInp() {


  }
  send(){
    console.log(this.resetPaswordForm.value);
    
  }
}
