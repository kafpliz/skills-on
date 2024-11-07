import { Directive, ElementRef, EventEmitter, HostListener, Output, inject } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>()
  #elementRef = inject(ElementRef)
  constructor() { }
  @HostListener("document:click", ['$event.target']) 
  onClick(targetElement:HTMLElement){
    const clickedInside = this.#elementRef.nativeElement.contains(targetElement)
  
    
    if(clickedInside){
      console.log('внутри');
      
    }
    if(!clickedInside){
      /* this.clickOutside.emit() */
      console.log('снаружи');
      
    }
  }
}
