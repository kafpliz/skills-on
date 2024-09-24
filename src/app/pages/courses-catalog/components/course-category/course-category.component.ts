import { CommonModule } from '@angular/common';
import { Component, input, inject } from '@angular/core';
import { CatalogService } from '../../../../core/services/catalog/catalog.service';
import { CourseCardComponent } from "../course-card/course-card.component";
import { ICategoryLink, ICourse } from '../../../../data/interfaces/courses-catalog.interface';
import { RouterLink } from '@angular/router';
import { CategoryLink } from '../../../../data/constans/catalog-constans/catalog-link';

@Component({
  selector: 'app-course-category',
  standalone: true,
  imports: [CommonModule, CourseCardComponent, RouterLink],
  templateUrl: './course-category.component.html',
  styleUrl: './course-category.component.scss'
})
export class CourseCategoryComponent {
  public category = input('')
  #catalogService = inject(CatalogService)
  courses: ICourse[] = []
  CategoryLink:ICategoryLink[] = CategoryLink

  ngOnInit() {
    this.#catalogService.getCategoryCourse(this.category()).subscribe(data => {
      this.courses = data
    })
  }

}
