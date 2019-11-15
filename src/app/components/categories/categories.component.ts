import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category-service.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(categoryItems => {
      this.categories = categoryItems.data;
    });  
  }

  addCategory(category:Category) {
    console.log('added');
    this.categoryService.addCategory(category).subscribe(category => {
      this.categories.push(category);
    });
  }

  deleteCategory(category:Category) {
    this.categories = this.categories.filter(t => t.id !== category.id);
    this.categoryService.deleteCategory(category).subscribe();
  }

}
