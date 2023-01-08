import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import {TableModule} from "primeng/table";
import {MultiSelectModule} from "primeng/multiselect";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {SliderModule} from "primeng/slider";
import {ProgressBarModule} from "primeng/progressbar";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {RatingModule} from "primeng/rating";


@NgModule({
  declarations: [
    BookComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    TableModule,
    MultiSelectModule,
    FormsModule,
    DropdownModule,
    SliderModule,
    ProgressBarModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    RatingModule
  ],exports: [
    BookComponent,
    BookListComponent
  ]
})
export class BooksModule { }
