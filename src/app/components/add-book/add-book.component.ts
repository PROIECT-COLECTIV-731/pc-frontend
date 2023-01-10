import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category/service/category.service';
import { DomainService } from '../domain/service/domain.service';
import { PublisherService } from '../publisher/service/publisher.service';
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
  selectedDomain: String | undefined;
  domains: String[] | undefined;
  selectedPublisher: String | undefined;
  publishers: String[] | undefined;
  selectedCategory: String[] | undefined;
  categories: String[] | undefined;
  summary: String | undefined;
  link: String | undefined;
  selectedRanking: number | undefined;
  error: String | undefined;
  success: String | undefined;


  constructor(private service: AddBookService, private categoryService: CategoryService,private domainService: DomainService,private publisherSevice: PublisherService) {
    categoryService.getCategories().then((value) => this.categories = value)
    domainService.getDomains().then((value) => this.domains = value)
    publisherSevice.getPublisher().then((value) => this.publishers = value)
  } 
  public inputValidator(event: any) {
    //console.log(event.target.value);
    const pattern = /^[0-9]*$/;   
    //let inputChar = String.fromCharCode(event.charCode)
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
      // invalid character, prevent input

    }
  }

  async addBook(author: String, title: String, year: number, isbn: number, domain: String, publisher: String, category: String[], summary: String, link: String) {
    if (author && title && (year && year>=1900&&year<=2023) && isbn && domain && publisher && link) {
      var response = await this.service.addBook(author, title, year, isbn, domain, publisher, category, summary, link);
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
      if (!author) {
        this.error = "Error! Please enter an author before submitting."
      }
      else
        if (!title) {
          this.error = "Error! Please enter a title before submitting."
        }
        else
          if (!year) {
            this.error = "Error! Please enter a year before submitting."
          }
          else if( year<1900 || year>2023){
            this.error = "Error! Please enter a year between 1900 and 2023."
          }
          else
            if (!isbn) {
              this.error = "Error! Please enter an ISBN before submitting."
            }
            else
              if (!domain) {
                this.error = "Error! Please enter a domain before submitting."

              }
              else if (!publisher) {
                this.error = "Error! Please enter a publisher before submitting."

              }
              else if (!category) {
                this.error = "Error! Please enter a category before submitting."
              }
              else if (!link) {
                this.error = "Error! Please enter a link before submitting."
              }
      this.success = undefined;
    }
  }

  ngOnInit(): void {
  }

}
