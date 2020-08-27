import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartListTableComponent } from './cart-list-table.component';

describe('CartListTableComponent', () => {
  let component: CartListTableComponent;
  let fixture: ComponentFixture<CartListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartListTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
