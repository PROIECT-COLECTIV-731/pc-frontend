import {Component, Inject, Input, OnInit} from '@angular/core';
import {Book} from "../books/models/book";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  displayMaximizable: boolean;
  email : string = ""
  isAdmin : boolean = false
  isStudent : boolean = false
  @Input()
  public book: Book

  constructor( public ref: DynamicDialogRef,
               public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.book = this.config.data;
    if (this.book.author === null) {
      this.book.author = "--";
    }
    if (this.book.title === null) {
      this.book.title = "--";
    }
    if (this.book.summary === null) {
      this.book.summary = "--";
    }

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


  modifyBook() {

  }

  borrowBook() {

  }
}
