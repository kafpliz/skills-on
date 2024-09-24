import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'levelTranslate',
  standalone: true
})
export class LevelTranslatePipe implements PipeTransform {

  transform(level: string | undefined): string {
    switch (level) {
      case 'high':
        return 'Профи'
      case 'medium':
        return 'Продвинутый'

      case 'low':
        return 'Начальный'
      default:
        return ''
    }
  }

}
