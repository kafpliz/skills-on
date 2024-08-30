import {Component, inject} from '@angular/core';
import {TranslocoDirective} from "@jsverse/transloco";
import {TRANSLATE_KEY_TOKEN} from "../../../../data/tokens/translate-key.token";

@Component({
  selector: 'app-email-confirm',
  standalone: true,
  imports: [
    TranslocoDirective
  ],
  templateUrl: './email-confirm.component.html',
  styleUrl: './email-confirm.component.scss'
})
export class EmailConfirmComponent {
  public readonly translateKey = inject(TRANSLATE_KEY_TOKEN)
}
