import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../../models/book';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  modal = document.getElementById("updateModal");
  @Input() book: Book;
  @Output() deleteBook: EventEmitter<Book> = new EventEmitter;
  @Output() selectBook: EventEmitter<Book> = new EventEmitter;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  onDelete(book) {
    this.deleteBook.emit(book);
  }

  openModal(book) {
    this.selectBook.emit(book);
    this.modalService.open(this.modal);
  }
}
