import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'endingFix',
  standalone: true
})
export class EndingFixPipe implements PipeTransform {

  transform(comment: number | any): string {
    if (typeof comment == 'number') {
      if (comment == 0) {
        return comment + ' отзывов'
      } else if (comment == 1 || comment == 21) {
        return comment + ' отзыв'
      } else if (comment <= 4) {
        return comment + ' отзыва'
      } else {
        return comment + ' отзывов'
      }
    } else {
      return '0 отзывов'
    }
  }

}
