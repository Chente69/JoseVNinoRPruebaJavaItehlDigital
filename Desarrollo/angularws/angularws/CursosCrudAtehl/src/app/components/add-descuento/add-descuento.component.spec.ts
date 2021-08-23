import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDescuentoComponent } from './add-descuento.component';

describe('AddDescuentoComponent', () => {
  let component: AddDescuentoComponent;
  let fixture: ComponentFixture<AddDescuentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDescuentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDescuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
