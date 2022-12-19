import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/backend/backend.service';
import { CategoryService } from './service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  title: String | undefined;
  error: String | undefined;
  success: String | undefined;
  constructor(private service: CategoryService) { }

  async addCategory(name: String | undefined) {
    if (name) {
      var response = await this.service.addCategory(name);
      if (response == "error") {
        this.error = "Error! This category was already added!"
        this.success = undefined
      }
      else {
        this.success = "Success!"
        this.error = undefined
      }
    }
    else {
      this.error = "Error! Please enter a category name before submitting."
      this.success = undefined;
    }
  }
  ngOnInit(): void {
  }

}
