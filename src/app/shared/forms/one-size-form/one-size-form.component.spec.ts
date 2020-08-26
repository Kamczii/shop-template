import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSizeFormComponent } from './one-size-form.component';

describe('OneSizeFormComponent', () => {
  let component: OneSizeFormComponent;
  let fixture: ComponentFixture<OneSizeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneSizeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSizeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
