import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  #cookiService = inject(CookieService)
  isLogin: boolean = true;

  ngOnInit() {
    if (this.#cookiService.get('access') && this.#cookiService.get('refresh')) {
      this.isLogin = true

    } else {
      this.isLogin = false

    }
  }

}
