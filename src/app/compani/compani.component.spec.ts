import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniComponent } from './compani.component';

describe('CompaniComponent', () => {
  let component: CompaniComponent;
  let fixture: ComponentFixture<CompaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompaniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
