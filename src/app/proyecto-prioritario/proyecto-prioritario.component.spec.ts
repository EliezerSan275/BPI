import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoPrioritarioComponent } from './proyecto-prioritario.component';

describe('ProyectoPrioritarioComponent', () => {
  let component: ProyectoPrioritarioComponent;
  let fixture: ComponentFixture<ProyectoPrioritarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoPrioritarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoPrioritarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
