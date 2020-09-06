import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-file-to-upload',
  templateUrl: './file-to-upload.component.html',
  styleUrls: ['./file-to-upload.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class FileToUploadComponent implements OnInit {

  @Input() image: {name: string, url: string};
  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  delete(){
    this.deleted.emit(this.image);
  }
}
