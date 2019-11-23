import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Category } from '../../models/category';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  updateModal = document.getElementById("updateModal");
  addModal = document.getElementById("addModal");
  bookModal = document.getElementById("bookModal");
  @Input() category: Category;
  @Output() deleteCategory: EventEmitter<Category> = new EventEmitter;
  @Output() selectCategory: EventEmitter<Category> = new EventEmitter;
  @Output() setModalStatus: EventEmitter<any> = new EventEmitter;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  onDelete(category) {
    this.deleteCategory.emit(category);
  }

  openModal(category) {
    this.selectCategory.emit(category);
    this.modalService.open(this.updateModal);
  }

  openAddModal(category) {
    this.selectCategory.emit(category);
    this.modalService.open(this.addModal);
  }
  openBookModal(category) {
    this.selectCategory.emit(category);
    this.setModalStatus.emit('clicked');
    this.modalService.open(this.bookModal);
  }

}
