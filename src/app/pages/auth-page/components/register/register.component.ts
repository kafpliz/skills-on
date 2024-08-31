import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from "../../../../core/services/auth/auth.service";
import { TranslocoDirective } from "@jsverse/transloco";
import { RouterLink, RouterOutlet } from "@angular/router";
import { ERoutes } from "../../../../shared/enums/routes.enum";
import { LocationBackDirective } from "../../../../shared/directives/location-back.directive";
import { BackButtonComponent } from "../back-button/back-button.component";
import { TRANSLATE_KEY_TOKEN } from "../../../../data/tokens/translate-key.token";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslocoDirective, RouterLink, LocationBackDirective, BackButtonComponent, RouterOutlet],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  checkbox: boolean = true;

  public readonly translateKey = inject(TRANSLATE_KEY_TOKEN)
  public readonly ROUTES = ERoutes

  constructor(private authService: AuthService) { }

  

}
