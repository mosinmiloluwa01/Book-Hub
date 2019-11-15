import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(bookItems => {
      this.books = bookItems.data;
    });
  }

  addBook(book:Book) {
    this.bookService.addBook(book).subscribe(book => {
      this.books.push(book);
    });
  }

  deleteBook(book:Book) {
    this.books = this.books.filter(t => t.id !== book.id);
    this.bookService.deleteBook(book).subscribe();
  }

}
