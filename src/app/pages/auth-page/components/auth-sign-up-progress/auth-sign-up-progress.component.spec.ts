import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignUpProgressComponent } from './auth-sign-up-progress.component';

describe('AuthSignUpProgressComponent', () => {
  let component: AuthSignUpProgressComponent;
  let fixture: ComponentFixture<AuthSignUpProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthSignUpProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthSignUpProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
