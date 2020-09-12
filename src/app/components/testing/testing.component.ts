import { FormGroup } from '@angular/forms/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      price: ['']
    })
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.form.value)
  }
}
