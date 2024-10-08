import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategoryLink, ICourse } from '../../../../data/interfaces/courses-catalog.interface';
import { CategoryLink } from '../../../../data/constans/catalog-constans/catalog-link';
import { CatalogService } from '../../../../core/services/catalog/catalog.service';
import { CourseCardComponent } from "../course-card/course-card.component";

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
    #router = inject(ActivatedRoute)
    public title:string = ''
    categorys:ICategoryLink[] = CategoryLink
    courses:ICourse[] = []
    #service = inject(CatalogService)

    ngOnInit(){
      this.#router.params.subscribe((data:any) => {
        this.categorys.forEach(item=> {
          if(item.path == data.category){
            this.title = item.title
          }
        })
       this.#service.getCourse(data.category).subscribe(coursesList=>{
          this.courses = coursesList
       })
        
      })

    
    }
  


}
