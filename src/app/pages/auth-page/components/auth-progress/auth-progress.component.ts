import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-progress.component.html',
  styleUrl: './auth-progress.component.scss'
})
export class AuthProgressComponent {

  #router = inject(Router)
  colors: { first: number, second: number } = {
    first: 10,
    second: 30
  }

  ngOnInit() {
    switch (this.#router.url) {
      case '/auth/register/register':
        this.colors.first = 10
        this.colors.second = 30
        break;
      case '/auth/register/confirm':
        this.colors.first = 55
        this.colors.second = 75
        break;
      case '/auth/register/select':
        this.colors.first = 100
        this.colors.second = 100
        break;


    }
  }
}
