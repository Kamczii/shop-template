import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceInputComponent } from './price-input.component';

describe('PriceInputComponent', () => {
  let component: PriceInputComponent;
  let fixture: ComponentFixture<PriceInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
