import { Component, inject,Input  } from '@angular/core';
import { TRANSLATE_KEY_TOKEN } from "../../../../data/tokens/translate-key.token";

@Component({
  selector: 'app-auth-title',
  standalone: true,
  imports: [],
  templateUrl: './auth-title.component.html',
  styleUrl: './auth-title.component.scss'
})
export class AuthTitleComponent {
  @Input() title:string = ''

  public readonly translateKey = inject(TRANSLATE_KEY_TOKEN)
}
