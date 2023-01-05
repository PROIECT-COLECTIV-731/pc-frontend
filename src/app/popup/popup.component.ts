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
  @Input()
  public book: Book

  constructor( public ref: DynamicDialogRef,
               public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.book = this.config.data;
  }


}
