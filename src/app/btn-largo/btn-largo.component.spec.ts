import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLargoComponent } from './btn-largo.component';

describe('BtnLargoComponent', () => {
  let component: BtnLargoComponent;
  let fixture: ComponentFixture<BtnLargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnLargoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnLargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
