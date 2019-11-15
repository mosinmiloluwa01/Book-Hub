import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-sidebar',
  templateUrl: './category-sidebar.component.html',
  styleUrls: ['./category-sidebar.component.css']
})
export class CategorySidebarComponent implements OnInit {
  show:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse() {
    this.show = !this.show
  }

}
