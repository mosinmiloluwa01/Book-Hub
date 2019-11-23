import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../../services/category-service.service';
import { Category } from '../../models/category';
import { ModalService } from 'src/app/services/modal/modal.service';
import { BookService } from 'src/app/services/book.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories;
  bookCategories;
  title='Update Category';
  addTitle='Add A Book To Category';
  booksInCategory='Books in this category'
  selectedCategory = { id: '', name: '' };
  updateModalId='updateModal';
  addModalId='addModal';
  bookModalId='bookModal';
  selectedBookItem = '';
  booksInACategory;
  retrievalStatus;

  constructor(
    private categoryService: CategoryService,
    private bookService: BookService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(categoryItems => {
      this.categories = categoryItems.data;
    });  
    this.bookService.getBooks().subscribe(book => {
      this.bookCategories = book.data;
    });
    console.log(this.retrievalStatus);
  }

  addCategory(category:Category) {
    this.categoryService.addCategory(category).subscribe(category => {
      this.categories.push(category.data);
    });
  }

  deleteCategory(category:Category) {
    this.categories = this.categories.filter(t => t.id !== category.id);
    this.categoryService.deleteCategory(category).subscribe();
  }

  selectCategory(category: any) {
    this.selectedCategory = category;
  }

  closeModal(event) {
    this.modalService.close(event);
  }

  onSubmit(event) {
    event.path[3].style.display = "none";
     const data = {
        id: this.selectedCategory.id,
        name: this.selectedCategory.name,
      }
      this.categoryService.updateCategory(data).subscribe();
   }

   selectBook(bookId) {
     this.selectedBookItem = bookId;
  }

   addBook(event) {
    event.path[3].style.display = "none";
     const data ={
       id: this.selectedCategory.id,
       bookId: this.selectedBookItem
     }
     this.categoryService.addBookToCategory(data).subscribe();
  }

  selectBookItem(bookId) {
    this.selectedBookItem = bookId;
  }

  setModalStatus(value) {
    this.retrievalStatus = value;
  }

  getBooksInCategory(category) {
    if(category && this.retrievalStatus === 'clicked'){
      this.retrievalStatus = 'empty';
      this.categoryService.getBooksInCategory(this.selectedCategory).subscribe( books => {
      this.booksInACategory = books.data[0].Books;
    });
    }
  }
}
