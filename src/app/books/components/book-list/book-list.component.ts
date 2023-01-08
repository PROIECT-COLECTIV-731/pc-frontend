import {Component, OnInit} from '@angular/core';
import {Book, Domain, Publisher} from "../../models/book";
import {MessageService, PrimeNGConfig} from "primeng/api";
import {BookService} from "../../service/book.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {PopupComponent} from "../../../popup/popup.component";
import {DomainService} from "../../../components/domain/service/domain.service";
import {PublisherService} from "../../../components/publisher/service/publisher.service";



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [DialogService, MessageService]
})
export class BookListComponent implements OnInit {

  public book : any;
  books: Book[];
  isAdmin : boolean = false
  isStudent : boolean = false
  email : string = ""

  domains : Domain[] ;

  publishers: Publisher[];


  displayMaximizable: boolean;


  constructor(private bookService: BookService,private primengConfig: PrimeNGConfig,
              public dialogService: DialogService, public messageService: MessageService,
              public domainService: DomainService, public publisherService : PublisherService) {
  }
  ref: DynamicDialogRef;

  ngOnInit(): void {
    this.bookService.readBooks().subscribe((payload) => {
        this.books = payload;
      }
    );
    this.domainService.readDomains().subscribe((payload) => {
      this.domains = payload;
    });
    this.publisherService.readPublishers().subscribe((payload) => {
      this.publishers = payload;
    });
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
  showMaximizableDialog(book: Book) {
    this.displayMaximizable = true;
    //this.dialogService.open(PopupComponent, {data: book});
    this.ref = this.dialogService.open(PopupComponent, {
      data: book,
      header: book.title,
      width: '50%',
      height: '70%',
      closable: true,
      contentStyle: { 'max-height': '500px',
        overflow: 'auto' },
      baseZIndex: 10000,
    });
  }
  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

  addBook() {

  }
}
