import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ECourse } from '../../../shared/enums/course.enum';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  #http = inject(HttpClient)

  getCourse(id: number) {
    return this.#http.get('/api/' + ECourse.course + id +'/')
  }
}
