import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
    #router = inject(ActivatedRoute)

    ngOnInit(){
      this.#router.params.subscribe(data=> {
        console.log(data);
        
      })
    }
  


}
