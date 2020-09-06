import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileToUploadComponent } from './file-to-upload.component';

describe('FileToUploadComponent', () => {
  let component: FileToUploadComponent;
  let fixture: ComponentFixture<FileToUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileToUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileToUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
