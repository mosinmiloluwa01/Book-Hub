import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book:string
  @Output() addBook: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const book = {
      name: this.book,
    }
    this.addBook.emit(book);
  }

}
