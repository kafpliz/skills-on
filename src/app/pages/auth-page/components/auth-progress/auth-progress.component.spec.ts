import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthProgressComponent } from './auth-progress.component';

describe('AuthProgressComponent', () => {
  let component: AuthProgressComponent;
  let fixture: ComponentFixture<AuthProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
