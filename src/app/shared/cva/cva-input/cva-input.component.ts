import { CommonModule } from '@angular/common';
import { Component, Injector, forwardRef, inject, input } from '@angular/core';
import { ControlValueAccessor, FormControl, FormControlName, FormGroupDirective, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

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
  public readonly placeholder = input('')
  isMoving: boolean = false
  public readonly valid = input(true)
 
  public formControl!: FormControl;

  #injector = inject(Injector)

 

  moveLabel() {
    this.isMoving = true
  }

  checkInp() {}
public value = ''


  onChange : any = () => {}; 
  onTouched : any = () => {}; 

  changeValue(data:any){

    this.value = data.target.value
    this.onChange()
  }
  writeValue(data: string) {
    this.value = data

  }

  registerOnChange(fn: any) {
  
    this.onChange = fn
   }

  registerOnTouched(fn:any) { 

    this.onTouched = fn
  }

}
