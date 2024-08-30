import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {AuthPageHeaderComponent} from "./components/auth-page-header/auth-page-header.component";
import {TRANSLATE_KEY_TOKEN} from "../../data/tokens/translate-key.token";

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    RouterOutlet,
    AuthPageHeaderComponent
  ],
  providers: [
    {
      provide: TRANSLATE_KEY_TOKEN,
      useValue: 'authPage'
    }
  ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss'
})
export class AuthPageComponent {

}
