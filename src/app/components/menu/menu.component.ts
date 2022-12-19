import {Component, OnInit, ViewChild} from '@angular/core';
import {BookTableComponent} from "./book-table/book-table.component";
import {BookTable} from "../../shared/data-type/BookTable";
import {BookTableService} from "../../services/book-table.service";
import {BackendService} from "../../services/backend.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Router} from "@angular/router";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import { BookDetailsComponent } from './book-details/book-details.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  email : string = ""
  isAdmin : boolean = false
  isStudent : boolean = false
  ref: DynamicDialogRef | undefined;

  constructor(private router : Router, public dialogService: DialogService) { }
  // backendService : BackendService = new BackendService(new HttpClient())
  // bookTableService : BookTableService = new BookTableService(new BackendService(), new HttpClient());

  @ViewChild(BookTableComponent) child!:BookTableComponent;

  ngOnInit(): void {
    if (localStorage.getItem('email') != null){
      let adminRegEx = new RegExp('^[a-zA-Z|\.]*@ubbcluj.ro')
      let studentRegEx = new RegExp('^[a-zA-Z|\.]*@stud.ubbcluj.ro')
      this.email = localStorage.getItem('email')!
      if (adminRegEx.test(this.email)){
        //an admin has logged in right here
        this.isAdmin = true
      }
      else if (studentRegEx.test(this.email))
      {
        this.isStudent = true;
      }
      else {

      }
    }

  }
    showBooksDialog() {
      this.ref = this.dialogService.open(BookTableComponent, {
        header: 'Books',
        width: '70%'
      });
    }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
    localStorage.removeItem('email')
  }

  goToUpdate() {
    //TODO: link to actual updating component
    //this.router.navigate(['update-component'])
  }


  goToAdd() {
    //TODO: create add component
    // This code should run after adding (needs to be moved)
    window.alert("The book has been added!");
    this.ref = this.dialogService.open(BookDetailsComponent, {
      header: 'Book details',
      width: '70%',
      // Data is hard coded for demonstration purposes only
      data: {book: {"title": "title", "numberOfStudents": "1"}}
    });
  }
}
