import { CommonModule } from '@angular/common';
import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor,  NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-cva-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cva-input.component.html',
  styleUrl: './cva-input.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CvaInputComponent),
    multi: true
  }]
})

export class CvaInputComponent implements ControlValueAccessor {
  private _value: any;
  public readonly placeholder = input('')
 

  onChange(_: any) { }

  writeValue(value: any) {

  }

  registerOnChange(fn: any) {

  }

  registerOnTouched() { }
}
