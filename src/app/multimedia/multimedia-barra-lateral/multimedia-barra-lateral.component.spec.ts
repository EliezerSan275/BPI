import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaBarraLateralComponent } from './multimedia-barra-lateral.component';

describe('MultimediaBarraLateralComponent', () => {
  let component: MultimediaBarraLateralComponent;
  let fixture: ComponentFixture<MultimediaBarraLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultimediaBarraLateralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultimediaBarraLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
