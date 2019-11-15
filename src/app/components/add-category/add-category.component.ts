import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category:string
  @Output() addCategory: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const category = {
      name: this.category,
    }
    this.addCategory.emit(category);
  }

}
