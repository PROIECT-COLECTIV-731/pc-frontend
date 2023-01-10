import {Component, Inject} from '@angular/core';
import {MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA} from '@angular/material/legacy-dialog';
import {Student} from "../../../shared/data-type/Student";
import {Book} from "../../../shared/data-type/Book";
import {StudentBookService} from "../../../services/student-book.service";

@Component({
  selector: 'student-book-table',
  templateUrl: './student-book-table.component.html',
  styleUrls: ['./student-book-table.component.css']
})
export class StudentBookTableComponent {
  books: Book[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: Student,
              private studentBookService : StudentBookService) {
    console.log(data.id);
  }

  ngOnInit(){
    this.studentBookService.getBooks(this.data.id).subscribe(books => {
      this.books = books
    });
  }
}
