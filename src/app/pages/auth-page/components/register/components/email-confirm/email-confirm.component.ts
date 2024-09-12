import { Component, inject } from '@angular/core';
import { TranslocoDirective } from "@jsverse/transloco";
import { TRANSLATE_KEY_TOKEN } from "../../../../../../data/tokens/translate-key.token";
import { AuthDataService } from '../../../../../../shared/auth-data.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../../../core/services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ERoutes } from '../../../../../../shared/enums/routes.enum';

@Component({
  selector: 'app-email-confirm',
  standalone: true,
  imports: [
    TranslocoDirective,
    FormsModule
  ],
  templateUrl: './email-confirm.component.html',
  styleUrl: './email-confirm.component.scss'
})
export class EmailConfirmComponent {
  public readonly translateKey = inject(TRANSLATE_KEY_TOKEN)
  #authData: AuthDataService = inject(AuthDataService)
  #authService: AuthService = inject(AuthService)
  public emailCode: number | any
  #router: Router = inject(Router)
  #activatedRoute = inject(ActivatedRoute)

  sendCode() {
    console.log(this.emailCode);
    this.#authService.sendCode(this.emailCode).subscribe((data: any) => {
      console.log(data);
        this.#router.navigate(['../' +ERoutes.SELECT], { relativeTo: this.#activatedRoute })
    })
  }

}
