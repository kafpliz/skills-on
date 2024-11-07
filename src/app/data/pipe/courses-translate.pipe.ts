import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coursesTranslate',
  standalone: true
})
export class CoursesTranslatePipe implements PipeTransform {

  transform(str:string): string {
    switch (str) {
      case 'rating-high-to-low':
        return 'Рейтинг по убыванию'
 
      case 'price-low-to-high':
        return 'Цена по возрастанию'
  
      case 'price-high-to-low':
        return 'Цена по убыванию'
    
      case 'low':
        return 'Начальный'
    
      case 'medium':
        return 'Продвинутый'
       
      case 'high':
        return 'Профи'
 
    
      default:
        return ''
        break;
    }
  }

}
