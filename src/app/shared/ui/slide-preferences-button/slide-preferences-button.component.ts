import { CommonModule } from '@angular/common';
import { Component,  Input,  signal } from '@angular/core';

@Component({
  selector: 'app-slide-preferences-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-preferences-button.component.html',
  styleUrl: './slide-preferences-button.component.scss'
})
export class SlidePreferencesButtonComponent {
  @Input() items:any = []



  ngOnInit(){
    console.log(this.items);
    
  }
 
}
