import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentoDetailsComponent } from './descuento-details.component';

describe('DescuentoDetailsComponent', () => {
  let component: DescuentoDetailsComponent;
  let fixture: ComponentFixture<DescuentoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescuentoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
