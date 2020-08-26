import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-button',
  templateUrl: './confirm-button.component.html',
  styleUrls: ['./confirm-button.component.scss']
})
export class ConfirmButtonComponent implements OnInit {

  @Input() disabled: boolean = false;
  @Input() message: String;
  @Output() confirmed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  confirm(){
    this.confirmed.emit('');
  }
}
