import { CommonModule } from '@angular/common';
import {Component, inject} from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import {RouterLink} from "@angular/router";
import {ERoutes} from "../../../../shared/enums/routes.enum";
import {LocationBackDirective} from "../../../../shared/directives/location-back.directive";
import {BackButtonComponent} from "../back-button/back-button.component";
import {TRANSLATE_KEY_TOKEN} from "../../../../data/tokens/translate-key.token";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, TranslocoDirective, RouterLink, LocationBackDirective, BackButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public readonly ROUTES = ERoutes

  public readonly translateKey = inject(TRANSLATE_KEY_TOKEN)
}
