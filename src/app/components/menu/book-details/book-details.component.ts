import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BookTable } from 'src/app/shared/data-type/BookTable';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: BookTable;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.book = config.data.book;
  }

  ngOnInit(): void {
  }

}
