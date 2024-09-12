import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

import { IInterest } from '../../../../../../../../data/interfaces/interest.interface';

@Component({
  selector: 'app-slider-item',
  standalone: true,
  imports: [],
  templateUrl: './slider-item.component.html',
  styleUrl: './slider-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderItemComponent {
  public interest = input.required<IInterest>();
  public onSelect = output<IInterest>();
  public isSelected = input(false);
  public selectInterest() {
    this.onSelect.emit(this.interest());
  }
}
