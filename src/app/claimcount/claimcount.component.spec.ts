import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimcountComponent } from './claimcount.component';

describe('ClaimcountComponent', () => {
  let component: ClaimcountComponent;
  let fixture: ComponentFixture<ClaimcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimcountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
