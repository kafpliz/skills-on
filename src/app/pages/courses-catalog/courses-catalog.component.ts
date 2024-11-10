import { CommonModule } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import { CourseCategoryComponent } from "./components/course-category/course-category.component";
import { ICategory, IResCourse } from '../../data/interfaces/courses-catalog.interface';
import { CatalogService } from '../../core/services/catalog/catalog.service';
import { BreadCrumbComponent } from "../../shared/common ui/bread-crumb/bread-crumb.component";
import { RouterOutlet } from '@angular/router';
import { PopularCoursesComponent } from "./components/popular-courses/popular-courses.component";
import { CoursesFilterComponent } from "./components/courses-filter/courses-filter.component";
import { CourseCardComponent } from './components/course-card/course-card.component';

@Component({
  selector: 'app-courses-catalog',
  standalone: true,
  imports: [CommonModule, CourseCategoryComponent, BreadCrumbComponent, PopularCoursesComponent, CoursesFilterComponent, CourseCardComponent],
  templateUrl: './courses-catalog.component.html',
  styleUrl: './courses-catalog.component.scss'
})
export class CoursesCatalogComponent {
  public categoryList: ICategory[] = [];
  #catalogService = inject(CatalogService)
  public searchList: IResCourse | any;
  pages: number[] = []
  pagesNum:number = 1;
  page: number = 1

  

  getSearchData(data:IResCourse){
    this.searchList = data
   
    
  }
}
