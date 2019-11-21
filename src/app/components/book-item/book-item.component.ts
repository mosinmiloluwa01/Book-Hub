import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../../models/book';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  modal = document.getElementById("myModal");
  @Input() book: Book;
  @Output() deleteBook: EventEmitter<Book> = new EventEmitter;
  @Output() updateBook: EventEmitter<Book> = new EventEmitter;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  onDelete(book) {
    this.deleteBook.emit(book);
  }

 openModal(id) {
    this.modalService.open(id)
  }
  
  closeModal(id) {
    this.modalService.close(id)
  }

}
