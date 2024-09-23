import { CommonModule } from '@angular/common';
import { Component,input } from '@angular/core';

@Component({
  selector: 'app-course-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-category.component.html',
  styleUrl: './course-category.component.scss'
})
export class CourseCategoryComponent {
  public level: string = 'low'
  public title = input('')
  

  getLevelClass() {
    return 'level-' + this.level
  }
}
