import {Component, OnInit, ViewChild} from '@angular/core';
import {Book, Domain, Publisher} from "../../models/book";
import {MessageService, PrimeNGConfig} from "primeng/api";
import {BookService} from "../../service/book.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {PopupComponent} from "../../../popup/popup.component";



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [DialogService, MessageService]
})
export class BookListComponent implements OnInit {

  public book : any;
  books: Book[];

  domains : Domain[] ;

  publishers: Publisher[];


  displayMaximizable: boolean;


  constructor(private bookService: BookService,private primengConfig: PrimeNGConfig,
              public dialogService: DialogService, public messageService: MessageService) {
  }
  ref: DynamicDialogRef;

  ngOnInit(): void {
    this.bookService.readBooks().subscribe((payload) => {
        this.books = payload;
      }
    );
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
}
