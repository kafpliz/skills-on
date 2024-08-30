import { Component } from '@angular/core';
import {BackButtonComponent} from "../back-button/back-button.component";

@Component({
  selector: 'app-auth-page-header',
  standalone: true,
  imports: [
    BackButtonComponent
  ],
  templateUrl: './auth-page-header.component.html',
  styleUrl: './auth-page-header.component.scss'
})
export class AuthPageHeaderComponent {

}
