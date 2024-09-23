import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCatalogComponent } from './courses-catalog.component';

describe('CoursesCatalogComponent', () => {
  let component: CoursesCatalogComponent;
  let fixture: ComponentFixture<CoursesCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
