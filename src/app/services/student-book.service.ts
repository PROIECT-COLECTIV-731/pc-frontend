import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Student} from "../shared/data-type/Student";
import {Book} from "../shared/data-type/Book";


@Injectable({
  providedIn: 'root'
})
export class StudentBookService {
  postUrl : string = "http://localhost:8080/books/get-books/";

  constructor(
    private http: HttpClient
  ) { }


  getBooks(studentId: number): Observable<Book[]>{
    console.log(this.postUrl + studentId);
    this.http.get<Book[]>(this.postUrl + studentId).subscribe(students => { console.log(students)});
    return this.http.get<Book[]>(this.postUrl + studentId);
  }
}
