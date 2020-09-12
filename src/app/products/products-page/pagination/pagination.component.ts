import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() length: number;
  @Input() pageSize: number;
  @Output() pageChanged = new EventEmitter<PageEvent>();

  constructor() { }

  ngOnInit() {
  }

}
