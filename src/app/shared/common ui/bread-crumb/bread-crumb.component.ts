import { CommonModule } from '@angular/common';
import { Component,inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IBreadcrumb } from '../../../data/interfaces/breadcrumb.interface';

@Component({
  selector: 'app-bread-crumb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bread-crumb.component.html',
  styleUrl: './bread-crumb.component.scss'
})
export class BreadCrumbComponent {
 
}
