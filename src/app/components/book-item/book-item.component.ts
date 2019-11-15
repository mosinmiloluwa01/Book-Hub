import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Output() deleteBook: EventEmitter<Book> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  onDelete(book) {
    this.deleteBook.emit(book);
  }

}
