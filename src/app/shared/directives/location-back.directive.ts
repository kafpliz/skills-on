import {Directive, inject} from '@angular/core';
import {Location} from "@angular/common";

@Directive({
  selector: '[appLocationBack]',
  standalone: true,
  host: {
    '(click)': 'navigateBack()'
  }
})
export class LocationBackDirective {

  private _location = inject(Location)


  public navigateBack() {
    this._location.back()
  }


}
