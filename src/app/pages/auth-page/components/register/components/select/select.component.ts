import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { AuthService } from '../../../../../../core/services/auth/auth.service';
import { splitArrayIntoChunks } from '../../../../../../shared/utils/allUtils';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ERoutes } from '../../../../../../shared/enums/routes.enum';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SelectComponent {
  #authService: AuthService = inject(AuthService)
  allInterests: any = []
  resultInterests: [{ id: number }] | [] = []
  selectedArr: any[] = []
  activeItem: any[] = []
  #activatedRoute = inject(ActivatedRoute)
  #router: Router = inject(Router)

  isSelected: boolean = false
  ngOnInit() {
    this.#authService.getInterests().subscribe(data => {
      console.log(data);
      this.allInterests = splitArrayIntoChunks(data, 8)
      console.log(this.allInterests);

    })
  }
  selectItem(e: any, iId: number) {
    const id = e.target.attributes[2].value;
    const idx = this.activeItem.indexOf(iId);
    console.log(idx, id);

    if (idx === -1) {
      this.activeItem.push(iId);
      this.selectedArr.push({ id: id })
    } else {
      this.selectedArr.splice(idx, 1)
      this.activeItem.splice(idx, 1);
    }


  }

  sendData() {
    this.#authService.postInterests(this.selectedArr).subscribe(data=> {
      this.#router.navigate(['../' + ERoutes.SUCCESSFULLY], { relativeTo: this.#activatedRoute })
    })
  }

}
