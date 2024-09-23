import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CourseCategoryComponent } from "./components/course-category/course-category.component";
import { CategoryList } from '../../data/interfaces/courses-catalog.interface';
import { CatalogService } from '../../core/services/catalog/catalog.service';

@Component({
  selector: 'app-courses-catalog',
  standalone: true,
  imports: [CommonModule, CourseCategoryComponent],
  templateUrl: './courses-catalog.component.html',
  styleUrl: './courses-catalog.component.scss'
})
export class CoursesCatalogComponent {
  public categoryList: CategoryList[] = [];
  #catalogService = inject(CatalogService)

  ngOnInit() {
    this.#catalogService.getCategoryList().subscribe((data: any) => {
      this.categoryList = data
    })


  }
}
