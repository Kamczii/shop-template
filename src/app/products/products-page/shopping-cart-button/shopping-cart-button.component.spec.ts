import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartButtonComponent } from './shopping-cart-button.component';

describe('ShoppingCartButtonComponent', () => {
  let component: ShoppingCartButtonComponent;
  let fixture: ComponentFixture<ShoppingCartButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
