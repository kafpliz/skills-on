import {Component, inject} from '@angular/core';
import {LocationBackDirective} from "../../../../shared/directives/location-back.directive";
import {TRANSLATE_KEY_TOKEN} from "../../../../core/tokens/translate-key.token";
import {TranslocoDirective} from "@jsverse/transloco";

@Component({
  selector: 'app-back-button',
  standalone: true,
  imports: [
    LocationBackDirective,
    TranslocoDirective
  ],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.scss'
})
export class BackButtonComponent {
  public readonly authKey = inject(TRANSLATE_KEY_TOKEN)
}
