import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from "../../../../core/services/auth/auth.service";
import { TranslocoDirective } from "@jsverse/transloco";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { ERoutes } from "../../../../shared/enums/routes/routes.enum";
import { LocationBackDirective } from "../../../../shared/directives/location-back.directive";
import { BackButtonComponent } from "../back-button/back-button.component";
import { TRANSLATE_KEY_TOKEN } from "../../../../data/tokens/translate-key.token";
import { AuthProgressComponent } from '../auth-progress/auth-progress.component';
import { AuthTitleComponent } from '../auth-title/auth-title.component';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslocoDirective, RouterLink, LocationBackDirective, BackButtonComponent, RouterOutlet, AuthProgressComponent, AuthTitleComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  checkbox: boolean = true;
  #router:Router = inject(Router)
  title:string = 'Регистрация'
  number:number = 10;
  isStepper:boolean = true
  public readonly translateKey = inject(TRANSLATE_KEY_TOKEN)
  public readonly ROUTES = ERoutes

  constructor(private authService: AuthService) { }

  ngOnInit(){
    switch (this.#router.url ) {

      case '/auth/register/successfully':
        this.title = 'Регистрация прошла успешно!'
        this.isStepper = false
        break;
    
     
    }
   
    
  }

}
