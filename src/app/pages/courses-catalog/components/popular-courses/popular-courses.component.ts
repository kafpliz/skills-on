import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { CatalogService } from '../../../../core/services/catalog/catalog.service';
import { ICourse } from '../../../../data/interfaces/courses-catalog.interface';
import { CommonModule } from '@angular/common';
import { LevelTranslatePipe } from '../../../../core/pipes/level-translate.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-popular-courses',
  standalone: true,
  imports: [CommonModule, LevelTranslatePipe, RouterLink],
  templateUrl: './popular-courses.component.html',
  styleUrl: './popular-courses.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PopularCoursesComponent {
  courses: ICourse[] = []
  #service = inject(CatalogService)

  ngOnInit() {
    this.#service.getPopularCourse().subscribe(data => {
      this.courses = data.results
    })
  }
  getLevelClass(level: string) {
    return 'level-' + level
  }
}
