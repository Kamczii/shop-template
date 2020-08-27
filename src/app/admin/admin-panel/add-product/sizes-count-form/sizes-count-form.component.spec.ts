import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizesCountFormComponent } from './sizes-count-form.component';

describe('SizesCountFormComponent', () => {
  let component: SizesCountFormComponent;
  let fixture: ComponentFixture<SizesCountFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SizesCountFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizesCountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
