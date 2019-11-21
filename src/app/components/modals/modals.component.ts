import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {
  @Input() bookItem: any;
  @Output() updateBook: EventEmitter<any> = new EventEmitter;
  modal = document.getElementById("myModal");

  constructor() { }

  ngOnInit() {
  }
  
  closeModal() {
    console.log('clicked')
    this.modal.style.display = "none";
  }
  onSubmit(book) {
    console.log('here is book>>>', this.bookItem)
    this.updateBook.emit(book);
  }

}
