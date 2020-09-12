import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProductsInputComponent } from './search-products-input.component';

describe('SearchProductsInputComponent', () => {
  let component: SearchProductsInputComponent;
  let fixture: ComponentFixture<SearchProductsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchProductsInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProductsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
