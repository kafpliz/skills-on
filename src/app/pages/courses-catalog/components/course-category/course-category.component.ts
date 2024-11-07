import { CommonModule } from '@angular/common';
import { Component, input, inject } from '@angular/core';
import { CatalogService } from '../../../../core/services/catalog/catalog.service';
import { CourseCardComponent } from "../course-card/course-card.component";
import { ICategory, ICategoryLink, ICourse } from '../../../../data/interfaces/courses-catalog.interface';
import { RouterLink } from '@angular/router';
import { CategoryLink } from '../../../../data/constans/catalog-constans/catalog';
import { ERoutes } from '../../../../shared/enums/routes/routes.enum';

@Component({
  selector: 'app-course-category',
  standalone: true,
  imports: [CommonModule, CourseCardComponent, RouterLink],
  templateUrl: './course-category.component.html',
  styleUrl: './course-category.component.scss'
})
export class CourseCategoryComponent {
  ERoutes = ERoutes
  #catalogService = inject(CatalogService)
  courses: {title:string, course:ICourse[]}[]  = []
  CategoryLink: ICategoryLink[] = CategoryLink

  ngOnInit() {
    this.#catalogService.getCategoryList().subscribe(list => {
      list.forEach(data => {
        this.#catalogService.getCategoryCourse(data.title).subscribe(course => {
          
          this.courses.push({title: data.title, course: course.results })
          
         
        })
       
      })
   
      
    })
  }

}
