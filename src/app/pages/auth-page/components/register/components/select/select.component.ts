import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { AuthService } from '../../../../../../core/services/auth/auth.service';
import { splitArrayIntoChunks } from '../../../../../../shared/utils/allUtils';
import { CommonModule } from '@angular/common';
import { SlidePreferencesButtonComponent } from "../../../../../../shared/ui/slide-preferences-button/slide-preferences-button.component";
import { SwiperComponent } from "./components/swiper/swiper.component";

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, SlidePreferencesButtonComponent, SwiperComponent],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SelectComponent {
  #authService: AuthService = inject(AuthService)
  allInterests: any = []
  resultInterests: [{ id: number }] | [] = []

  readonly store = inject(AuthStore);
  
  ngOnInit() {
    this.#authService.getInterests().subscribe(data => {
      console.log(data);
      this.allInterests = splitArrayIntoChunks(data, 8)
      console.log(this.allInterests);

    })
  }
  selectItem(e: any) {
    console.log(e.target.attributes[2].value);
    this.selectedArr.push({ id: e.target.attributes[2].value })
  }

}
