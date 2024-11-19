import { CommonModule } from '@angular/common';
import { Component,input } from '@angular/core';
import { ICourse } from '../../../../data/interfaces/courses-catalog.interface';
import { EndingFixPipe } from '../../../../core/pipes/ending-fix.pipe';
import { LevelTranslatePipe } from '../../../../core/pipes/level-translate.pipe';
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, EndingFixPipe, LevelTranslatePipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {

  public readonly course = input<ICourse>()

  getLevelClass() {
    return 'level-' + this.course()?.level
  }
}
