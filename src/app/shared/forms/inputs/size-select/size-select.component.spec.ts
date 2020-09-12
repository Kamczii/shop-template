import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeSelect } from './size-select.component';

describe('SizeSelect', () => {
  let component: SizeSelect;
  let fixture: ComponentFixture<SizeSelect>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SizeSelect]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
