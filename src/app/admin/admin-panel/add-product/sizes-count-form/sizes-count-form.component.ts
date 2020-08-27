import { Component, OnInit, Input } from '@angular/core';
import { Sizes } from 'src/app/shared/enums/sizes.enum';
import { MatSelectionListChange } from '@angular/material';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sizes-count-form',
  templateUrl: './sizes-count-form.component.html',
  styleUrls: ['./sizes-count-form.component.scss']
})
export class SizesCountFormComponent implements OnInit {

  @Input() size: Sizes;


  sizeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.sizeForm = this.fb.group({
      size: ['', Validators.required],
      count: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.sizeForm.controls.size.setValue(this.size);
  }

}
