import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CourseCategoryComponent } from "./components/course-category/course-category.component";
import { ICategory } from '../../data/interfaces/courses-catalog.interface';
import { CatalogService } from '../../core/services/catalog/catalog.service';
import { BreadCrumbComponent } from "../../shared/common ui/bread-crumb/bread-crumb.component";

@Component({
  selector: 'app-courses-catalog',
  standalone: true,
  imports: [CommonModule, CourseCategoryComponent, BreadCrumbComponent],
  templateUrl: './courses-catalog.component.html',
  styleUrl: './courses-catalog.component.scss'
})
export class CoursesCatalogComponent {
  public categoryList: ICategory[] = [];
  #catalogService = inject(CatalogService)

  ngOnInit() {
    this.#catalogService.getCategoryList().subscribe((data) => {
      console.log(data);
      
      this.categoryList = data
    })


  }
}
