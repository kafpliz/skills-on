import { Component, inject, output } from '@angular/core';

import { CategoryLink, Level, OrderBy } from '../../../../data/constans/catalog-constans/catalog';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { ICourseItem, ICoursesFiltr, IResCourse } from '../../../../data/interfaces/courses-catalog.interface';
import { CoursesTranslatePipe } from '../../../../data/pipe/courses-translate.pipe';
import { CatalogService } from '../../../../core/services/catalog/catalog.service';


@Component({
  selector: 'app-courses-filter',
  standalone: true,
  imports: [CommonModule, MatSliderModule, FormsModule, CoursesTranslatePipe],
  templateUrl: './courses-filter.component.html',
  styleUrl: './courses-filter.component.scss'
})
export class CoursesFilterComponent {
  dropCategory = CategoryLink;
  order = OrderBy
  level = Level
  checkStates: number[] | null[] = new Array(3).fill(null);
  filter: ICoursesFiltr = {
    price: {
      min: 0,
      max: 0
    },
    order: '',
    level: '',
    category: ''
  }
  #service = inject(CatalogService)
  openModalB: boolean[] = new Array(3).fill(false)
  searchList = output<IResCourse>()
  items: ICourseItem = {
    skills: null,
    level: null,
    order: null
  }


  addClass(index: number, category?: string | null, level?: string | null, order?: string) {
    if (category) {
      this.checkStates[0] = index;
      this.filter.category = category
      this.items.skills = category
    }
    if (level) {
      this.checkStates[1] = index;
      this.filter.level = level
      this.items.level = level
    }
    if (order) {
      this.checkStates[2] = index;
      this.filter.order = order
      this.items.order = order
    }
  }

  openModal(idx: number) {
    this.openModalB[idx] = !this.openModalB[idx]

  }

  sendData() {
    this.#service.getCourseByFilter(this.filter).subscribe(data => {
      console.log(data);
      this.searchList.emit(data)
    })
  }

  clearAll() {
    this.filter.category = ''
    this.filter.order = ''
    this.filter.level = ''
    this.filter.price.min = 0
    this.filter.price.max = 0

    this.items.level = null
    this.items.order = null
    this.items.skills = null
  }
}
