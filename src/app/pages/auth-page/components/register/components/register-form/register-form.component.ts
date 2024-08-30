import {Component, inject} from '@angular/core';
import {ERoutes} from "../../../../../../shared/enums/routes.enum";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslocoDirective} from "@jsverse/transloco";
import {RouterLink} from "@angular/router";
import {TRANSLATE_KEY_TOKEN} from "../../../../../../data/tokens/translate-key.token";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TranslocoDirective,
    RouterLink
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {

  protected readonly ROUTES = ERoutes;
  public readonly translateKey = inject(TRANSLATE_KEY_TOKEN)
}
