import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ECatalog } from '../../../shared/enums/catalog.enum';
import { ICategory, ICourse, IResCourse } from '../../../data/interfaces/courses-catalog.interface';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  #http = inject(HttpClient)
  #enum = ECatalog

  getCategoryList() {
    return this.#http.get<ICategory[]>('/api/' + this.#enum.courses + this.#enum.CategoryList)
  }
  getCategoryCourse(category: string = '', title: string = '',  allowable_price: string = '', level: string = '', order_by: string = '') {
    const baseParams = new HttpParams().set('category', category).set('allowable_price', allowable_price).set('level', level).set('order_by', order_by).set('title', title)
    return this.#http.get<IResCourse>('/api/' + this.#enum.courses, { params: baseParams })
  }
  getCourse(category:string, page:number = 1){
    const params = new HttpParams().set('category',category).set('page', page)
    return this.#http.get<IResCourse>('/api/' +this.#enum.courses, {params} )
  }
  getPopularCourse(){
    const params = new HttpParams().set('order_by', 'rating-high-to-low')
    return this.#http.get<IResCourse>('/api/' + this.#enum.courses, {params})
  }

}
