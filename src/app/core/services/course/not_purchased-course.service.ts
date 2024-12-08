import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ECourse } from '../../../shared/enums/course.enum';
import { ICourse } from '../../../data/interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class NotPurchasedCourseService {
  #http = inject(HttpClient)

  getCourse(id: number) {
    return this.#http.get<ICourse>('/api/' + ECourse.course + id +'/')
  }
}
