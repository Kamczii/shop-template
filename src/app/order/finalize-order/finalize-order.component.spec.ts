import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizeOrderComponent } from './finalize-order.component';

describe('FinalizeOrderComponent', () => {
  let component: FinalizeOrderComponent;
  let fixture: ComponentFixture<FinalizeOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FinalizeOrderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
