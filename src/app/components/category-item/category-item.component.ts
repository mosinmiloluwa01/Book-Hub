import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  modal = document.getElementById("myModal");
  @Input() category: Category;
  @Output() deleteCategory: EventEmitter<Category> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  onDelete(category) {
    this.deleteCategory.emit(category);
  }

  openModal(category) {
    this.modal.style.display = "block";
    console.log('book>>>', category);
  }

}
