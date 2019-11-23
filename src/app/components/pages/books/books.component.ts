import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../models/book';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books;
  selectedBook = { id: '', name: '' };
  title='Update Book';
  updateModalId='updateModal';

  constructor(private bookService: BookService, private modalService: ModalService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(bookItems => {
      this.books = bookItems.data;
    });
  }

  addBook(book:Book) {
    this.bookService.addBook(book).subscribe(book => {
      this.books.push(book.data);
    });
  }

  deleteBook(book:Book) {
    this.books = this.books.filter(t => t.id !== book.id);
    this.bookService.deleteBook(book).subscribe();
  }

  selectBook(book:any) {
    this.selectedBook = book;
  }

  closeModal(event) {
    this.modalService.close(event);
  }

  updateBook(event) {
    event.path[3].style.display = "none";
     const data = {
        id: this.selectedBook.id,
        name: this.selectedBook.name,
      }
      this.bookService.updateBook(data).subscribe();
}

}
