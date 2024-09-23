import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Catalog } from '../../../shared/enums/catalog.enum';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  #http = inject(HttpClient)
  #enum = Catalog

  getCategoryList(){
    return this.#http.get('/api/' + this.#enum.courses + this.#enum.CategoryList)
  }
}
