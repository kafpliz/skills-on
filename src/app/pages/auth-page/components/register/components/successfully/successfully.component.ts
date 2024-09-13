import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ERoutes } from '../../../../../../shared/enums/routes.enum';

@Component({
  selector: 'app-successfully',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './successfully.component.html',
  styleUrl: './successfully.component.scss'
})
export class SuccessfullyComponent {
  protected readonly ROUTES = ERoutes;
}
