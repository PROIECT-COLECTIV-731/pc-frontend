import { Component, OnInit } from '@angular/core';
import { AddBookService } from './service/add-book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  title: String | undefined;
  author: String | undefined;
  year: number | undefined;
  isbn: number | undefined;
  selectedDomain: number | undefined;
  domains: number[] | undefined;
  selectedPublisher: number | undefined;
  publishers: number[] | undefined;
  selectedCategory: number | undefined;
  categories: number[] | undefined;
  summary: String | undefined;
  ranking: number[] | undefined;
  selectedRanking: number | undefined;
  error: String|undefined;
  success: String|undefined;


  constructor(private service: AddBookService) {

    this.ranking = [1, 2, 3, 4, 5];
    this.domains = [16, 17, 18, 19];
    this.publishers = [6,7,8,9];
    this.categories = [8,9,10];
   
  }

  async addBook(author: String, title: String, year: number, isbn: number, domain: number, publisher: number, category: number, summary: String, ranking: number) {
    if (author) {
      var response = await this.service.addBook(author,title,year,isbn, domain, publisher,category,summary,ranking);
      if (response == "error") {
        this.error = "Error! This book was already added!"
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
