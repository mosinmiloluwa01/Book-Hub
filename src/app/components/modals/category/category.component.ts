import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() book: Category;
  @Output() updateCategory: EventEmitter<any> = new EventEmitter;
  modal = document.getElementById("myModal");

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    console.log('clicked')
    this.modal.style.display = "none";
  }
  onSubmit(category) {
    console.log('here is category>>>', category)
    this.updateCategory.emit(category);
  }

}
