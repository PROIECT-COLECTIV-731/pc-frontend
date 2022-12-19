import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BookTableService} from "../../../services/book-table.service";
import {BookTable} from "../../../shared/data-type/BookTable";
import {Subscription} from "rxjs";
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import { LinkViewerComponent } from './link-viewer/link-viewer.component';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit  {

  books:BookTable[]=[];
  first = 0;
  rows = 5;
  totalRecords=0;
  link = 'https://drive.google.com/file/d/0Byd9s-7-NCIiUzM5WW9ReGxEQ2s/preview';



  constructor(private bookTableService:BookTableService,public ref: DynamicDialogRef, public config: DynamicDialogConfig,
    public dialogService: DialogService) { }


    
  @ViewChild(LinkViewerComponent) child!:LinkViewerComponent;

  ngOnInit(): void {
    console.log("ceva")
    this.bookTableService.getBooksWithStudentNr().subscribe({
      next: res => {
        Object.entries(res).map(([k, v]) => {
          this.generateListForTable(k,v);
        });
      },
      error: err => {
        console.error('error! ', err);
      }
    });
    console.log(this.books);
  }

  generateListForTable(title:string,number:string){
      let book:BookTable={"title":"","numberOfStudents":""};
      book.title=title;
      book.numberOfStudents=number;
      this.books.push(book);
      this.totalRecords++;
  }
  reset() {
    this.first = 0;
  }

  ngOnChanges(){

  }

}
