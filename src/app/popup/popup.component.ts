import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Book} from "../books/models/book";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Output() btnClick = new EventEmitter();

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
     //this.link  = 'https://drive.google.com/file/d/0Byd9s-7-NCIiUzM5WW9ReGxEQ2s/preview';
     document.body.innerHTML = '<div id="myDiv"><div>'
     let myContainer = <HTMLElement> document.querySelector("#myDiv");
     myContainer.innerHTML = "<button onClick='history.go(0)'>Return to Books</button><div class=\"pdf-container\"> <embed src=\"" + this.book.contentLink + "\" height=\"1000\" width=\"100%\" /> </div>";
     this.btnClick.emit();
  }
}
