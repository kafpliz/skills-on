import { JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  input,
} from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AuthStore } from '../../../../../../core/store/auth/auth.store';
import { IInterest } from '../../../../../../data/interfaces/interest.interface';
import { SliderItemComponent } from './components/slider-item/slider-item.component';

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [CarouselModule, JsonPipe, SliderItemComponent],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperComponent {
  public slides = input<IInterest[]>([]);
  readonly store = inject(AuthStore);

  public onSelect(i: IInterest) {
    if (this.store.isSelected(i)) {
      this.store.removeInterest(i);
    } else {
      this.store.addInterest(i);
    }
  }
}
