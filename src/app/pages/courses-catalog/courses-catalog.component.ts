import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CourseCategoryComponent } from "./components/course-category/course-category.component";
import { ICategory } from '../../data/interfaces/courses-catalog.interface';
import { CatalogService } from '../../core/services/catalog/catalog.service';
import { BreadCrumbComponent } from "../../shared/common ui/bread-crumb/bread-crumb.component";
import { RouterOutlet } from '@angular/router';
import { PopularCoursesComponent } from "./components/popular-courses/popular-courses.component";

@Component({
  selector: 'app-courses-catalog',
  standalone: true,
  imports: [CommonModule, CourseCategoryComponent, BreadCrumbComponent, RouterOutlet, PopularCoursesComponent],
  templateUrl: './courses-catalog.component.html',
  styleUrl: './courses-catalog.component.scss'
})
export class CoursesCatalogComponent {
  public categoryList: ICategory[] = [];
  #catalogService = inject(CatalogService)

  ngOnInit() {
    
  }
}
