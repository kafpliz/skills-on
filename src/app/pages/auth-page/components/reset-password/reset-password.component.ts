import { Component, inject } from '@angular/core';
import { AuthTitleComponent } from "../auth-title/auth-title.component";
import { AuthProgressComponent } from "../auth-progress/auth-progress.component";
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [AuthTitleComponent, AuthProgressComponent, RouterOutlet, CommonModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  title: string = 'Восстановление пароля'
  #router = inject(Router)
  isStepper:boolean = true

  ngOnInit() {

    switch (this.#router.url) {

      case '/auth/reset/successfully':
        this.title = 'Пароль успешно изменён!'
        this.isStepper = false
        break;


    }
  }
}
