import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { CategoryService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() bookItem: any;
  @Input() categoryItem: any;
  @Input() modalTitle
  @Input() modalId
  category: any;
  name='';

  constructor(
    private bookService: BookService, 
    private modalService: ModalService, 
    private categoryService: CategoryService,
  ) { }

  ngOnInit() {}

  closeModal(event) {
    this.modalService.close(event);
  }
}
