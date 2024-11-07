import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ICategoryLink, ICourse } from '../../../../data/interfaces/courses-catalog.interface';
import { CategoryLink } from '../../../../data/constans/catalog-constans/catalog';
import { CatalogService } from '../../../../core/services/catalog/catalog.service';
import { CourseCardComponent } from "../course-card/course-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseCardComponent, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
  #router = inject(ActivatedRoute)
  public title: string = ''
  categorys: ICategoryLink[] = CategoryLink
  courses: ICourse[] = []
  #service = inject(CatalogService)
  pages: number[] = []
  pagesNum:number = 1;
  page: number = 1

  ngOnInit() {
    this.#router.params.subscribe((data: any) => {
      this.categorys.forEach(item => {
        if (item.path == data.category) {
          this.title = item.title
        }
      })
      this.#service.getCourse(this.title).subscribe(coursesList => {
        this.pagesNum = coursesList.pages
        this.pages = Array.from({ length: coursesList.pages }, (_, i) => i + 1);

        this.page = coursesList.page
        this.courses = coursesList.results
      })

    })


  }

  changePage(page: number) {
    let currentUrl = new URL(location.href);
    this.#service.getCourse(this.title, page).subscribe(data => {
      this.courses = data.results
      this.pagesNum = data.pages
      this.pages = Array.from({ length: data.pages }, (_, i) => i + 1);
      this.page = data.page
      if (currentUrl.searchParams.has('page')) {
        currentUrl.searchParams.set('page', `${this.page}`);
      } else {
        currentUrl.searchParams.append('page', `${this.page}`);
      }
      history.pushState(null, '', currentUrl.toString());
    })
  }


}
