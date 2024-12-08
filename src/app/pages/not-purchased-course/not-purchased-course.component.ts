import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { NotPurchasedCourseService } from '../../core/services/course/not_purchased-course.service';
import { ActivatedRoute } from '@angular/router';
import { ICourse } from '../../data/interfaces/course.interface';

@Component({
  selector: 'app-not-purchased-course',
  standalone: true,
  imports: [],
  templateUrl: './not-purchased-course.component.html',
  styleUrl: './not-purchased-course.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotPurchasedCourseComponent {
  #service = inject(NotPurchasedCourseService)
  #route = inject(ActivatedRoute)
  course: ICourse | null = null
  ngOnInit() {
    this.#route.params.subscribe((param: any) => {
      this.#service.getCourse(param.id).subscribe(data => {
        this.course = data
      })
    })
  }

  getRating(val: number) {
    switch (val) {
      case 1:
        return [1]
      case 2:
        return [1, 2]
      case 3:
        return [1, 2, 3]
      case 4:
        return [1, 2, 3, 4]
      case 5:
        return [1, 2, 3, 4, 5]
      
     default:
      return []   
    }
  }
}
